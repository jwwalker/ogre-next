//  DumpOgreWindowColorToFile.hpp
//  V4 Ogre SBEngine
//
//  Created by James Walker on 6/27/22.
//  Copyright © 2022 Innoventive Software, LLC. All rights reserved.
//

#ifndef DumpOgreWindowColorToFile_hpp
#define DumpOgreWindowColorToFile_hpp

namespace Ogre
{
	class Window;
}


/*!
	@function	DumpOgreWindowColorToFile
	
	@abstract	Download the color data from an Ogre Window and write it to a .ppm file.
	
	@param		inWindow		An Ogre Window.  At least in the Metal case, one should have
								already called setWantsToDownload and
								setManualSwapRelease.
	@param		inPath			Full path of the file to be saved.
*/
void DumpOgreWindowColorToFile( Ogre::Window *ogre_nonnull inWindow, const char *ogre_nonnull inPath );

#endif /* DumpOgreWindowColorToFile_hpp */
