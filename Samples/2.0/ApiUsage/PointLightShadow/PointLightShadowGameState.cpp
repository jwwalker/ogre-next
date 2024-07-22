
#include "PointLightShadowGameState.h"
#include "CameraController.h"
#include "GraphicsSystem.h"

#include "OgreItem.h"
#include "OgreSceneManager.h"

#include "OgreMesh2.h"
#include "OgreMeshManager.h"
#include "OgreMeshManager2.h"

#include "OgreCamera.h"

#include "OgreHlmsSamplerblock.h"
#include "OgreHlmsUnlitDatablock.h"

#include "Compositor/OgreCompositorShadowNode.h"
#include "Compositor/OgreCompositorWorkspace.h"
#include "OgreHlms.h"
#include "OgreHlmsManager.h"
#include "OgreHlmsPbs.h"
#include "OgreRoot.h"

#include "OgreOverlay.h"
#include "OgreOverlayContainer.h"
#include "OgreOverlayManager.h"

#include "Compositor/OgreCompositorManager2.h"
#include "Compositor/Pass/PassScene/OgreCompositorPassSceneDef.h"

#include "OgreHlmsCompute.h"
#include "OgreHlmsComputeJob.h"
#include "Utils/MiscUtils.h"

using namespace Demo;

static Ogre::SceneNode* MakeBall( float x, float y, float z,
									Ogre::SceneManager* sceneManager )
{
	Ogre::Item *item = sceneManager->createItem(
		"FFSphere.mesh", Ogre::ResourceGroupManager::AUTODETECT_RESOURCE_GROUP_NAME,
		Ogre::SCENE_DYNAMIC );
	
	Ogre::SceneNode* node = sceneManager->getRootSceneNode( Ogre::SCENE_DYNAMIC )
						  ->createChildSceneNode( Ogre::SCENE_DYNAMIC );

	Ogre::Vector3 desiredCenter( x, y, z );
	node->setPosition( desiredCenter );
	node->setScale( 1.0f, 1.0f, 1.0f );

	node->attachObject( item );
	
	Ogre::Aabb bounds( item->getWorldAabbUpdated() );
	Ogre::Vector3 currentCenter( bounds.mCenter );
	Ogre::Vector3 delta = desiredCenter - currentCenter;
	Ogre::Vector3 adjustedPosition = desiredCenter + delta;
	node->setPosition( adjustedPosition );
	
	// Check whether the center is now where we want
	bounds = item->getWorldAabbUpdated();
	float rad = bounds.getRadius();
	
	//Ogre::HlmsDatablock* block = item->getSubItem(0)->getDatablock();
	
	return node;
}

namespace Demo
{
    const Ogre::String c_shadowMapFilters[Ogre::HlmsPbs::NumShadowFilter] = {  //
        "PCF 2x2",                                                             //
        "PCF 3x3",                                                             //
        "PCF 4x4",                                                             //
        "PCF 5x5",                                                             //
        "PCF 6x6",                                                             //
        "ESM"
    };

    PointLightShadowGameState::PointLightShadowGameState( const Ogre::String &helpDescription ) :
        TutorialGameState( helpDescription ),
        mAnimateObjects( true ),
        mDebugOverlayPSSM( 0 ),
        mDebugOverlaySpotlights( 0 )
    {
        memset( mSceneNode, 0, sizeof( mSceneNode ) );
    }
    //-----------------------------------------------------------------------------------
    void PointLightShadowGameState::createScene01()
    {
        Ogre::SceneManager *sceneManager = mGraphicsSystem->getSceneManager();
        
        Ogre::Camera* camera = mGraphicsSystem->getCamera();
        camera->setPosition( 0.0f, 0.5f, 0.0f );
        camera->lookAt( 0.0f, 0.0f, -10.0f );

        Ogre::v1::MeshPtr planeMeshV1 = Ogre::v1::MeshManager::getSingleton().createPlane(
            "Plane v1", Ogre::ResourceGroupManager::DEFAULT_RESOURCE_GROUP_NAME,
            Ogre::Plane( Ogre::Vector3::UNIT_Y, 1.0f ), 50.0f, 50.0f, 1, 1, true, 1, 4.0f, 4.0f,
            Ogre::Vector3::UNIT_Z, Ogre::v1::HardwareBuffer::HBU_STATIC,
            Ogre::v1::HardwareBuffer::HBU_STATIC );

        Ogre::MeshPtr planeMesh = Ogre::MeshManager::getSingleton().createByImportingV1(
            "Plane", Ogre::ResourceGroupManager::DEFAULT_RESOURCE_GROUP_NAME, planeMeshV1.get(), true,
            true, true );

#if 1
        {
            Ogre::Item *item = sceneManager->createItem( planeMesh, Ogre::SCENE_DYNAMIC );
            Ogre::SceneNode *sceneNode = sceneManager->getRootSceneNode( Ogre::SCENE_DYNAMIC )
                                             ->createChildSceneNode( Ogre::SCENE_DYNAMIC );
            sceneNode->setPosition( 0, -2, 0 );
            sceneNode->attachObject( item );
        }
#endif

		size_t idx = 0;
		mSceneNode[idx] = MakeBall( 0.369f, 0.195f, -3.423f, sceneManager );
		++idx;

		mSceneNode[idx] = MakeBall( 1.052f, 0.337f, -3.940f, sceneManager );
		++idx;

        mNodeCount = idx;

        Ogre::SceneNode *rootNode = sceneManager->getRootSceneNode();
        Ogre::Light *light;
        Ogre::SceneNode *lightNode;

        light = sceneManager->createLight();
        lightNode = rootNode->createChildSceneNode();
        lightNode->attachObject( light );
        light->setPowerScale( 1.0f );
        light->setType( Ogre::Light::LT_DIRECTIONAL );
        light->setDirection( Ogre::Vector3( -1, -1, -1 ).normalisedCopy() );
        light->setCastShadows( false );

        mLightNodes[0] = lightNode;

        light = sceneManager->createLight();
        lightNode = rootNode->createChildSceneNode();
        lightNode->attachObject( light );
        light->setDiffuseColour( 0.6f, 0.6f, 0.6f );
        light->setSpecularColour( 0.0f, 0.0f, 0.0f );
        light->setPowerScale( 10.0f );
        light->setType( Ogre::Light::LT_POINT );
        lightNode->setPosition( -0.24f, 0.12f, -2.88f );
        light->setAttenuation( 1000.0f, 0.0f, 0.0f, 1.0f );
        light->setShadowNearClipDistance( 0.1f );
        light->setShadowFarClipDistance( 1000.0f );

        mLightNodes[1] = lightNode;

        mCameraController = new CameraController( mGraphicsSystem, false );

        createShadowMapDebugOverlays();


        TutorialGameState::createScene01();
    }
    //-----------------------------------------------------------------------------------
    void PointLightShadowGameState::createShadowMapDebugOverlays()
    {
        destroyShadowMapDebugOverlays();

        Ogre::Root *root = mGraphicsSystem->getRoot();
        Ogre::CompositorWorkspace *workspace = mGraphicsSystem->getCompositorWorkspace();
        Ogre::Hlms *hlmsUnlit = root->getHlmsManager()->getHlms( Ogre::HLMS_UNLIT );

        Ogre::HlmsMacroblock macroblock;
        macroblock.mDepthCheck = false;
        Ogre::HlmsBlendblock blendblock;

        const Ogre::String shadowNodeName = "PointLightShadowShadowNode";

        Ogre::CompositorShadowNode *shadowNode = workspace->findShadowNode( shadowNodeName );
        const Ogre::CompositorShadowNodeDef *shadowNodeDef = shadowNode->getDefinition();

        for( size_t i = 0u; i < 4u; ++i )
        {
            const Ogre::String datablockName( "depthShadow" + Ogre::StringConverter::toString( i ) );
            Ogre::HlmsUnlitDatablock *depthShadow =
                (Ogre::HlmsUnlitDatablock *)hlmsUnlit->getDatablock( datablockName );

            if( !depthShadow )
            {
                depthShadow = (Ogre::HlmsUnlitDatablock *)hlmsUnlit->createDatablock(
                    datablockName, datablockName, macroblock, blendblock, Ogre::HlmsParamVec() );
            }

            const Ogre::ShadowTextureDefinition *shadowTexDef =
                shadowNodeDef->getShadowTextureDefinition( i );

            Ogre::TextureGpu *tex = shadowNode->getDefinedTexture( shadowTexDef->getTextureNameStr() );
            depthShadow->setTexture( 0, tex );

            // If it's an UV atlas, then only display the relevant section.
            Ogre::Matrix4 uvOffsetScale;
            uvOffsetScale.makeTransform(
                Ogre::Vector3( shadowTexDef->uvOffset.x, shadowTexDef->uvOffset.y, 0.0f ),
                Ogre::Vector3( shadowTexDef->uvLength.x, shadowTexDef->uvLength.y, 1.0f ),
                Ogre::Quaternion::IDENTITY );
            depthShadow->setEnableAnimationMatrix( 0, true );
            depthShadow->setAnimationMatrix( 0, uvOffsetScale );
        }

        Ogre::v1::OverlayManager &overlayManager = Ogre::v1::OverlayManager::getSingleton();
        // Create an overlay
        mDebugOverlayPSSM = overlayManager.create( "PSSM Overlays" );
        mDebugOverlaySpotlights = overlayManager.create( "Spotlight overlays" );

        for( int i = 0; i < 3; ++i )
        {
            // Create a panel
            Ogre::v1::OverlayContainer *panel =
                static_cast<Ogre::v1::OverlayContainer *>( overlayManager.createOverlayElement(
                    "Panel", "PanelName" + Ogre::StringConverter::toString( i ) ) );
            panel->setMetricsMode( Ogre::v1::GMM_RELATIVE_ASPECT_ADJUSTED );
            panel->setPosition( 100 + Ogre::Real( i ) * 1600, 10000 - 1600 );
            panel->setDimensions( 1500, 1500 );
            panel->setMaterialName( "depthShadow" + Ogre::StringConverter::toString( i ) );
            mDebugOverlayPSSM->add2D( panel );
        }

        for( int i = 3; i < 4; ++i )
        {
            // Create a panel
            Ogre::v1::OverlayContainer *panel =
                static_cast<Ogre::v1::OverlayContainer *>( overlayManager.createOverlayElement(
                    "Panel", "PanelName" + Ogre::StringConverter::toString( i ) ) );
            panel->setMetricsMode( Ogre::v1::GMM_RELATIVE_ASPECT_ADJUSTED );
            panel->setPosition( 100 + Ogre::Real( i ) * 1600, 10000 - 1600 );
            panel->setDimensions( 1500, 1500 );
            panel->setMaterialName( "depthShadow" + Ogre::StringConverter::toString( i ) );
            mDebugOverlaySpotlights->add2D( panel );
        }

        mDebugOverlayPSSM->show();
        mDebugOverlaySpotlights->show();
    }
    //-----------------------------------------------------------------------------------
    void PointLightShadowGameState::destroyShadowMapDebugOverlays()
    {
        Ogre::v1::OverlayManager &overlayManager = Ogre::v1::OverlayManager::getSingleton();

        if( mDebugOverlayPSSM )
        {
            Ogre::v1::Overlay::Overlay2DElementsIterator itor =
                mDebugOverlayPSSM->get2DElementsIterator();
            while( itor.hasMoreElements() )
            {
                Ogre::v1::OverlayContainer *panel = itor.getNext();
                overlayManager.destroyOverlayElement( panel );
            }
            overlayManager.destroy( mDebugOverlayPSSM );
            mDebugOverlayPSSM = 0;
        }

        if( mDebugOverlaySpotlights )
        {
            Ogre::v1::Overlay::Overlay2DElementsIterator itor =
                mDebugOverlaySpotlights->get2DElementsIterator();
            while( itor.hasMoreElements() )
            {
                Ogre::v1::OverlayContainer *panel = itor.getNext();
                overlayManager.destroyOverlayElement( panel );
            }
            overlayManager.destroy( mDebugOverlaySpotlights );
            mDebugOverlaySpotlights = 0;
        }
    }
    //-----------------------------------------------------------------------------------
    void PointLightShadowGameState::update( float timeSinceLast )
    {
        TutorialGameState::update( timeSinceLast );
    }
    //-----------------------------------------------------------------------------------
    void PointLightShadowGameState::generateDebugText( float timeSinceLast, Ogre::String &outText )
    {
        Ogre::Hlms *hlms = mGraphicsSystem->getRoot()->getHlmsManager()->getHlms( Ogre::HLMS_PBS );

        assert( dynamic_cast<Ogre::HlmsPbs *>( hlms ) );
        Ogre::HlmsPbs *pbs = static_cast<Ogre::HlmsPbs *>( hlms );

        TutorialGameState::generateDebugText( timeSinceLast, outText );
        outText += "\nPress F2 to toggle animation. ";
        outText += mAnimateObjects ? "[On]" : "[Off]";
        outText += "\nPress F3 to show/hide PSSM splits. ";
        outText += mDebugOverlayPSSM->getVisible() ? "[On]" : "[Off]";
        outText += "\nPress F4 to show/hide spotlight maps. ";
        outText += mDebugOverlaySpotlights->getVisible() ? "[On]" : "[Off]";
        outText += "\nPress F5 to switch filter. [" + c_shadowMapFilters[pbs->getShadowFilter()] + "]";
    }
    
    void PointLightShadowGameState::moveNode( Ogre::Real x, Ogre::Real y, Ogre::Real z )
    {
		Ogre::Vector3 position( mSceneNode[0]->getPosition() );
		position.x += x;
		position.y += y;
		position.z += z;
		mSceneNode[0]->setPosition( position );
    }
    
    //-----------------------------------------------------------------------------------
    void PointLightShadowGameState::keyReleased( const SDL_KeyboardEvent &arg )
    {
		if( ( arg.keysym.mod & ~( KMOD_NUM | KMOD_CAPS ) ) != 0 )
		{
			TutorialGameState::keyReleased( arg );
			return;
		}

		if( arg.keysym.sym == SDLK_F2 )
		{
			mAnimateObjects = !mAnimateObjects;
		}
		else if( arg.keysym.sym == SDLK_F3 )
		{
			if( mDebugOverlayPSSM->getVisible() )
				mDebugOverlayPSSM->hide();
			else
				mDebugOverlayPSSM->show();
		}
		else if( arg.keysym.sym == SDLK_F4 )
		{
			if( mDebugOverlaySpotlights->getVisible() )
				mDebugOverlaySpotlights->hide();
			else
				mDebugOverlaySpotlights->show();
		}
		else if( arg.keysym.sym == SDLK_F5 )
		{
			Ogre::Hlms *hlms = mGraphicsSystem->getRoot()->getHlmsManager()->getHlms( Ogre::HLMS_PBS );

			assert( dynamic_cast<Ogre::HlmsPbs *>( hlms ) );
			Ogre::HlmsPbs *pbs = static_cast<Ogre::HlmsPbs *>( hlms );

			Ogre::HlmsPbs::ShadowFilter nextFilter = static_cast<Ogre::HlmsPbs::ShadowFilter>(
				( pbs->getShadowFilter() + 1u ) % Ogre::HlmsPbs::ExponentialShadowMaps );

			pbs->setShadowSettings( nextFilter );
		}
		else
		{
			bool handled = true;
			const Ogre::Real delta = 0.03f;
			
			switch (arg.keysym.sym)
			{
				case SDLK_x:
					moveNode( delta, 0.0f, 0.0f );
					break;
				
				case SDLK_c:
					moveNode( -delta, 0.0f, 0.0f );
					break;
					
				case SDLK_y:
					moveNode( 0.0f, delta, 0.0f );
					break;
				
				case SDLK_u:
					moveNode( 0.0f, -delta, 0.0f );
					break;
				
				case SDLK_n:
					moveNode( 0.0f, 0.0f, delta );
					break;
				
				case SDLK_m:
					moveNode( 0.0f, 0.0f, -delta );
					break;
				
				default:
					handled = false;
					break;
			}
		
			if (!handled)
				TutorialGameState::keyReleased( arg );
		}
    }
}  // namespace Demo
