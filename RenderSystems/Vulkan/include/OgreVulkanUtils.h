/*
-----------------------------------------------------------------------------
This source file is part of OGRE-Next
    (Object-oriented Graphics Rendering Engine)
For the latest info, see http://www.ogre3d.org/

Copyright (c) 2000-present Torus Knot Software Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/
#ifndef _OgreVulkanUtils_H_
#define _OgreVulkanUtils_H_

#include "OgreVulkanPrerequisites.h"

#include "OgrePixelFormatGpu.h"
#include "OgreString.h"

#include "SPIRV-Reflect/spirv_reflect.h"

#include "vulkan/vulkan_core.h"

namespace Ogre
{
    struct VulkanDevice;
    void initUtils( VkDevice device );

    template <typename T>
    void makeVkStruct( T &inOutStruct, VkStructureType structType )
    {
        memset( &inOutStruct, 0, sizeof( inOutStruct ) );
        inOutStruct.sType = structType;
    }

    String vkResultToString( VkResult result );

    void setObjectName( VkDevice device, uint64_t object, VkDebugReportObjectTypeEXT objectType,
                        const char *name );

    PixelFormatGpu findSupportedFormat( VkPhysicalDevice physicalDevice,
                                        const FastArray<PixelFormatGpu> &candidates,
                                        VkImageTiling tiling, VkFormatFeatureFlags features );

    uint32_t findMemoryType( VkPhysicalDeviceMemoryProperties &memProperties, uint32_t typeFilter,
                             VkMemoryPropertyFlags properties );

    inline VkDeviceSize alignMemory( size_t offset, const VkDeviceSize alignment )
    {
        return ( ( offset + alignment - 1 ) / alignment ) * alignment;
    }

    inline void setAlignMemoryCoherentAtom( VkMappedMemoryRange &outMemRange, const size_t offset,
                                            const size_t sizeBytes, const VkDeviceSize alignment,
                                            const size_t vboSize )
    {
        const VkDeviceSize endOffset = std::min( alignMemory( offset + sizeBytes, alignment ), vboSize );
        outMemRange.offset = ( offset / alignment ) * alignment;
        outMemRange.size = endOffset - outMemRange.offset;
    }

    String getSpirvReflectError( SpvReflectResult spirvReflectResult );
}  // namespace Ogre

#endif  //#ifndef _OgreVulkanPrerequisites_H_
