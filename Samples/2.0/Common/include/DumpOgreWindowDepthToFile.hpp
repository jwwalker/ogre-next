//  DumpOgreWindowDepthToFile.hpp
//  Sample_PlanarReflections
//
//  Created by James Walker on 3/16/23.
//  
//

#ifndef DumpOgreWindowDepthToFile_hpp
#define DumpOgreWindowDepthToFile_hpp

namespace Ogre
{
	class Window;
}


/*!
	@function	DumpOgreWindowDepthToFile
	
	@abstract	Download the depth data from an Ogre Window and write it to a .ppg file.
	
	@param		inWindow		An Ogre Window.  At least in the Metal case, one should have
								already called setWantsToDownload and
								setManualSwapRelease.
	@param		inPath			Full path of the file to be saved.
*/
void DumpOgreWindowDepthToFile( Ogre::Window* ogre_nonnull inWindow, const char *ogre_nonnull inPath );


#endif /* DumpOgreWindowDepthToFile_hpp */
