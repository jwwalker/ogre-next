
#ifndef _Demo_ShadowMapFromCodeGameState_H_
#define _Demo_ShadowMapFromCodeGameState_H_

#include "OgrePrerequisites.h"
#include "OgreOverlayPrerequisites.h"
#include "OgreOverlay.h"
#include "TutorialGameState.h"


namespace Demo
{
    class ShadowMapFromCodeGameState : public TutorialGameState
    {
    public:
        ShadowMapFromCodeGameState( const Ogre::String &helpDescription );

        virtual void createScene01(void);

        virtual void keyReleased( const SDL_KeyboardEvent &arg ) {}
        virtual void keyPressed( const SDL_KeyboardEvent &arg ) {}
        virtual void mouseMoved( const SDL_Event &arg ) {}
    };
}

#endif
