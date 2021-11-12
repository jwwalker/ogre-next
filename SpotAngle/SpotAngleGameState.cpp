
#include "SpotAngleGameState.h"
#include "CameraController.h"
#include "GraphicsSystem.h"

#include "OgreSceneManager.h"
#include "OgreItem.h"

#include "OgreMeshManager.h"
#include "OgreMeshManager2.h"
#include "OgreMesh2.h"

#include "OgreCamera.h"

#include "OgreHlmsUnlitDatablock.h"
#include "OgreHlmsSamplerblock.h"

#include "OgreRoot.h"
#include "OgreHlmsManager.h"
#include "OgreHlms.h"
#include "OgreHlmsPbs.h"
#include "Compositor/OgreCompositorWorkspace.h"
#include "Compositor/OgreCompositorShadowNode.h"

#include "Compositor/OgreCompositorManager2.h"
#include "Compositor/Pass/PassScene/OgreCompositorPassSceneDef.h"

#include "Utils/MiscUtils.h"

using namespace Demo;

namespace Demo
{
    ShadowMapFromCodeGameState::ShadowMapFromCodeGameState( const Ogre::String &helpDescription ) :
        TutorialGameState( helpDescription )
    {
    }
    //-----------------------------------------------------------------------------------
    void ShadowMapFromCodeGameState::createScene01(void)
    {
        Ogre::SceneManager *sceneManager = mGraphicsSystem->getSceneManager();

		Ogre::v1::MeshPtr planeMeshV1 = Ogre::v1::MeshManager::getSingleton().createPlane(
			"Plane v1", Ogre::ResourceGroupManager::DEFAULT_RESOURCE_GROUP_NAME,
			Ogre::Plane( Ogre::Vector3::UNIT_Y, 0.0f ), 50.0f, 50.0f ,
			1, 1, true, 1, 4.0f, 4.0f, Ogre::Vector3::UNIT_Z );
		Ogre::MeshPtr planeMesh = Ogre::MeshManager::getSingleton().createByImportingV1(
			"Plane", Ogre::ResourceGroupManager::DEFAULT_RESOURCE_GROUP_NAME,
			planeMeshV1.get(), true, true, true );
		Ogre::Item* planeItem = sceneManager->createItem( planeMesh, Ogre::SCENE_DYNAMIC );
		Ogre::SceneNode* planeNode = sceneManager->getRootSceneNode()->createChildSceneNode();
		planeNode->attachObject( planeItem );

        Ogre::SceneNode *rootNode = sceneManager->getRootSceneNode();

		Ogre::Light* light = sceneManager->createLight();
		Ogre::SceneNode* lightNode = rootNode->createChildSceneNode();
		lightNode->attachObject( light );
		light->setDiffuseColour( 1.0f, 1.0f, 1.0f );
		light->setSpecularColour( 1.0f, 1.0f, 1.0f );
		light->setPowerScale( Ogre::Math::PI );
		light->setType( Ogre::Light::LT_SPOTLIGHT );
		lightNode->setPosition( 0.0f, 4.0f, 0.0f );
		light->setDirection( Ogre::Vector3( 0, -1, 0 ) );
		light->setAttenuation( 100.0f, 1.0f, 0.0f, 0.0f );
		light->setSpotlightInnerAngle( Ogre::Degree( 5.0f ) );
		light->setSpotlightOuterAngle( Ogre::Degree( 7.0f ) );
       // light->setCastShadows( false );

        TutorialGameState::createScene01();
        
        Ogre::Camera* camera = mGraphicsSystem->getCamera();
		camera->setPosition( Ogre::Vector3( 0, 1, 3 ) );
		// Look back along -Z
		camera->lookAt( Ogre::Vector3( 0, 0, 0 ) );
		camera->setNearClipDistance( 0.2f );
		camera->setFarClipDistance( 1000.0f );
		camera->setAutoAspectRatio( true );
		camera->setFOVy( Ogre::Degree( 30.0 ) );
        
		sceneManager->setAmbientLight( Ogre::ColourValue(),
			Ogre::ColourValue(), Ogre::Vector3::UNIT_Y );
    }
}
