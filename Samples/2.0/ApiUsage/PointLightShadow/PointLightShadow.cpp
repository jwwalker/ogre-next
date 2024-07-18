
#include "GraphicsSystem.h"
#include "PointLightShadowGameState.h"

#include "Compositor/OgreCompositorManager2.h"
#include "Compositor/OgreCompositorNodeDef.h"
#include "Compositor/OgreCompositorShadowNode.h"
#include "Compositor/Pass/PassScene/OgreCompositorPassSceneDef.h"
#include "OgreHlmsManager.h"
#include "OgreHlmsPbs.h"
#include "OgreWindow.h"

// Declares WinMain / main
#include "MainEntryPointHelper.h"
#include "System/MainEntryPoints.h"

#if OGRE_PLATFORM != OGRE_PLATFORM_ANDROID
#    if OGRE_PLATFORM == OGRE_PLATFORM_WIN32
INT WINAPI WinMainApp( HINSTANCE hInst, HINSTANCE hPrevInstance, LPSTR strCmdLine, INT nCmdShow )
#    else
int mainApp( int argc, const char *argv[] )
#    endif
{
    return Demo::MainEntryPoints::mainAppSingleThreaded( DEMO_MAIN_ENTRY_PARAMS );
}
#endif

namespace Demo
{
    class PointLightShadowGraphicsSystem : public GraphicsSystem
    {
        void createPcfShadowNode()
        {
            Ogre::CompositorManager2 *compositorManager = mRoot->getCompositorManager2();
            Ogre::RenderSystem *renderSystem = mRoot->getRenderSystem();

            Ogre::ShadowNodeHelper::ShadowParamVec shadowParams;

            Ogre::ShadowNodeHelper::ShadowParam shadowParam;
            silent_memset( &shadowParam, 0, sizeof( shadowParam ) );

            // First light, directional
            shadowParam.technique = Ogre::SHADOWMAP_PSSM;
            shadowParam.numPssmSplits = 3u;
            shadowParam.resolution[0].x = 2048u;
            shadowParam.resolution[0].y = 2048u;
            for( size_t i = 1u; i < 4u; ++i )
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

            // Second light, directional, spot or point
            shadowParam.technique = Ogre::SHADOWMAP_FOCUSED;
            shadowParam.resolution[0].x = 2048u;
            shadowParam.resolution[0].y = 2048u;
            shadowParam.atlasStart[0].x = 0u;
            shadowParam.atlasStart[0].y = 2048u + 1024u;

            shadowParam.supportedLightTypes = 0u;
            shadowParam.addLightType( Ogre::Light::LT_POINT );
            shadowParam.addLightType( Ogre::Light::LT_SPOTLIGHT );
            shadowParams.push_back( shadowParam );

            Ogre::ShadowNodeHelper::createShadowNodeWithSettings(
                compositorManager, renderSystem->getCapabilities(),
                "PointLightShadowShadowNode",
                shadowParams, false, 4096u );
        }


        Ogre::CompositorWorkspace *setupCompositor() override
        {
            Ogre::CompositorManager2 *compositorManager = mRoot->getCompositorManager2();
            const Ogre::String workspaceName( "PointLightShadowWorkspace" );

            if( !compositorManager->hasWorkspaceDefinition( workspaceName ) )
            {
                compositorManager->createBasicWorkspaceDef( workspaceName, mBackgroundColour,
                                                            Ogre::IdString() );

                const Ogre::String nodeDefName =
                    "AutoGen " + Ogre::IdString( workspaceName + "/Node" ).getReleaseText();
                Ogre::CompositorNodeDef *nodeDef =
                    compositorManager->getNodeDefinitionNonConst( nodeDefName );

                Ogre::CompositorTargetDef *targetDef = nodeDef->getTargetPass( 0 );
                const Ogre::CompositorPassDefVec &passes = targetDef->getCompositorPasses();

                assert( dynamic_cast<Ogre::CompositorPassSceneDef *>( passes[0] ) );
                Ogre::CompositorPassSceneDef *passSceneDef =
                    static_cast<Ogre::CompositorPassSceneDef *>( passes[0] );
                passSceneDef->mShadowNode = "PointLightShadowShadowNode";

                createPcfShadowNode();
            }

            mWorkspace = compositorManager->addWorkspace( mSceneManager, mRenderWindow->getTexture(),
                                                          mCamera, "PointLightShadowWorkspace", true );
            return mWorkspace;
        }

    public:
        PointLightShadowGraphicsSystem( GameState *gameState ) : GraphicsSystem( gameState ) {}
    };

    void MainEntryPoints::createSystems( GameState **outGraphicsGameState,
                                         GraphicsSystem **outGraphicsSystem,
                                         GameState **outLogicGameState, LogicSystem **outLogicSystem )
    {
        PointLightShadowGameState *gfxGameState = new PointLightShadowGameState(
            "This sample is almost exactly the same as ShadowMapDebugging.\n"
            "The main difference is that the shadow nodes are being generated programmatically\n"
            "via ShadowNodeHelper::createShadowNodeWithSettings instead of relying on\n"
            "Compositor scripts.\n"
            "This sample was added due to popular demand.\n\n"
            "Creating shadow nodes via code can be a complex and error prone task, thus\n"
            "ShadowNodeHelper greatly facilitates the job.\n"
            "If the code does not suit your particular needs, you can grab its internal code\n"
            "and analyze/understand how it works so you can adapt it to your particular needs.\n" );

        GraphicsSystem *graphicsSystem = new PointLightShadowGraphicsSystem( gfxGameState );

        gfxGameState->_notifyGraphicsSystem( graphicsSystem );

        *outGraphicsGameState = gfxGameState;
        *outGraphicsSystem = graphicsSystem;
    }

    void MainEntryPoints::destroySystems( GameState *graphicsGameState, GraphicsSystem *graphicsSystem,
                                          GameState *logicGameState, LogicSystem *logicSystem )
    {
        delete graphicsSystem;
        delete graphicsGameState;
    }

    const char *MainEntryPoints::getWindowTitle() { return "Shadow map from code"; }
}  // namespace Demo
