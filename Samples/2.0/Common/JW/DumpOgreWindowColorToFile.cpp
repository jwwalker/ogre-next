//  DumpOgreWindowColorToFile.cpp
//  V4 Ogre SBEngine
//
//  Created by James Walker on 6/27/22.
//  Copyright © 2022 Innoventive Software, LLC. All rights reserved.
//

#include "DumpOgreWindowColorToFile.hpp"

#include "OgreImage2.h"
#include "OgreTextureBox.h"
#include "OgreWindow.h"

/*!
	@function	DumpOgreColorTextureToFile
	
	@abstract	Download the color data from an Ogre texture and write it to a .ppm file.
	
	@param		inTexture		An Ogre texture. 
	@param		inName			Full path of the file to be saved.
*/
static void DumpOgreColorTextureToFile( Ogre::TextureGpu* _Nonnull inTexture,
								const char* _Nonnull inName )
{
	Ogre::Image2 img;
	img.convertFromTexture( inTexture, inTexture->getNumMipmaps()-1,
			inTexture->getNumMipmaps()-1 );
	Ogre::TextureBox box( img.getData( 0 ) );
	unsigned char* srcRawData = reinterpret_cast<unsigned char*>( box.data );
	std::FILE* theFile = std::fopen( inName, "w" );
	std::fprintf( theFile, "P3\n%u %u\n255\n",
		(unsigned int)box.width, (unsigned int)box.height );
	for (Ogre::uint32 rowIndex = 0; rowIndex < box.height; ++rowIndex)
	{
		unsigned char* rowStart = srcRawData + box.bytesPerRow * rowIndex;
		
		for (Ogre::uint32 colIndex = 0; colIndex < box.width; ++colIndex)
		{
			std::fprintf( theFile, "%4d%4d%4d  ", (int)rowStart[colIndex*4+2],
				(int)rowStart[colIndex*4+1], (int)rowStart[colIndex*4] );
			
			if ( (colIndex > 0) and ((colIndex % 4) == 0) )
			{
				std::fprintf( theFile, "\n" );
			}
		}
		std::fprintf( theFile, "\n" );
	}
	std::fprintf( theFile, "\n" );
	std::fclose( theFile );
}


/*!
	@function	DumpOgreWindowColorToFile
	
	@abstract	Download the color data from an Ogre Window and write it to a .ppm file.
	
	@param		inWindow		An Ogre Window.  At least in the Metal case, one should have
								already called setWantsToDownload and
								setManualSwapRelease.
	@param		inPath			Full path of the file to be saved.
*/
void DumpOgreWindowColorToFile( Ogre::Window* _Nonnull inWindow,
								const char* _Nonnull  inPath )
{
	if (inWindow->canDownloadData())
	{
		Ogre::TextureGpu* texture = inWindow->getTexture();
		
		DumpOgreColorTextureToFile( texture, inPath );
	}
}
