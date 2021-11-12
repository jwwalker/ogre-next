#include "GraphicsSystem.h"



namespace Demo
{

class SpotAngleGraphicsSystem : public GraphicsSystem
{
public:
		SpotAngleGraphicsSystem( GameState *gameState )
			 :  GraphicsSystem( gameState ) {}

	virtual void initialize( const Ogre::String &windowTitle );
	
protected:

	void createPcfShadowNode(void);
	
	virtual Ogre::CompositorWorkspace* setupCompositor();
};

}
