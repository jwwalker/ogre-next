//  DumpOgreWindowDepthToFile.cpp
//  Sample_PlanarReflections
//
//  Created by James Walker on 3/16/23.
//  
//

#include "DumpOgreWindowDepthToFile.hpp"


#include "OgreImage2.h"
#include "OgrePixelFormatGpuUtils.h"
#include "OgreTextureBox.h"
#include "OgreWindow.h"

#include <stdio.h>

/*!
	@function	CopyDepthToFloatBuffer
	@abstract	Copy depth data from an Ogre::Image2 holding depth data to a pure float buffer.
	@param		inImage		An Ogre image buffer holding depth data.
	@param		inBuffer	An array of floats.  Must have enough room for at least
							inWidth * inHeight floats.
	@param		inWidth		Width of image in pixels.
	@param		inHeight	Height of image in pixels.
*/
static void CopyDepthToFloatBuffer( Ogre::Image2& inImage, float *ogre_nonnull inBuffer,
							Ogre::uint32 inWidth, Ogre::uint32 inHeight )
{
	Ogre::TextureBox box( inImage.getData( 0 ) );
	if ( (box.width == inWidth) and (box.height == inHeight) )
	{
		unsigned char* srcRawData = reinterpret_cast<unsigned char*>( box.data );
		if ( (inImage.getPixelFormat() == Ogre::PixelFormatGpu::PFG_D32_FLOAT) or
			(inImage.getPixelFormat() == Ogre::PixelFormatGpu::PFG_D32_FLOAT_S8X24_UINT) )
		{
			if (box.bytesPerRow == box.width * sizeof(float)) // no padding
			{
				memcpy( inBuffer, srcRawData, box.bytesPerImage );
			}
			else
			{
				for (Ogre::uint32 row = 0; row < box.height; ++row)
				{
					const unsigned char* srcRow = srcRawData + box.bytesPerRow * row;
					float* dstRow = inBuffer + row * inWidth;
					
					memcpy( dstRow, srcRow, box.width * sizeof(float) );
				}
			}
		}
		else
		{
			Ogre::ColourValue workColor;
			for (Ogre::uint32 row = 0; row < box.height; ++row)
			{
				const unsigned char* srcRow = srcRawData + box.bytesPerRow * row;
				float* dstRow = inBuffer + row * inWidth;
				
				for (Ogre::uint32 col = 0; col < box.width; ++col)
				{
					const unsigned char* srcPixel = srcRow + box.bytesPerPixel * col;
					float* dstPixel = dstRow + col;
					Ogre::PixelFormatGpuUtils::unpackColour( &workColor,
						inImage.getPixelFormat(),
						srcPixel );
					*dstPixel = workColor.r;
				}
			}
		}
	}
}


/*!
	@function	DebugDumpFloatDepthBuffer
	
	@abstract	Write depth data (in the range [0, 1]) to a .pgm file in the folder chosen by
				MakePathToFileInDocumentsFolder, which isn't actually the Documents folder on Mac.
	
	@param		inName		A file full path, with extension pgm.
	@param		inDepths	A buffer of depth data.
	@param		inWidth		Width of depth map in pixels.
	@param		inHeight	Height of depth map in pixels.
*/
static void DumpFloatDepthBuffer( const char *ogre_nonnull inPath, const float *ogre_nonnull inDepths,
									Ogre::uint32 inWidth,
									Ogre::uint32 inHeight )
{
	FILE* theFile = fopen( inPath, "w" );
	if (theFile != nullptr)
	{
		// write file header
		fprintf( theFile, "P2\n%d %d\n65535\n", inWidth, inHeight );
		
		for (Ogre::uint32 row = 0; row < inHeight; ++row)
		{
			const float* rowStart = inDepths + row * inWidth;
			
			for (Ogre::uint32 col = 0; col < inWidth; ++col)
			{
				long val = lroundf( rowStart[col] * 65535.0f );
				fprintf( theFile, "%6d", (int)val );
			}
			fprintf( theFile, "\n" );
		}
		
		fclose( theFile );
	}
}


/*!
	@function	RescaleDepthsForVisibility
	@abstract	Rescale the values so that the depth image will be clearer to human eyes.
	@discussion	This assumes the usual Ogre practice of reversing depths, so that the far plane
				is at depth 0.  We reverse again so that the far plane will be 1 (white).
*/
static void RescaleDepthsForVisibility( std::vector<float>& ioDepths )
{
	// Find min and max
	float minValue = INFINITY;
	float maxValue = -INFINITY;
	for (float x : ioDepths)
	{
		if (x < minValue)
		{
			minValue = x;
		}
		if (x > maxValue)
		{
			maxValue = x;
		}
	}
	
	float scale = (minValue < maxValue)? 1.0f / (maxValue - minValue) : 1.0f;
	
	for (float& x : ioDepths)
	{
		x = (maxValue - x) * scale;
	}
}

/*!
	@function	DumpOgreWindowDepthToFile
	
	@abstract	Download the depth data from an Ogre Window and write it to a .ppg file.
	
	@param		inWindow		An Ogre Window.  At least in the Metal case, one should have
								already called setWantsToDownload and
								setManualSwapRelease.
	@param		inPath			Full path of the file to be saved.
*/
void DumpOgreWindowDepthToFile( Ogre::Window *ogre_nonnull inWindow, const char *ogre_nonnull inPath )
{
	Ogre::TextureGpu* depthTx = inWindow->getDepthBuffer();
	if (depthTx != nullptr)
	{
		Ogre::Image2 image;
		image.convertFromTexture( depthTx, depthTx->getNumMipmaps()-1,
			depthTx->getNumMipmaps()-1 );
		Ogre::uint32 width = depthTx->getWidth();
		Ogre::uint32 height = depthTx->getHeight();
		std::vector<float> depthBuf( width * height );
		CopyDepthToFloatBuffer( image, depthBuf.data(), width, height );
		RescaleDepthsForVisibility( depthBuf );
		DumpFloatDepthBuffer( inPath, depthBuf.data(), width, height );
	}
}
