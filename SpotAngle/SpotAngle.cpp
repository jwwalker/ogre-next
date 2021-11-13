
#include "GraphicsSystem.h"
#include "SpotAngleGameState.h"
#include "SpotAngle.h"

#include "OgreSceneManager.h"
#include "OgreCamera.h"
#include "OgreRoot.h"
#include "OgreWindow.h"
#include "OgreConfigFile.h"
#include "Compositor/OgreCompositorManager2.h"
#include "Compositor/OgreCompositorNodeDef.h"
#include "Compositor/OgreCompositorShadowNode.h"
#include "Compositor/Pass/PassScene/OgreCompositorPassSceneDef.h"

//Declares WinMain / main
#include "MainEntryPointHelper.h"
#include "System/MainEntryPoints.h"

#if OGRE_USE_SDL2
	#include "SdlInputHandler.h"
    #include <SDL_syswm.h>
#endif

#if OGRE_PLATFORM == OGRE_PLATFORM_APPLE || OGRE_PLATFORM == OGRE_PLATFORM_APPLE_IOS
    #include "OSX/macUtils.h"
    #if OGRE_PLATFORM == OGRE_PLATFORM_APPLE_IOS
        #include "System/iOS/iOSUtils.h"
    #else
        #include "System/OSX/OSXUtils.h"
    #endif
#endif


#if OGRE_PLATFORM != OGRE_PLATFORM_ANDROID
#if OGRE_PLATFORM == OGRE_PLATFORM_WIN32
INT WINAPI WinMainApp( HINSTANCE hInst, HINSTANCE hPrevInstance, LPSTR strCmdLine, INT nCmdShow )
#else
int mainApp( int argc, const char *argv[] )
#endif
{
    return Demo::MainEntryPoints::mainAppSingleThreaded( DEMO_MAIN_ENTRY_PARAMS );
}
#endif

//-----------------------------------------------------------------------------------
void Demo::SpotAngleGraphicsSystem::initialize( const Ogre::String &windowTitle )
{
#if OGRE_USE_SDL2
	//if( SDL_Init( SDL_INIT_EVERYTHING ) != 0 )
	if( SDL_Init( SDL_INIT_TIMER | SDL_INIT_VIDEO | SDL_INIT_EVENTS ) != 0 )
	{
		OGRE_EXCEPT( Ogre::Exception::ERR_INTERNAL_ERROR, "Cannot initialize SDL2!",
					 "GraphicsSystem::initialize" );
	}
#endif

	Ogre::String pluginsPath;
	// only use plugins.cfg if not static
#ifndef OGRE_STATIC_LIB
#if OGRE_DEBUG_MODE && !((OGRE_PLATFORM == OGRE_PLATFORM_APPLE) || (OGRE_PLATFORM == OGRE_PLATFORM_APPLE_IOS))
	pluginsPath = mPluginsFolder + "plugins_d.cfg";
#else
	pluginsPath = mPluginsFolder + "plugins.cfg";
#endif
#endif

#if OGRE_PLATFORM != OGRE_PLATFORM_ANDROID
	const Ogre::String cfgPath = mWriteAccessFolder + "ogre.cfg";
#else
	const Ogre::String cfgPath = "";
#endif

	mRoot = new Ogre::Root( pluginsPath, cfgPath,
								 mWriteAccessFolder + "Ogre.log",
								 windowTitle );

	// enable sRGB Gamma Conversion mode by default for all renderers,
	const Ogre::RenderSystemList& renderers( mRoot->getAvailableRenderers() );
    for (auto& renderSystem : renderers)
    {
        renderSystem->setConfigOption( "sRGB Gamma Conversion", "Yes" );
    }
    mRoot->setRenderSystem( renderers[0] );

	mOverlaySystem = OGRE_NEW Ogre::v1::OverlaySystem();

	mRoot->initialise( false, windowTitle );

	int width   = 1280;
	int height  = 720;

	Ogre::NameValuePairList params;
#if OGRE_USE_SDL2
	int screen = 0;
	int posX = SDL_WINDOWPOS_CENTERED_DISPLAY(screen);
	int posY = SDL_WINDOWPOS_CENTERED_DISPLAY(screen);

	mSdlWindow = SDL_CreateWindow(
				windowTitle.c_str(),    // window title
				posX,               // initial x position
				posY,               // initial y position
				width,              // width, in pixels
				height,             // height, in pixels
				SDL_WINDOW_SHOWN | SDL_WINDOW_RESIZABLE );

	//Get the native whnd
	SDL_SysWMinfo wmInfo;
	SDL_VERSION( &wmInfo.version );

	if( SDL_GetWindowWMInfo( mSdlWindow, &wmInfo ) == SDL_FALSE )
	{
		OGRE_EXCEPT( Ogre::Exception::ERR_INTERNAL_ERROR,
					 "Couldn't get WM Info! (SDL2)",
					 "GraphicsSystem::initialize" );
	}

	Ogre::String winHandle;
	switch( wmInfo.subsystem )
	{
	#if defined(SDL_VIDEO_DRIVER_COCOA)
	case SDL_SYSWM_COCOA:
		winHandle  = Ogre::StringConverter::toString(WindowContentViewHandle(wmInfo));
		break;
	#endif
	default:
		OGRE_EXCEPT( Ogre::Exception::ERR_NOT_IMPLEMENTED,
					 "Unexpected WM! (SDL2)",
					 "GraphicsSystem::initialize" );
		break;
	}

	params.insert( std::make_pair("parentWindowHandle",  winHandle) );
#endif

	params.insert( std::make_pair("title", windowTitle) );
	params.insert( std::make_pair("reverse_depth", "true" ) );
	params.insert( std::make_pair("gamma", "true" ) );
	params.insert( std::make_pair("FSAA", "true" ) );
	params.insert( std::make_pair("vsync", "true" ) );

	//initMiscParamsListener( params );

	mRenderWindow = Ogre::Root::getSingleton().createRenderWindow( windowTitle, width, height,
																   false, &params );

	setupResources();
	loadResources();
	chooseSceneManager();
	createCamera();
	mWorkspace = setupCompositor();

#if OGRE_USE_SDL2
	mInputHandler = new SdlInputHandler( mSdlWindow, mCurrentGameState,
										 mCurrentGameState, mCurrentGameState );
#endif
}


void Demo::SpotAngleGraphicsSystem::createPcfShadowNode(void)
{
	Ogre::CompositorManager2 *compositorManager = mRoot->getCompositorManager2();
	Ogre::RenderSystem *renderSystem = mRoot->getRenderSystem();

	Ogre::ShadowNodeHelper::ShadowParamVec shadowParams;

	Ogre::ShadowNodeHelper::ShadowParam shadowParam;
	memset( &shadowParam, 0, sizeof(shadowParam) );

	//First light, directional
	shadowParam.technique = Ogre::SHADOWMAP_PSSM;
	shadowParam.numPssmSplits = 3u;
	shadowParam.resolution[0].x = 2048u;
	shadowParam.resolution[0].y = 2048u;
	shadowParam.resolution[1].x = 1024u;
	shadowParam.resolution[1].y = 1024u;
	shadowParam.resolution[2].x = 1024u;
	shadowParam.resolution[2].y = 1024u;
	shadowParam.atlasStart[0].x = 0u;
	shadowParam.atlasStart[0].y = 0u;
	shadowParam.atlasStart[1].x = 0u;
	shadowParam.atlasStart[1].y = 2048u;
	shadowParam.atlasStart[2].x = 1024u;
	shadowParam.atlasStart[2].y = 2048u;

	shadowParam.supportedLightTypes = 0u;
	shadowParam.addLightType( Ogre::Light::LT_DIRECTIONAL );
	shadowParams.push_back( shadowParam );

	//Second light, spot
	shadowParam.technique = Ogre::SHADOWMAP_FOCUSED;
	shadowParam.resolution[0].x = 2048u;
	shadowParam.resolution[0].y = 2048u;
	shadowParam.atlasStart[0].x = 0u;
	shadowParam.atlasStart[0].y = 2048u + 1024u;

	shadowParam.supportedLightTypes = 0u;
	shadowParam.addLightType( Ogre::Light::LT_POINT );
	shadowParam.addLightType( Ogre::Light::LT_SPOTLIGHT );
	shadowParams.push_back( shadowParam );

	Ogre::ShadowNodeHelper::createShadowNodeWithSettings( compositorManager,
														  renderSystem->getCapabilities(),
														  "ShadowMapFromCodeShadowNode",
														  shadowParams, false );
}


Ogre::CompositorWorkspace* Demo::SpotAngleGraphicsSystem::setupCompositor()
{
	Ogre::CompositorManager2 *compositorManager = mRoot->getCompositorManager2();
	const Ogre::String workspaceName( "ShadowMapFromCodeWorkspace" );

	if( !compositorManager->hasWorkspaceDefinition( workspaceName ) )
	{
		compositorManager->createBasicWorkspaceDef( workspaceName, mBackgroundColour,
													Ogre::IdString() );

		const Ogre::String nodeDefName = "AutoGen " +
										 Ogre::IdString(workspaceName +
														"/Node").getReleaseText();
		Ogre::CompositorNodeDef *nodeDef =
				compositorManager->getNodeDefinitionNonConst( nodeDefName );

		Ogre::CompositorTargetDef *targetDef = nodeDef->getTargetPass( 0 );
		const Ogre::CompositorPassDefVec &passes = targetDef->getCompositorPasses();

		assert( dynamic_cast<Ogre::CompositorPassSceneDef*>( passes[0] ) );
		Ogre::CompositorPassSceneDef *passSceneDef =
				static_cast<Ogre::CompositorPassSceneDef*>( passes[0] );
		passSceneDef->mShadowNode = "ShadowMapFromCodeShadowNode";

		createPcfShadowNode();
		//createEsmShadowNodes();
	}

	mWorkspace = compositorManager->addWorkspace( mSceneManager, mRenderWindow->getTexture(),
												  mCamera, "ShadowMapFromCodeWorkspace", true );
	return mWorkspace;
}

void Demo::SpotAngleGraphicsSystem::setupResources(void)
{
	Demo::GraphicsSystem::setupResources();

    addResourceLocation(
    	Ogre::String( "Contents/Resources/2.0/"
		"scripts/materials/PbsMaterials" ),
    	"FileSystem", "General" );
}

void Demo::SpotAngleGraphicsSystem::loadResources(void)
{
	registerHlms();

	//loadTextureCache();
	//loadHlmsDiskCache();

	// Initialise, parse scripts etc
	Ogre::ResourceGroupManager::getSingleton().initialiseAllResourceGroups( true );
}

void Demo::SpotAngleGraphicsSystem::createCamera(void)
{
    mCamera = mSceneManager->createCamera( "Main Camera" );

    mCamera->setPosition( Ogre::Vector3( 0, 1, 3 ) );
    // Look back along -Z
    mCamera->lookAt( Ogre::Vector3( 0, 0, 0 ) );
    mCamera->setNearClipDistance( 0.2f );
    mCamera->setFarClipDistance( 1000.0f );
    mCamera->setAutoAspectRatio( true );
    mCamera->setFOVy( Ogre::Degree( 30.0 ) );
}

///MARK: -

void Demo::MainEntryPoints::createSystems( GameState **outGraphicsGameState,
									 GraphicsSystem **outGraphicsSystem,
									 GameState **outLogicGameState,
									 LogicSystem **outLogicSystem )
{
	ShadowMapFromCodeGameState *gfxGameState = new ShadowMapFromCodeGameState(
	"This sample is almost exactly the same as ShadowMapDebugging.\n"
	"The main difference is that the shadow nodes are being generated programmatically\n"
	"via ShadowNodeHelper::createShadowNodeWithSettings instead of relying on\n"
	"Compositor scripts.\n"
	"This sample was added due to popular demand.\n\n"
	"Creating shadow nodes via code can be a complex and error prone task, thus\n"
	"ShadowNodeHelper greatly facilitates the job.\n"
	"If the code does not suit your particular needs, you can grab its internal code\n"
	"and analyze/understand how it works so you can adapt it to your particular needs.\n" );

	GraphicsSystem *graphicsSystem = new SpotAngleGraphicsSystem( gfxGameState );

	gfxGameState->_notifyGraphicsSystem( graphicsSystem );

	*outGraphicsGameState = gfxGameState;
	*outGraphicsSystem = graphicsSystem;
}

void Demo::MainEntryPoints::destroySystems( GameState *graphicsGameState,
									  GraphicsSystem *graphicsSystem,
									  GameState *logicGameState,
									  LogicSystem *logicSystem )
{
	delete graphicsSystem;
	delete graphicsGameState;
}

const char* Demo::MainEntryPoints::getWindowTitle(void)
{
	return "Shadow map from code";
}
