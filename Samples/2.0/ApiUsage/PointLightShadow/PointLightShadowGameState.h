
#ifndef _Demo_PointLightShadowGameState_H_
#define _Demo_PointLightShadowGameState_H_

#include "OgreOverlay.h"
#include "OgreOverlayPrerequisites.h"
#include "OgrePrerequisites.h"

#include "TutorialGameState.h"

#undef USE_STATIC_BRANCHING_FOR_SHADOWMAP_LIGHTS

namespace Demo
{
    class PointLightShadowGameState : public TutorialGameState
    {
		size_t			mNodeCount;
        Ogre::SceneNode *mSceneNode[16];

#ifdef USE_STATIC_BRANCHING_FOR_SHADOWMAP_LIGHTS
        Ogre::SceneNode *mLightNodes[5];
#else
        Ogre::SceneNode *mLightNodes[3];
#endif

        bool mAnimateObjects;

        Ogre::v1::Overlay *mDebugOverlayPSSM;
        Ogre::v1::Overlay *mDebugOverlaySpotlights;

 
        void generateDebugText( float timeSinceLast, Ogre::String &outText ) override;

        void createShadowMapDebugOverlays();
        void destroyShadowMapDebugOverlays();

    public:
        PointLightShadowGameState( const Ogre::String &helpDescription );

        void createScene01() override;

        void update( float timeSinceLast ) override;

        void keyReleased( const SDL_KeyboardEvent &arg ) override;
    };
}  // namespace Demo

#endif
