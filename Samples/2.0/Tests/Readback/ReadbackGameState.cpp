
#include "ReadbackGameState.h"

#include "GraphicsSystem.h"

#include "OgreHlmsUnlitDatablock.h"

#include "Compositor/OgreCompositorManager2.h"
#include "Compositor/OgreCompositorNodeDef.h"
#include "Compositor/OgreCompositorWorkspace.h"
#include "Compositor/OgreCompositorWorkspaceDef.h"
#include "Compositor/Pass/PassScene/OgreCompositorPassSceneDef.h"
#include "OgreCamera.h"
#include "OgreHlms.h"
#include "OgreItem.h"
#include "OgreLogManager.h"
#include "OgreLwString.h"
#include "OgreMesh.h"
#include "OgreMesh2.h"
#include "OgreMeshManager.h"
#include "OgreMeshManager2.h"
#include "OgreRoot.h"
#include "OgreSceneManager.h"
#include "OgreTextureBox.h"
#include "OgreTextureGpu.h"
#include "OgreTextureGpuManager.h"

#include <sstream>

using namespace Demo;

namespace Demo
{
    ReadbackGameState::ReadbackGameState( const Ogre::String &helpDescription ) :
        TutorialGameState( helpDescription ),
        mUnlitDatablock( 0 ),
        mRgbaReference( 0 ),
        mTextureBox( 0 ),
        mRaceConditionDetected( false )
    {
    }
    //-----------------------------------------------------------------------------------
    void ReadbackGameState::createScene01()
    {
        Ogre::SceneManager *sceneManager = mGraphicsSystem->getSceneManager();

        Ogre::v1::MeshPtr planeMeshV1 = Ogre::v1::MeshManager::getSingleton().createPlane(
            "Plane v1", Ogre::ResourceGroupManager::DEFAULT_RESOURCE_GROUP_NAME,
            Ogre::Plane( Ogre::Vector3::UNIT_Z, 0.0f ), 50.0f, 50.0f, 1, 1, true, 1, 4.0f, 4.0f,
            Ogre::Vector3::UNIT_Y, Ogre::v1::HardwareBuffer::HBU_STATIC,
            Ogre::v1::HardwareBuffer::HBU_STATIC );

        Ogre::MeshPtr planeMesh = Ogre::MeshManager::getSingleton().createByImportingV1(
            "Plane", Ogre::ResourceGroupManager::DEFAULT_RESOURCE_GROUP_NAME, planeMeshV1.get(), true,
            true, true );

        {
            Ogre::Hlms *hlmsUnlit =
                mGraphicsSystem->getRoot()->getHlmsManager()->getHlms( Ogre::HLMS_UNLIT );

            mUnlitDatablock = static_cast<Ogre::HlmsUnlitDatablock *>( hlmsUnlit->createDatablock(
                "Readback Test Material", "Readback Test Material", Ogre::HlmsMacroblock(),
                Ogre::HlmsBlendblock(), Ogre::HlmsParamVec() ) );
            mUnlitDatablock->setUseColour( true );
        }

        {
            // We must alter the AABB because we want to always pass frustum culling
            // Otherwise frustum culling may hide bugs in the projection matrix math
            planeMesh->load();
            Ogre::Aabb aabb = planeMesh->getAabb();
            aabb.mHalfSize.z = aabb.mHalfSize.x;
            planeMesh->_setBounds( aabb );
        }

        Ogre::Item *item = sceneManager->createItem( planeMesh, Ogre::SCENE_DYNAMIC );
        item->setDatablock( mUnlitDatablock );
        Ogre::SceneNode *sceneNode = sceneManager->getRootSceneNode( Ogre::SCENE_DYNAMIC )
                                         ->createChildSceneNode( Ogre::SCENE_DYNAMIC );
        sceneNode->setScale( Ogre::Vector3( 1000.0f ) );
        sceneNode->attachObject( item );

        Ogre::Light *light = sceneManager->createLight();
        Ogre::SceneNode *lightNode = sceneManager->getRootSceneNode()->createChildSceneNode();
        lightNode->attachObject( light );
        light->setPowerScale( Ogre::Math::PI );  // Since we don't do HDR, counter the PBS' division by
                                                 // PI
        light->setType( Ogre::Light::LT_DIRECTIONAL );
        light->setDirection( Ogre::Vector3( -1, -1, -1 ).normalisedCopy() );

        Ogre::Camera *camera = mGraphicsSystem->getCamera();
        camera->setPosition( 0, 0, 0 );
        camera->setOrientation( Ogre::Quaternion::IDENTITY );

        camera->setNearClipDistance( 0.5f );
        sceneNode->setPosition( 0, 0, -camera->getNearClipDistance() - 50.0f );

        {
            using namespace Ogre;
            CompositorManager2 *compositorManager = mGraphicsSystem->getRoot()->getCompositorManager2();
            CompositorNodeDef *nodeDef = compositorManager->addNodeDefinition( "Readback Node" );

            // Input texture
            nodeDef->addTextureSourceName( "WindowRT", 0, TextureDefinitionBase::TEXTURE_INPUT );

            nodeDef->setNumTargetPass( 1 );
            {
                CompositorTargetDef *targetDef = nodeDef->addTargetPass( "WindowRT" );
                targetDef->setNumPasses( 1 );
                {
                    {
                        CompositorPassSceneDef *passScene =
                            static_cast<CompositorPassSceneDef *>( targetDef->addPass( PASS_SCENE ) );
                        passScene->setAllClearColours( Ogre::ColourValue( 1.0f, 0.5f, 0.0f, 1.0f ) );
                        passScene->setAllLoadActions( LoadAction::Clear );
                        passScene->mIncludeOverlays = false;
                    }
                }
            }

            CompositorWorkspaceDef *workDef =
                compositorManager->addWorkspaceDefinition( "Readback Workspace" );
            workDef->connectExternal( 0, nodeDef->getName(), 0 );
        }

        TutorialGameState::createScene01();
    }
    //-----------------------------------------------------------------------------------
    void ReadbackGameState::update( float timeSinceLast )
    {
        Ogre::TextureGpuManager *textureManager =
            mGraphicsSystem->getRoot()->getRenderSystem()->getTextureGpuManager();

        Ogre::TextureGpu *readbackTex = textureManager->createTexture(
            "Readback Tex", Ogre::GpuPageOutStrategy::Discard, Ogre::TextureFlags::RenderToTexture,
            Ogre::TextureTypes::Type2D );
        const Ogre::uint32 resolution = 96u;
        readbackTex->setResolution( resolution, resolution );
        readbackTex->setPixelFormat( Ogre::PFG_D32_FLOAT );
        readbackTex->scheduleTransitionTo( Ogre::GpuResidency::Resident );

        mGraphicsSystem->getSceneManager()->updateSceneGraph();

        Ogre::CompositorManager2 *compositorManager =
            mGraphicsSystem->getRoot()->getCompositorManager2();
        Ogre::CompositorWorkspace *workspace =
            compositorManager->addWorkspace( mGraphicsSystem->getSceneManager(), readbackTex,
                                             mGraphicsSystem->getCamera(), "Readback Workspace", false );

        workspace->_validateFinalTarget();
        workspace->_beginUpdate( false );
        workspace->_update();
        workspace->_endUpdate( false );

        Ogre::Image2 image;
        image.convertFromTexture( readbackTex, 0u, 0u );
        Ogre::TextureBox box = image.getData( 0u );

        float minVal = INFINITY;
        float maxVal = -INFINITY;
        const float *depths = static_cast<const float *>( box.data );
        for( Ogre::uint32 i = 0; i < resolution * resolution ; ++i)
        {
            float x = depths[i];
            if( x < minVal )
            {
                minVal = x;
            }
            if(x > maxVal)
            {
                maxVal = x;
            }
        }
        if(minVal < maxVal)
        {
            Ogre::LogManager::getSingleton().stream()
                << "Depth values range from " << minVal << " to " << maxVal;
        }
        else
        {
            Ogre::LogManager::getSingleton().stream() << "Depth values are all == " << minVal;
        }

        compositorManager->removeWorkspace( workspace );
        textureManager->destroyTexture( readbackTex );

        TutorialGameState::update( timeSinceLast );
    }
    //-----------------------------------------------------------------------------------
    void ReadbackGameState::execute( size_t threadId, size_t numThreads )
    {
    }
    //-----------------------------------------------------------------------------------
    void ReadbackGameState::generateDebugText( float timeSinceLast, Ogre::String &outText )
    {
        TutorialGameState::generateDebugText( timeSinceLast, outText );
        outText +=
            "\nThis test draws a random colour to an offscreen RTT and downloads\n"
            "its contents. If the colour doesn't match we throw an error.";
    }
}  // namespace Demo
