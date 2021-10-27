
#include "GraphicsSystem.h"
#include "SimplerShadowGameState.h"

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

int mainApp( int argc, const char *argv[] )
{
    return Demo::MainEntryPoints::mainAppSingleThreaded( DEMO_MAIN_ENTRY_PARAMS );
}

static void createShadowNode(void)
{
	Ogre::Root& root( Ogre::Root::getSingleton() );
	
	Ogre::ShadowNodeHelper::ShadowParamVec shadowParams;
	Ogre::ShadowNodeHelper::ShadowParam shadowParam;
	memset( &shadowParam, 0, sizeof(shadowParam) );

	shadowParam.technique = Ogre::SHADOWMAP_PSSM;
	shadowParam.numPssmSplits = 3u;
	shadowParam.resolution[0].x = 2048u;
	shadowParam.resolution[0].y = 2048u;
	for( size_t i=1u; i<4u; ++i )
	{
		shadowParam.resolution[i].x = 1024u;
		shadowParam.resolution[i].y = 1024u;
	}
	shadowParam.atlasStart[0].x = 0u;
	shadowParam.atlasStart[0].y = 0u;
	shadowParam.atlasStart[1].x = 0u;
	shadowParam.atlasStart[1].y = 2048u;
	shadowParam.atlasStart[2].x = 1024u;
	shadowParam.atlasStart[2].y = 2048u;

	shadowParam.supportedLightTypes = 0u;
	shadowParam.addLightType( Ogre::Light::LT_DIRECTIONAL );
	shadowParams.push_back( shadowParam );

	Ogre::ShadowNodeHelper::createShadowNodeWithSettings(
		root.getCompositorManager2(),
		root.getRenderSystem()->getCapabilities(),
		"ShadowMapFromCodeShadowNode",
		shadowParams, false );
}

namespace Demo
{
    class ShadowMapFromCodeGraphicsSystem : public GraphicsSystem
    {

        virtual Ogre::CompositorWorkspace* setupCompositor()
        {
			createShadowNode();

            Ogre::CompositorManager2 *compositorManager = mRoot->getCompositorManager2();
            const Ogre::String workspaceName( "xWorkspace" );

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
             }

            mWorkspace = compositorManager->addWorkspace( mSceneManager, mRenderWindow->getTexture(),
                mCamera, workspaceName, true );
            return mWorkspace;
        }

    public:
        ShadowMapFromCodeGraphicsSystem( GameState *gameState ) :
            GraphicsSystem( gameState )
        {
        }
    };

    void MainEntryPoints::createSystems( GameState **outGraphicsGameState,
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

        GraphicsSystem *graphicsSystem = new ShadowMapFromCodeGraphicsSystem( gfxGameState );

        gfxGameState->_notifyGraphicsSystem( graphicsSystem );

        *outGraphicsGameState = gfxGameState;
        *outGraphicsSystem = graphicsSystem;
    }

    void MainEntryPoints::destroySystems( GameState *graphicsGameState,
                                          GraphicsSystem *graphicsSystem,
                                          GameState *logicGameState,
                                          LogicSystem *logicSystem )
    {
        delete graphicsSystem;
        delete graphicsGameState;
    }

    const char* MainEntryPoints::getWindowTitle(void)
    {
        return "Shadow map from code";
    }
}
