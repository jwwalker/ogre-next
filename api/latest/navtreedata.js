/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "OGRE-Next", "index.html", [
    [ "API Reference Start Page", "index.html", "index" ],
    [ "Setting Up Ogre", "_setting_up_ogre.html", [
      [ "Windows", "_setting_up_ogre_windows.html", [
        [ "Requirements", "_setting_up_ogre_windows.html#RequirementsWindows", null ],
        [ "Downloading Ogre", "_setting_up_ogre_windows.html#DownloadingOgreWindows", null ],
        [ "Building Dependencies", "_setting_up_ogre_windows.html#BuildingDependenciesWindows", null ],
        [ "Building Ogre", "_setting_up_ogre_windows.html#BuildingOgreWindows", null ]
      ] ],
      [ "Linux", "_setting_up_ogre_linux.html", [
        [ "Requirements", "_setting_up_ogre_linux.html#RequirementsLinux", null ],
        [ "Downloading Ogre", "_setting_up_ogre_linux.html#DownloadingOgreLinux", null ],
        [ "Building Dependencies", "_setting_up_ogre_linux.html#BuildingDependenciesLinux", null ],
        [ "Building Ogre", "_setting_up_ogre_linux.html#BuildingOgreLinux", null ],
        [ "Setting Up Ogre with QtCreator", "_setting_up_ogre_linux.html#SettingUpOgreWithQtCreatorLinux", null ]
      ] ],
      [ "iOS", "_setting_up_ogre_i_o_s.html", [
        [ "Requirements", "_setting_up_ogre_i_o_s.html#Requirements_iOS", null ],
        [ "Downloading Ogre", "_setting_up_ogre_i_o_s.html#DownloadingOgre_iOS", null ],
        [ "Building Ogre", "_setting_up_ogre_i_o_s.html#BuildingOgre_iOS", null ]
      ] ],
      [ "macOS", "_setting_up_ogre_mac_o_s.html", [
        [ "Install cmake", "_setting_up_ogre_mac_o_s.html#autotoc_md12", null ],
        [ "Install dependencies", "_setting_up_ogre_mac_o_s.html#autotoc_md13", [
          [ "Install SDL2 using brew", "_setting_up_ogre_mac_o_s.html#autotoc_md14", null ]
        ] ],
        [ "Build Ogre", "_setting_up_ogre_mac_o_s.html#autotoc_md15", null ],
        [ "Build offline version of the docs", "_setting_up_ogre_mac_o_s.html#autotoc_md16", null ]
      ] ],
      [ "Android", "_setting_up_ogre_android.html", [
        [ "Requirements", "_setting_up_ogre_android.html#RequirementsAndroid", null ],
        [ "Downloading and building Ogre", "_setting_up_ogre_android.html#DownloadingOgreAndroid", null ],
        [ "Building Samples", "_setting_up_ogre_android.html#BuildingSamplesAndroid", null ]
      ] ]
    ] ],
    [ "Using Ogre in your App", "_using_ogre_in_your_app.html", [
      [ "Overview", "_using_ogre_in_your_app.html#UsingOgreInYourAppOverview", null ],
      [ "Speeding things up", "_using_ogre_in_your_app.html#SpeedingThingsUp", [
        [ "Small note about iOS", "_using_ogre_in_your_app.html#SmallNoteAbout_iOS", null ],
        [ "Apple specific", "_using_ogre_in_your_app.html#autotoc_md17", null ],
        [ "Creating your application with 'EmptyProject' script", "_using_ogre_in_your_app.html#CreatingYourApplication", [
          [ "A note about copied files from Samples/2.0/Common", "_using_ogre_in_your_app.html#AnoteaboutcopiedfilesfromSamples_20_Common", null ]
        ] ],
        [ "Supporting Multithreading loops from the get go", "_using_ogre_in_your_app.html#SupportingMultithreadingLoopsFromTheGetGo", null ]
      ] ]
    ] ],
    [ "Behavior of StagingTexture in D3D11", "_behavior_staging_texture_d3_d11.html", [
      [ "Attempting to be contiguous", "_behavior_staging_texture_d3_d11.html#autotoc_md18", null ],
      [ "Slicing in 3", "_behavior_staging_texture_d3_d11.html#autotoc_md19", null ],
      [ "Slicing in the middle", "_behavior_staging_texture_d3_d11.html#autotoc_md20", null ]
    ] ],
    [ "Manual", "manual.html", [
      [ "Introduction & Changes from Ogre 1.x", "_introduction_and_changes.html", [
        [ "Technical Overview", "_technical_overview.html", [
          [ "Overview", "_technical_overview.html#TechnicalOverviewOverview", [
            [ "SIMD Coherence", "_technical_overview.html#SIMDCoherence", null ]
          ] ],
          [ "Memory Managers usage patterns", "_technical_overview.html#MemoryManagerUsagePatterns", [
            [ "Cleanups", "_technical_overview.html#MemoryManagerCleanups", null ]
          ] ],
          [ "Memory preallocation", "_technical_overview.html#MemoryPreallocation", null ],
          [ "Configuring memory managers", "_technical_overview.html#ConfiguringMemoryManagers", null ],
          [ "Where is RenderTarget::update? Why do I get errors in Viewport?", "_technical_overview.html#RenderTargetUpdate", null ],
          [ "Porting from 1.x to 2.0", "_technical_overview.html#PortingV1ToV2", null ],
          [ "Porting from 2.0 to 2.1", "_technical_overview.html#PortingV20ToV21", null ]
        ] ],
        [ "Changes: Objects, Scene & Nodes", "_ogre20_changes.html", [
          [ "Names are now optional", "_ogre20_changes.html#NamesAreNowOptional", null ],
          [ "How to debug MovableObjects' (and Nodes) data", "_ogre20_changes.html#HowToDebugMovableObjectsData", [
            [ "Interpreting ArrayVector3", "_ogre20_changes.html#InterpretingArrayVector3", null ],
            [ "Dummy pointers instead of NULL", "_ogre20_changes.html#DummyPointers", null ]
          ] ],
          [ "Attachment and Visibility", "_ogre20_changes.html#AttachmentAndVisibility", null ],
          [ "Attaching/Detaching is more expensive than hiding", "_ogre20_changes.html#AttachingDetachingIsMoreExpensive", null ],
          [ "All MovableObjects require a SceneNode (Lights & Cameras)", "_ogre20_changes.html#AllMovableObjectsRequireSceneNode", null ],
          [ "Obtaining derived transforms", "_ogre20_changes.html#DerivedTransforms", null ],
          [ "SCENE_STATIC and SCENE_DYNAMIC", "_ogre20_changes.html#SceneStaticSceneDynamic", [
            [ "What means a Node to be SCENE_STATIC", "_ogre20_changes.html#SceneStaticNode", null ],
            [ "What means a Entities (and InstancedEntities) to be SCENE_STATIC", "_ogre20_changes.html#SceneStaticEntities", null ],
            [ "General", "_ogre20_changes.html#SceneStaticGeneral", null ]
          ] ],
          [ "Ogre asserts mCachedAabbOutOfDate or mCachedTransformOutOfDate while in debug mode", "_ogre20_changes.html#AssersionCachedOutOfDate", null ],
          [ "Custom classes derived from Renderable or MovableObject", "_ogre20_changes.html#DerivingRenderable", null ],
          [ "How do I get the vertex information from the new v2 Mesh classes?", "_ogre20_changes.html#V2MeshInformation", null ],
          [ "How do I set the element offsets, vertex buffer's source and index?", "_ogre20_changes.html#V2MeshElementOffset", null ],
          [ "My scene looks too dark or dull!", "_ogre20_changes.html#SceneLooksDarkDull", null ],
          [ "I activated gamma correction, but now my GUI textures look washed out!", "_ogre20_changes.html#GUIWashedOut", null ]
        ] ],
        [ "AZDO changes (Aproaching Zero Driver Overhead)", "azdo.html", [
          [ "V2 and v1 objects", "azdo.html#V2AndV1Objects", [
            [ "Longevity of the v1 objects and deprecation", "azdo.html#V2AndV1ObjectsV1Longevity", null ]
          ] ],
          [ "Render Queue", "azdo.html#RenderQueue", null ],
          [ "The VaoManager", "azdo.html#VaoMaanger", null ]
        ] ]
      ] ],
      [ "Rendering", "_rendering.html", [
        [ "Advanced Users", "_rendering.html#autotoc_md105", null ],
        [ "HLMS: High Level Material System", "hlms.html", [
          [ "Fundamental changes", "hlms.html#HlmsChanges", [
            [ "Viewports and Scissor tests", "hlms.html#HlmsChangesViewports", null ],
            [ "A lot of data is stored in \"Blocks\"", "hlms.html#HlmsChangesBlocks", null ],
            [ "Materials are still alive", "hlms.html#HlmsChangesMaterialsAlive", null ],
            [ "Fixed Function has been removed", "hlms.html#HlmsChangesFFP", null ]
          ] ],
          [ "The three components", "hlms.html#HlmsComponents", null ],
          [ "Blocks", "hlms.html#HlmsBlocks", [
            [ "Datablocks", "hlms.html#HlmsBlocksDatablocks", null ],
            [ "Macroblocks", "hlms.html#HlmsBlocksMacroblocks", null ],
            [ "Blendblocks", "hlms.html#HlmsBlocksBlendblocks", null ],
            [ "Samplerblocks", "hlms.html#HlmsBlocksSampleblocks", null ]
          ] ],
          [ "Hlms templates", "hlms.html#HlmsTemplates", null ],
          [ "The Hlms preprocessor", "hlms.html#HlmsPreprocessor", [
            [ "Preprocessor syntax", "hlms.html#HlmsPreprocessorSyntax", [
              [ "@property( expression )", "hlms.html#HlmsPreprocessorSyntaxProperty", null ],
              [ "@foreach( count, scopedVar, [start] )", "hlms.html#HlmsPreprocessorSyntaxForeach", null ],
              [ "@counter( variable )", "hlms.html#HlmsPreprocessorSyntaxCounter", null ],
              [ "@value( variable )", "hlms.html#HlmsPreprocessorSyntaxValue", null ],
              [ "@set add sub mul div mod min max", "hlms.html#HlmsPreprocessorSyntaxSetEtc", null ],
              [ "@piece( nameOfPiece )", "hlms.html#HlmsPreprocessorSyntaxPiece", null ],
              [ "@insertpiece( nameOfPiece )", "hlms.html#HlmsPreprocessorSyntaxInsertpiece", null ],
              [ "@undefpiece( nameOfPiece )", "hlms.html#HlmsPreprocessorSyntaxUndefpiece", null ],
              [ "@pset padd psub pmul pdiv pmod pmin pmax", "hlms.html#HlmsPreprocessorSyntaxPsetEtc", null ]
            ] ]
          ] ],
          [ "Creation of shaders", "hlms.html#HlmsCreationOfShaders", [
            [ "C++ interaction with shader templates", "hlms.html#HlmsCreationOfShadersCpp", null ],
            [ "Common conventions", "hlms.html#HlmsCreationOfShadersConventions", null ],
            [ "Hot reloading", "hlms.html#HlmsCreationOfShadersHotReloading", null ],
            [ "Disabling a stage", "hlms.html#HlmsCreationOfShadersDisablingStage", null ],
            [ "Customizing an existing implementation", "hlms.html#HlmsCreationOfShadersCustomizing", null ]
          ] ],
          [ "Run-time rendering", "hlms.html#HlmsRuntimeRendering", [
            [ "preparePassHash", "hlms.html#HlmsRuntimeRenderingPreparePassHash", null ],
            [ "fillBuffersFor", "hlms.html#HlmsRuntimeRenderingFillBuffersFor", null ],
            [ "Multithreaded Shader Compilation", "hlms.html#autotoc_md109", null ]
          ] ],
          [ "Using the HLMS implementations", "hlms.html#UsingHlmsImplementation", [
            [ "Initialization", "hlms.html#UsingHlmsImplementationInitialization", null ],
            [ "Deinitialization", "hlms.html#UsingHlmsImplementationDeinitilization", null ],
            [ "Creating a datablock", "hlms.html#UsingHlmsImplementationCreatingDatablock", null ]
          ] ],
          [ "The Hlms Texture Manager", "hlms.html#HlmsTextureManager", [
            [ "Automatic batching", "hlms.html#HlmsTextureManagerAutomaticBatching", [
              [ "Texture types", "hlms.html#HlmsTextureManagerAutomaticBatchingTextureTypes", null ],
              [ "Automatic parameters", "hlms.html#HlmsTextureManagerAutomaticBatchingAutoParams", null ],
              [ "Loading a texture twice (i.e. with a different format) via aliasing", "hlms.html#HlmsTextureManagerAutomaticBatchingLoadingTwice", null ]
            ] ],
            [ "Manual: Texture packs", "hlms.html#HlmsTextureManagerTexturePacks", null ],
            [ "Watching out for memory consumption", "hlms.html#HlmsTextureManagerWatchOutMemory", [
              [ "Additional memory considerations", "hlms.html#HlmsTextureManagerWatchOutMemoryConsiderations", null ],
              [ "setWorkerThreadMinimumBudget warning", "hlms.html#setWorkerThreadMinimumBudget", null ]
            ] ]
          ] ],
          [ "Troubleshooting", "hlms.html#HlmsTroubleshooting", [
            [ "My shadows don't show up or are very glitchy", "hlms.html#HlmsTroubleshootingShadow", null ]
          ] ],
          [ "Precision / Quality", "hlms.html#autotoc_md110", null ],
          [ "Multithreaded Shader Compilation", "_hlms_threading.html", [
            [ "CMake Options", "_hlms_threading.html#HlmsThreading_CMakeOptions", null ],
            [ "The tid (Thread ID) argument", "_hlms_threading.html#HlmsThreading_tidArgument", [
              [ "API when OGRE_SHADER_COMPILATION_THREADING_MODE = 1", "_hlms_threading.html#autotoc_md98", null ]
            ] ],
            [ "How does threaded Hlms work?", "_hlms_threading.html#autotoc_md99", [
              [ "What is the range of tid argument?", "_hlms_threading.html#autotoc_md100", null ]
            ] ]
          ] ]
        ] ],
        [ "Global Illumination Methods", "_gi_methods.html", [
          [ "Ambient Lighting", "_gi_methods.html#GiAmbientLighting", [
            [ "Flat", "_gi_methods.html#GiAmbientLightingFlat", null ],
            [ "Hemisphere", "_gi_methods.html#GiAmbientLightingHemisphere", null ],
            [ "Spherical Harmonics", "_gi_methods.html#GiAmbientLightingSH", null ]
          ] ],
          [ "Parallax Corrected Cubemaps (PCC)", "_gi_methods.html#GiPCC", [
            [ "Auto PCC", "_gi_methods.html#GiPCCAuto", null ],
            [ "Manual PCC", "_gi_methods.html#GiPCCManual", null ]
          ] ],
          [ "Per Pixel PCC", "_gi_methods.html#GiPPPCC", [
            [ "PCC Per Pixel Grid Placement", "_gi_methods.html#GiPPGridPlacement", null ]
          ] ],
          [ "Instant Radiosity", "_gi_methods.html#GiInstantRadiosity", null ],
          [ "Irradiance Volume", "_gi_methods.html#GiIrradianceVolume", null ],
          [ "Voxel Cone Tracing (aka VCT)", "_gi_methods.html#GiVCT", [
            [ "VCT + Per Pixel PCC Hybrid", "_gi_methods.html#GiVCTPlusPPPCC", null ]
          ] ],
          [ "Irradiance Field with Depth (IFD)", "_gi_methods.html#GiIFD", null ],
          [ "Cascaded Image Voxel Cone Tracing (CIVCT)", "_gi_methods.html#GiCIVCT", null ],
          [ "What technique should I choose?", "_gi_methods.html#GiWhatTechniqueChoose", null ],
          [ "Image Voxel Cone Tracing", "_image_voxel_cone_tracing.html", [
            [ "Step 1: Image Voxelizer", "_image_voxel_cone_tracing.html#IVCT_Step1", [
              [ "Downside", "_image_voxel_cone_tracing.html#IVCT_Step1_Downside", [
                [ "Non-researched solutions:", "_image_voxel_cone_tracing.html#autotoc_md101", null ]
              ] ],
              [ "Trivia", "_image_voxel_cone_tracing.html#autotoc_md102", null ]
            ] ],
            [ "Step 2: Row Translation", "_image_voxel_cone_tracing.html#IVCT_Step2", null ],
            [ "Step 3: Cascades", "_image_voxel_cone_tracing.html#IVCT_Step3", null ],
            [ "Wait isn't this what UE5's Lumen does?", "_image_voxel_cone_tracing.html#autotoc_md103", null ],
            [ "Wait isn't this what Godot does?", "_image_voxel_cone_tracing.html#autotoc_md104", null ]
          ] ]
        ] ],
        [ "The Command Buffer", "commandbuffer.html", [
          [ "Adding a command", "commandbuffer.html#CommandBufferAddCommand", null ],
          [ "Structure of a command", "commandbuffer.html#CommandBufferCommandStructure", null ],
          [ "Execution table", "commandbuffer.html#CommandBufferExecutionTable", [
            [ "Hacks and Tricks", "commandbuffer.html#CommandBufferExecutionTableHacks", null ]
          ] ],
          [ "Post-processing the command buffer", "commandbuffer.html#CommandBufferPostProcessing", null ]
        ] ],
        [ "Root Layouts", "_root_layouts.html", [
          [ "Old APIs (i.e. D3D11 and GL)", "_root_layouts.html#RootLayoutsOldAPIs", null ],
          [ "New APIs and Root Layouts", "_root_layouts.html#RootLayoutsNewAPIs", null ],
          [ "Setting up root layouts", "_root_layouts.html#RootLayoutsSettingUp", [
            [ "Could you have used e.g. \"const_buffers\" : [0,7] instead of [4,7]?", "_root_layouts.html#autotoc_md106", null ]
          ] ],
          [ "Declaring Root Layouts in shaders", "_root_layouts.html#RootLayoutsDeclaringInShaders", null ],
          [ "Baked sets", "_root_layouts.html#RootLayoutsBakedSets", null ],
          [ "Prefab Root Layouts for low level materials", "_root_layouts.html#RootLayoutPrefabs", null ],
          [ "Arrays of Textures", "_root_layouts.html#RootLayoutsArraysOfTextures", [
            [ "C++", "_root_layouts.html#RootLayoutsAoTCpp", null ],
            [ "Inline shader declaration", "_root_layouts.html#RootLayoutsAoTInlineShader", null ],
            [ "Automatic", "_root_layouts.html#RootLayoutsAoTAuto", null ],
            [ "Making GLSL shaders compatible with both Vulkan and OpenGL", "_root_layouts.html#RootLayoutsGLSLForGLandVK", [
              [ "Example:", "_root_layouts.html#RootLayoutsGLSLForGLandVKExample", [
                [ "OpenGL", "_root_layouts.html#autotoc_md107", null ],
                [ "Vulkan", "_root_layouts.html#autotoc_md108", null ]
              ] ]
            ] ]
          ] ]
        ] ]
      ] ],
      [ "Scripts", "_scripts.html", [
        [ "Loading scripts", "_scripts.html#autotoc_md120", null ],
        [ "Format", "_scripts.html#Format", [
          [ "Script Inheritance", "_scripts.html#Script-Inheritance", [
            [ "Advanced Script Inheritance", "_scripts.html#Advanced-Script-Inheritance", null ]
          ] ],
          [ "Script Variables", "_scripts.html#Script-Variables", null ],
          [ "Script Import Directive", "_scripts.html#Script-Import-Directive", null ]
        ] ],
        [ "Custom Translators", "_scripts.html#custom-translators", null ],
        [ "JSON Materials", "_j_s_o_n-_materials.html", [
          [ "Reference Guide: HLMS Blendblock", "hlmsblendblockref.html", [
            [ "Parameters:", "hlmsblendblockref.html#bbParameters", [
              [ "Parameter: alpha_to_coverage", "hlmsblendblockref.html#bbParamAlphaToCoverage", null ],
              [ "Parameter: blendmask", "hlmsblendblockref.html#bbParamBlendmask", null ],
              [ "Parameter: separate_blend", "hlmsblendblockref.html#bbParamSeperateBlend", null ],
              [ "Parameter: src_blend_factor", "hlmsblendblockref.html#bbParamSorceBlendFactor", null ],
              [ "Parameter: dst_blend_factor", "hlmsblendblockref.html#bbParamDestBlendFactor", null ],
              [ "Parameter: src_alpha_blend_factor", "hlmsblendblockref.html#bbParamSourceAlphaBlendFactor", null ],
              [ "Parameter: dst_alpha_blend_factor", "hlmsblendblockref.html#bbParamDestinationAlphaBlendFactor", null ],
              [ "Parameter: blend_operation", "hlmsblendblockref.html#bbParamBlendOperation", null ],
              [ "Parameter: blend_operation_alpha", "hlmsblendblockref.html#bbParamBlendOperationAlpha", null ]
            ] ],
            [ "Example Blendblock Definition:", "hlmsblendblockref.html#bbExample", null ],
            [ "Scene blend type settings:", "hlmsblendblockref.html#bbBlendtypes", [
              [ "Type: Transparent Alpha", "hlmsblendblockref.html#btTransparentAlpha", null ],
              [ "Type: Transparent Colour", "hlmsblendblockref.html#btTransparentColour", null ],
              [ "Type: Add", "hlmsblendblockref.html#btAdd", null ],
              [ "Type: Modulate", "hlmsblendblockref.html#btModulate", null ],
              [ "Type: Replace", "hlmsblendblockref.html#btReplace", null ]
            ] ],
            [ "Links", "hlmsblendblockref.html#bbLinks", null ]
          ] ],
          [ "Reference Guide: HLMS Macroblock", "hlmsmacroblockref.html", [
            [ "Parameters:", "hlmsmacroblockref.html#mbParameters", [
              [ "Parameter: scissor_test", "hlmsmacroblockref.html#mbParamScissorText", null ],
              [ "Parameter: depth_check", "hlmsmacroblockref.html#mbParamDepthCheck", null ],
              [ "Parameter: depth_write", "hlmsmacroblockref.html#mbParamDepthWrite", null ],
              [ "Parameter: depth_function", "hlmsmacroblockref.html#mbParamDepthFunction", null ],
              [ "Parameter: depth_bias_constant", "hlmsmacroblockref.html#mbParamDepthBiasConstant", null ],
              [ "Parameter: depth_bias_slope_scale", "hlmsmacroblockref.html#mbParamDepthBiasSlopeScale", null ],
              [ "Parameter: cull_mode", "hlmsmacroblockref.html#mbParamCullMode", null ],
              [ "Parameter: polygon_mode", "hlmsmacroblockref.html#mbParamPolygonMode", null ]
            ] ],
            [ "Example Macroblock Definition:", "hlmsmacroblockref.html#mbExample", null ],
            [ "Links", "hlmsmacroblockref.html#mbLinks", null ]
          ] ],
          [ "Reference Guide: HLMS Samplerblock", "hlmssamplerref.html", [
            [ "Parameters:", "hlmssamplerref.html#sbParameters", [
              [ "Parameter: min", "hlmssamplerref.html#sbParamMin", null ],
              [ "Parameter: mag", "hlmssamplerref.html#sbParamMag", null ],
              [ "Parameter: mip", "hlmssamplerref.html#sbParamMip", null ],
              [ "Parameter: u", "hlmssamplerref.html#sbParamU", null ],
              [ "Parameter: v", "hlmssamplerref.html#sbParamV", null ],
              [ "Parameter: w", "hlmssamplerref.html#sbParamW", null ],
              [ "Parameter: miplodbias", "hlmssamplerref.html#sbParamMiplodbias", null ],
              [ "Parameter: max_anisotropic", "hlmssamplerref.html#sbParamMaxAnisotropic", null ],
              [ "Parameter: compare_function", "hlmssamplerref.html#sbParamComparefunction", null ],
              [ "Parameter: border", "hlmssamplerref.html#sbParamBorder", null ],
              [ "Parameter: min_lod", "hlmssamplerref.html#sbParamMinlod", null ],
              [ "Parameter: max_lod", "hlmssamplerref.html#sbParamMaxlod", null ]
            ] ],
            [ "Example Samplerblock Definition:", "hlmssamplerref.html#sbExample", null ],
            [ "Links", "hlmssamplerref.html#sbLinks", null ]
          ] ],
          [ "Reference Guide: HLMS PBS Datablock", "hlmspbsdatablockref.html", [
            [ "Common Datablock Parameters:", "hlmspbsdatablockref.html#dbCommonParameters", [
              [ "Parameter: alpha_test", "hlmspbsdatablockref.html#dbParamAlphaTest", null ],
              [ "Parameter: blendblock", "hlmspbsdatablockref.html#dbParamBlendBlock", null ],
              [ "Parameter: macroblock", "hlmspbsdatablockref.html#dbParamMacroBlock", null ],
              [ "Parameter: shadow_const_bias", "hlmspbsdatablockref.html#dbParamShadowConstBias", null ]
            ] ],
            [ "PBS Datablock Parameters", "hlmspbsdatablockref.html#dbPBSParameters", [
              [ "Parameter: brdf", "hlmspbsdatablockref.html#dbParamBRDF", null ],
              [ "Parameter: refraction_strength", "hlmspbsdatablockref.html#autotoc_md111", null ],
              [ "Parameter: detail_diffuse[X]", "hlmspbsdatablockref.html#dbParamDetailDiffuse", null ],
              [ "Parameter: detail_normal[X]", "hlmspbsdatablockref.html#dbParamDetailNormal", null ],
              [ "Parameter: detail_weight", "hlmspbsdatablockref.html#dbParamDetailWeight", null ],
              [ "Parameter: diffuse", "hlmspbsdatablockref.html#dbParamDiffuse", null ],
              [ "Parameter: emissive", "hlmspbsdatablockref.html#dbParamEmissive", null ],
              [ "Parameter: fresnel", "hlmspbsdatablockref.html#dbParamFresnel", null ],
              [ "Parameter: metalness", "hlmspbsdatablockref.html#dbParamMetalness", null ],
              [ "Parameter: normal", "hlmspbsdatablockref.html#dbParamNormal", null ],
              [ "Parameter: receive_shadows", "hlmspbsdatablockref.html#dbParamReceiveShadows", null ],
              [ "Parameter: reflection", "hlmspbsdatablockref.html#dbParamReflection", null ],
              [ "Parameter: roughness", "hlmspbsdatablockref.html#dbParamRoughness", null ],
              [ "Parameter: specular", "hlmspbsdatablockref.html#dbParamSpecular", null ],
              [ "Parameter: transparency", "hlmspbsdatablockref.html#dbParamTransparency", null ],
              [ "Parameter: two_sided", "hlmspbsdatablockref.html#dbParamTwoSided", null ],
              [ "Parameter: workflow", "hlmspbsdatablockref.html#dbParamWorkflow", null ]
            ] ],
            [ "Example PBS Datablock Definition:", "hlmspbsdatablockref.html#dbExample", [
              [ "Links", "hlmspbsdatablockref.html#dbLinks", null ]
            ] ]
          ] ],
          [ "Reference Guide: HLMS Unlit Datablock", "hlmsunlitdatablockref.html", [
            [ "Common Datablock Parameters:", "hlmsunlitdatablockref.html#dbulCommonParameters", [
              [ "Parameter: alpha_test", "hlmsunlitdatablockref.html#dbulParamAlphaTest", null ],
              [ "Parameter: blendblock", "hlmsunlitdatablockref.html#dbulParamBlendBlock", null ],
              [ "Parameter: macroblock", "hlmsunlitdatablockref.html#dbulParamMacroBlock", null ]
            ] ],
            [ "Unlit Datablock Parameters", "hlmsunlitdatablockref.html#dbulUnlitParameters", [
              [ "Parameter: diffuse", "hlmsunlitdatablockref.html#dbulParamDiffuse", null ],
              [ "Parameter: diffuse_map[X]", "hlmsunlitdatablockref.html#dbulParamDetailNormal", null ]
            ] ],
            [ "Example Unlit Datablock Definition:", "hlmsunlitdatablockref.html#dbulExample", [
              [ "Links", "hlmsunlitdatablockref.html#dbulLinks", null ]
            ] ]
          ] ],
          [ "Reference Guide: HLMS Terra Datablock", "hlmsterradatablockref.html", [
            [ "Common Datablock Parameters:", "hlmsterradatablockref.html#dbtCommonParameters", null ],
            [ "Terra Datablock Parameters", "hlmsterradatablockref.html#dbtTerraParameters", [
              [ "Parameter: brdf", "hlmsterradatablockref.html#dbtParamBRDF", null ],
              [ "Parameter: detail[X]", "hlmsterradatablockref.html#dbtParamDetailDiffuse", null ],
              [ "Parameter: detail_weight", "hlmsterradatablockref.html#dbtParamDetailWeight", null ],
              [ "Parameter: diffuse", "hlmsterradatablockref.html#dbtParamDiffuse", null ],
              [ "Parameter: reflection", "hlmsterradatablockref.html#dbtParamReflection", null ]
            ] ],
            [ "Example Terra Datablock Definition:", "hlmsterradatablockref.html#dbtExample", [
              [ "Links", "hlmsterradatablockref.html#dbtLinks", null ]
            ] ]
          ] ]
        ] ],
        [ "Compositor", "compositor.html", [
          [ "Nodes", "compositor.html#CompositorNodes", [
            [ "Input & output channels and RTTs", "compositor.html#CompositorNodesChannelsAndRTTs", [
              [ "Locally declared textures", "compositor.html#CompositorNodesChannelsAndRTTsLocalTextures", null ],
              [ "Textures coming from input channels", "compositor.html#CompositorNodesChannelsAndRTTsFromInputChannel", null ],
              [ "Global Textures", "compositor.html#CompositorNodesChannelsAndRTTsGlobal", null ],
              [ "compositor_node parameters", "compositor.html#autotoc_md113", [
                [ "in", "compositor.html#CompositorNode_in", null ],
                [ "out", "compositor.html#CompositorNode_out", null ],
                [ "in_buffer", "compositor.html#CompositorNode_in_buffer", null ],
                [ "out_buffer", "compositor.html#CompositorNode_out_buffer", null ],
                [ "custom_id", "compositor.html#CompositorNode_custom_id", null ]
              ] ],
              [ "Main RenderTarget", "compositor.html#CompositorNodesChannelsAndRTTsMainRenderTarget", null ]
            ] ],
            [ "Target", "compositor.html#CompositorNodesTarget", [
              [ "target parameters", "compositor.html#autotoc_md114", [
                [ "target_level_barrier", "compositor.html#CompositorTarget_target_level_barrier", null ]
              ] ]
            ] ],
            [ "Passes", "compositor.html#CompositorNodesPasses", [
              [ "pass parameters", "compositor.html#autotoc_md115", [
                [ "pass", "compositor.html#CompositorPass_pass", null ],
                [ "num_initial", "compositor.html#CompositorPass_num_initial", null ],
                [ "flush_command_buffers", "compositor.html#CompositorPass_flush_command_buffers", null ],
                [ "identifier", "compositor.html#CompositorPass_identifier", null ],
                [ "execution_mask", "compositor.html#CompositorPass_execution_mask", null ],
                [ "viewport_modifier_mask", "compositor.html#CompositorPass_viewport_modifier_mask", null ],
                [ "colour_write", "compositor.html#CompositorPass_colour_write", null ],
                [ "profiling_id", "compositor.html#CompositorPass_profiling_id", null ],
                [ "viewport", "compositor.html#CompositorPass_viewport", null ],
                [ "expose", "compositor.html#CompositorPass_expose", null ],
                [ "skip_load_store_semantics", "compositor.html#CompositorPass_skip_load_store_semantics", null ],
                [ "load", "compositor.html#CompositorPass_load", null ],
                [ "all (load)", "compositor.html#CompositorPass_load_all", null ],
                [ "colour (load)", "compositor.html#CompositorPass_load_colour", null ],
                [ "depth (load)", "compositor.html#CompositorPass_load_depth", null ],
                [ "stencil (load)", "compositor.html#CompositorPass_load_stencil", null ],
                [ "clear_colour / colour_value (load)", "compositor.html#CompositorPass_load_clear_colour", null ],
                [ "clear_colour_reverse_depth_aware (load)", "compositor.html#CompositorPass_load_clear_colour_reverse_depth_aware", null ],
                [ "clear_depth (load)", "compositor.html#CompositorPass_load_clear_depth", null ],
                [ "clear_stencil (load)", "compositor.html#CompositorPass_load_clear_stencil", null ],
                [ "warn_if_rtv_was_flushed (load)", "compositor.html#CompositorPass_load_warn_if_rtv_was_flushed", null ],
                [ "store", "compositor.html#CompositorPass_store", null ],
                [ "all (store)", "compositor.html#CompositorPass_store_all", null ],
                [ "colour (store)", "compositor.html#CompositorPass_store_colour", null ],
                [ "depth (store)", "compositor.html#CompositorPass_store_depth", null ],
                [ "stencil (store)", "compositor.html#CompositorPass_store_stencil", null ]
              ] ],
              [ "clear", "compositor.html#CompositorNodesPassesClear", [
                [ "non_tilers_only", "compositor.html#CompositorPass_clear_non_tilers_only", null ],
                [ "buffers", "compositor.html#CompositorPass_clear_buffers", null ]
              ] ],
              [ "generate_mipmaps", "compositor.html#CompositorNodesPassesGenerateMipmaps", [
                [ "mipmap_method", "compositor.html#CompositorNodesPassesGenerateMipmaps_mipmap_method", null ],
                [ "kernel_radius", "compositor.html#CompositorNodesPassesGenerateMipmaps_kernel_radius", null ],
                [ "gauss_deviation", "compositor.html#CompositorNodesPassesGenerateMipmaps_gauss_deviation", null ]
              ] ],
              [ "render_quad", "compositor.html#CompositorNodesPassesQuad", [
                [ "use_quad", "compositor.html#CompositorNodesPassesQuad_use_quad", null ],
                [ "material", "compositor.html#CompositorNodesPassesQuad_material", null ],
                [ "hlms", "compositor.html#CompositorNodesPassesQuad_hlms", null ],
                [ "input", "compositor.html#CompositorNodesPassesQuad_input", null ],
                [ "quad_normals", "compositor.html#CompositorNodesPassesQuad_quad_normals", null ],
                [ "camera", "compositor.html#CompositorNodesPassesQuad_camera", null ],
                [ "camera_cubemap_reorient", "compositor.html#CompositorNodesPassesQuad_camera_cubemap_reorient", null ]
              ] ],
              [ "render_scene", "compositor.html#CompositorNodesPassesRenderScene", [
                [ "rq_first", "compositor.html#CompositorNodesPassesRenderScene_rq_first", null ],
                [ "rq_last", "compositor.html#CompositorNodesPassesRenderScene_rq_last", null ],
                [ "lod_bias", "compositor.html#CompositorNodesPassesRenderScene_lod_bias", null ],
                [ "lod_update_list", "compositor.html#CompositorNodesPassesRenderScene_lod_update_list", null ],
                [ "cull_reuse_data", "compositor.html#CompositorNodesPassesRenderScene_cull_reuse_data", null ],
                [ "visibility_mask", "compositor.html#CompositorNodesPassesRenderScene_visibility_mask", null ],
                [ "light_visibility_mask", "compositor.html#CompositorNodesPassesRenderScene_light_visibility_mask", null ],
                [ "shadows", "compositor.html#CompositorNodesPassesRenderScene_shadows", null ],
                [ "overlays", "compositor.html#CompositorNodesPassesRenderScene_overlays", null ],
                [ "camera", "compositor.html#CompositorNodesPassesRenderScene_camera", null ],
                [ "lod_camera", "compositor.html#CompositorNodesPassesRenderScene_lod_camera", null ],
                [ "cull_camera", "compositor.html#CompositorNodesPassesRenderScene_cull_camera", null ],
                [ "camera_cubemap_reorient", "compositor.html#CompositorNodesPassesRenderScene_camera_cubemap_reorient", null ],
                [ "enable_forwardplus", "compositor.html#CompositorNodesPassesRenderScene_enable_forwardplus", null ],
                [ "flush_command_buffers_after_shadow_node", "compositor.html#CompositorNodesPassesRenderScene_flush_command_buffers_after_shadow_node", null ],
                [ "is_prepass", "compositor.html#CompositorNodesPassesRenderScene_is_prepass", null ],
                [ "use_prepass", "compositor.html#CompositorNodesPassesRenderScene_use_prepass", null ],
                [ "gen_normals_gbuffer", "compositor.html#CompositorNodesPassesRenderScene_gen_normals_gbuffer", null ]
              ] ],
              [ "use_refractions", "compositor.html#CompositorNodesPassesRenderScene_use_refractions", [
                [ "uv_baking", "compositor.html#CompositorNodesPassesRenderScene_uv_baking", null ],
                [ "uv_baking_offset", "compositor.html#CompositorNodesPassesRenderScene_uv_baking_offset", null ],
                [ "bake_lighting_only", "compositor.html#CompositorNodesPassesRenderScene_bake_lighting_only", null ],
                [ "instanced_stereo", "compositor.html#CompositorNodesPassesRenderScene_instanced_stereo", null ]
              ] ],
              [ "shadows", "compositor.html#CompositorNodesPassesShadows", null ],
              [ "stencil", "compositor.html#CompositorNodesPassesStencil", null ],
              [ "uav_queue", "compositor.html#CompositorNodesPassesUavQueue", [
                [ "starting_slot", "compositor.html#CompositorNodesPassesUavQueue_starting_slot", null ],
                [ "uav", "compositor.html#CompositorNodesPassesUavQueue_uav", null ],
                [ "uav_external", "compositor.html#CompositorNodesPassesUavQueue_uav_external", null ],
                [ "uav_buffer", "compositor.html#CompositorNodesPassesUavQueue_uav_buffer", null ],
                [ "keep_previous_uavs", "compositor.html#CompositorNodesPassesUavQueue_keep_previous_uavs", null ]
              ] ],
              [ "compute", "compositor.html#CompositorNodesPassesCompute", [
                [ "job", "compositor.html#CompositorPassCompute_job", null ],
                [ "uav", "compositor.html#CompositorPassCompute_uav", null ],
                [ "uav_buffer", "compositor.html#CompositorPassCompute_uav_buffer", null ],
                [ "input", "compositor.html#CompositorPassCompute_input", null ]
              ] ]
            ] ],
            [ "texture", "compositor.html#CompositorNodesTextures", [
              [ "MSAA: Explicit vs Implicit resolves", "compositor.html#CompositorNodesTexturesMsaa", [
                [ "Implicit resolves", "compositor.html#CompositorNodesTexturesMsaaImplicit", null ],
                [ "Explicit resolves", "compositor.html#CompositorNodesTexturesMsaaExplicit", null ]
              ] ],
              [ "Depth Textures", "compositor.html#CompositorNodesTexturesDepth", null ]
            ] ]
          ] ],
          [ "Shadow Nodes", "compositor.html#CompositorShadowNodes", [
            [ "Setting up shadow nodes", "compositor.html#CompositorShadowNodesSetup", null ],
            [ "Example", "compositor.html#CompositorShadowNodesExample", null ],
            [ "Shadow map atlas & Point Lights", "compositor.html#CompositorShadowNodesAtlasAndPointLights", null ],
            [ "Reuse, recalculate and first", "compositor.html#CompositorShadowNodesReuseEtc", null ],
            [ "Shadow mapping setup types", "compositor.html#CompositorShadowNodesTypes", [
              [ "Uniform shadow mapping", "compositor.html#CompositorShadowNodesTypesUniform", null ],
              [ "Focused", "compositor.html#CompositorShadowNodesTypesFocused", null ],
              [ "PSSM / CSM", "compositor.html#CompositorShadowNodesTypesPssm", null ],
              [ "Plane Optimal", "compositor.html#CompositorShadowNodesTypesPlaneOptimal", null ]
            ] ]
          ] ],
          [ "Workspaces", "compositor.html#CompositorWorkspaces", [
            [ "Data dependencies between nodes and circular dependencies", "compositor.html#CompositorWorkspacesDataDependencies", null ]
          ] ],
          [ "Setting up code", "compositor.html#CompositorSetupCode", [
            [ "Initializing the workspace", "compositor.html#CompositorWorkspacesSetupInitialize", null ],
            [ "Simple bootstrap for beginners", "compositor.html#CompositorWorkspacesSetupSimple", null ],
            [ "Advanced C++ users", "compositor.html#CompositorWorkspacesSetupAdvanced", null ]
          ] ],
          [ "Stereo and Split-Screen Rendering", "compositor.html#StereoAndSplitScreenRendering", [
            [ "Per-Workspace offset and scale", "compositor.html#CompositorWorkspacesStereoPerWorkspace", null ],
            [ "Viewport modifier mask", "compositor.html#CompositorWorkspacesStereoViewportMask", null ],
            [ "Execution mask", "compositor.html#CompositorWorkspacesStereoExecutionMask", null ],
            [ "Default values", "compositor.html#CompositorWorkspacesStereoDefaultValues", null ]
          ] ],
          [ "Advanced MSAA", "compositor.html#AdvancedMSAA", [
            [ "What is MSAA?", "compositor.html#autotoc_md116", [
              [ "Supersampling Antialiasing (SSAA) vs MSAA", "compositor.html#autotoc_md117", null ],
              [ "MSAA approach to the problem", "compositor.html#autotoc_md118", [
                [ "Resources", "compositor.html#CompositorNodesTexturesMsaaResources", null ]
              ] ]
            ] ],
            [ "Ogre + MSAA with Implicit Resolves", "compositor.html#autotoc_md119", null ],
            [ "Ogre + MSAA with Explicit Resolves", "compositor.html#MSAAExplicitResolves", null ]
          ] ],
          [ "RTV (RenderTargetView)", "compositor.html#CompositorRTV", [
            [ "What is an RTV", "compositor.html#CompositorWhatisAnRtv", null ],
            [ "RTV settings", "compositor.html#CompositorRtvSettings", null ],
            [ "RTV Examples", "compositor.html#CompositorRtv_Examples", null ]
          ] ]
        ] ],
        [ "Particle Scripts", "_particle-_scripts.html", [
          [ "Particle System Attributes", "_particle-_scripts.html#Particle-System-Attributes", [
            [ "quota", "_particle-_scripts.html#ParticleSystemAttributes_quota", null ],
            [ "material", "_particle-_scripts.html#ParticleSystemAttributes_material", null ],
            [ "particle_width", "_particle-_scripts.html#ParticleSystemAttributes_particle_width", null ],
            [ "particle_height", "_particle-_scripts.html#ParticleSystemAttributes_particle_height", null ],
            [ "cull_each", "_particle-_scripts.html#ParticleSystemAttributes_cull_each", null ],
            [ "renderer", "_particle-_scripts.html#ParticleSystemAttributes_renderer", null ],
            [ "sorted", "_particle-_scripts.html#ParticleSystemAttributes_sorted", null ],
            [ "local_space", "_particle-_scripts.html#ParticleSystemAttributes_local_space", null ],
            [ "iteration_interval", "_particle-_scripts.html#ParticleSystemAttributes_iteration_interval", null ],
            [ "nonvisible_update_timeout", "_particle-_scripts.html#ParticleSystemAttributes_nonvisible_update_timeout", null ]
          ] ],
          [ "Billboard Renderer Attributes", "_particle-_scripts.html#Billboard-Renderer-Attributes", [
            [ "billboard_type", "_particle-_scripts.html#BillboardRendererAttributes_billboard_type", null ],
            [ "billboard_origin", "_particle-_scripts.html#BillboardRendererAttributes_origin", null ],
            [ "billboard_rotation_type", "_particle-_scripts.html#BillboardRendererAttributes_billboard_rotation_type", null ],
            [ "common_direction", "_particle-_scripts.html#BillboardRendererAttributes_common_direction", null ],
            [ "common_up_vector", "_particle-_scripts.html#BillboardRendererAttributes_common_up_vector", null ],
            [ "point_rendering", "_particle-_scripts.html#BillboardRendererAttributes_point_rendering", null ],
            [ "accurate_facing", "_particle-_scripts.html#BillboardRendererAttributes_accurate_facing", null ],
            [ "texture_sheet_size", "_particle-_scripts.html#BillboardRendererAttributes_texture_sheet_size", null ]
          ] ],
          [ "Particle Emitters", "_particle-_scripts.html#Particle-Emitters", [
            [ "Emitting Emitters", "_particle-_scripts.html#Emitting-Emitters", null ],
            [ "Common Emitter Attributes", "_particle-_scripts.html#autotoc_md112", null ],
            [ "angle", "_particle-_scripts.html#ParticleEmitterAttributes_angle", null ],
            [ "colour", "_particle-_scripts.html#ParticleEmitterAttributes_colour", null ],
            [ "colour_range_start & colour_range_end", "_particle-_scripts.html#ParticleEmitterAttributes_colour_range_start", null ],
            [ "direction", "_particle-_scripts.html#ParticleEmitterAttributes_direction", null ],
            [ "direction_position_reference", "_particle-_scripts.html#ParticleEmitterAttributes_direction_position_reference", null ],
            [ "emission_rate", "_particle-_scripts.html#ParticleEmitterAttributes_emission_rate", null ],
            [ "position", "_particle-_scripts.html#ParticleEmitterAttributes_position", null ],
            [ "velocity", "_particle-_scripts.html#ParticleEmitterAttributes_velocity", null ],
            [ "velocity_min & velocity_max", "_particle-_scripts.html#ParticleEmitterAttributes_velocity_min_max", null ],
            [ "time_to_live", "_particle-_scripts.html#ParticleEmitterAttributes_time_to_live", null ],
            [ "time_to_live_min & time_to_live_max", "_particle-_scripts.html#ParticleEmitterAttributes_time_to_live_min_max", null ],
            [ "duration", "_particle-_scripts.html#ParticleEmitterAttributes_duration", null ],
            [ "duration_min & duration_max", "_particle-_scripts.html#ParticleEmitterAttributes_duration_min_max", null ],
            [ "repeat_delay", "_particle-_scripts.html#ParticleEmitterAttributes_repeat_delay", null ],
            [ "repeat_delay_min & repeat_delay_max", "_particle-_scripts.html#ParticleEmitterAttributes_repeat_delay_min_max", null ]
          ] ],
          [ "Standard Particle Emitters", "_particle-_scripts.html#Standard-Particle-Emitters", [
            [ "Point Emitter", "_particle-_scripts.html#Point-Emitter", null ],
            [ "Box Emitter", "_particle-_scripts.html#Box-Emitter", null ],
            [ "Cylinder Emitter", "_particle-_scripts.html#Cylinder-Emitter", null ],
            [ "Ellipsoid Emitter", "_particle-_scripts.html#Ellipsoid-Emitter", null ],
            [ "Hollow Ellipsoid Emitter", "_particle-_scripts.html#Hollow-Ellipsoid-Emitter", null ],
            [ "Ring Emitter", "_particle-_scripts.html#Ring-Emitter", null ]
          ] ],
          [ "Particle Affectors", "_particle-_scripts.html#Particle-Affectors", null ],
          [ "Standard Particle Affectors", "_particle-_scripts.html#Standard-Particle-Affectors", [
            [ "Linear Force Affector", "_particle-_scripts.html#Linear-Force-Affector", null ],
            [ "ColourFader Affector", "_particle-_scripts.html#ColourFader-Affector", null ],
            [ "ColourFader2 Affector", "_particle-_scripts.html#ColourFader2-Affector", null ],
            [ "Scaler Affector", "_particle-_scripts.html#Scaler-Affector", null ],
            [ "Rotator Affector", "_particle-_scripts.html#Rotator-Affector", null ],
            [ "ColourInterpolator Affector", "_particle-_scripts.html#ColourInterpolator-Affector", null ],
            [ "ColourImage Affector", "_particle-_scripts.html#ColourImage-Affector", null ],
            [ "DeflectorPlane Affector", "_particle-_scripts.html#DeflectorPlane-Affector", null ],
            [ "DirectionRandomiser Affector", "_particle-_scripts.html#DirectionRandomiser-Affector", null ]
          ] ]
        ] ],
        [ "Overlays", "v1__overlays.html", null ]
      ] ],
      [ "Performance", "_performance_page.html", [
        [ "Threading", "threading.html", [
          [ "Initializing", "threading.html#ThreadingInitializing", [
            [ "Ideal number of threads", "threading.html#ThreadingInitializingNumberOfThreads", null ]
          ] ],
          [ "What tasks are threaded in Ogre", "threading.html#ThreadingInOgre", null ],
          [ "Using Ogre's threading system for custom tasks", "threading.html#ThreadingCustomTasks", null ],
          [ "Thread safety of SceneNodes", "threading.html#ThreadSafetySceneNodes", null ]
        ] ],
        [ "Performance Hints", "performance.html", null ],
        [ "Tunning memory consumption and resources", "_tuning_memory_resources.html", [
          [ "Grouping textures by type", "_tuning_memory_resources.html#GroupingTexturesByType", null ],
          [ "Dynamic vs Default buffers", "_tuning_memory_resources.html#DynamicVsDefaultBuffers", null ],
          [ "Tweaking default memory consumption by VaoManager", "_tuning_memory_resources.html#TweakingVaoManager", [
            [ "Vulkan and <tt>TEXTURES_OPTIMAL</tt>", "_tuning_memory_resources.html#autotoc_md78", null ]
          ] ]
        ] ]
      ] ],
      [ "Ogre Next Samples (Feature demonstrations)", "_samples.html", [
        [ "Showcase: Forward3D", "_samples.html#forward3d", null ],
        [ "Showcase: HDR", "_samples.html#hdr", null ],
        [ "Showcase: HDR/SMAA", "_samples.html#hdrsmaa", null ],
        [ "Showcase: PBS Materials", "_samples.html#pbsmaterials", null ],
        [ "Showcase: Post Processing", "_samples.html#postprocessing", null ],
        [ "API Usage: Animation tag points", "_samples.html#animationtagpoints", null ],
        [ "API Usage: Area Light Approximation", "_samples.html#arealighapprox", null ],
        [ "API Usage: Custom Renderable", "_samples.html#customrenderable", null ],
        [ "API Usage: Decals", "_samples.html#decals", null ],
        [ "API Usage: Dynamic Geometry", "_samples.html#dynamicgeometry", null ],
        [ "API Usage: IES Photometric Profiles", "_samples.html#iesprofiles", null ],
        [ "API Usage: Shared Skeleton", "_samples.html#sharedskeleton", null ],
        [ "API Usage: Instanced Stereo", "_samples.html#instancedstero", null ],
        [ "API Usage: Instant Radiosity", "_samples.html#instantradiosity", null ],
        [ "API Usage: Local Reflections Using Parallax Corrected Cubemaps", "_samples.html#localcubemaps", null ],
        [ "API Usage: Local Reflections Using Parallax Corrected Cubemaps With Manual Probes", "_samples.html#localcubemapsmp", null ],
        [ "API Usage: Automatic LOD Generation", "_samples.html#autolod", null ],
        [ "API Usage: Morph Animations", "_samples.html#morphanimation", null ],
        [ "API Usage: Automatically Placed Parallax Corrected Cubemap Probes Via PccPerPixelGridPlacement", "_samples.html#autopcc", null ],
        [ "API Usage: Planar Reflections", "_samples.html#planarreflections", null ],
        [ "API Usage: Refractions", "_samples.html#refractions", null ],
        [ "API Usage: SceneFormat Export / Import Sample", "_samples.html#sceneformat", null ],
        [ "API Usage: Screen Space Reflections", "_samples.html#ssreflections", null ],
        [ "API Usage: Shadow Map Debugging", "_samples.html#shadowdebug", null ],
        [ "API Usage: Shadow Map From Code", "_samples.html#shadowfromcode", null ],
        [ "API Usage: Static Shadow Map", "_samples.html#staticshadowmap", null ],
        [ "API Usage: Stencil Test", "_samples.html#stenciltest", null ],
        [ "API Usage: Stereo Rendering", "_samples.html#stereorendering", null ],
        [ "API Usage: Updating Decals And Area Lights' Textures", "_samples.html#updatedecal", null ],
        [ "API Usage: Ogre V1 Interfaces", "_samples.html#v1interface", null ],
        [ "API Usage: Ogre Next Manual Object", "_samples.html#onmanualobject", null ],
        [ "API Usage: Ogre Next V2 Meshes", "_samples.html#v2Mesh", null ],
        [ "Tutorial: Tutorial 00 - Basic", "_samples.html#tutorial00", null ],
        [ "Tutorial: Tutorial 01 - Initialisation", "_samples.html#tutorial01", null ],
        [ "Tutorial: Tutorial 02 - Variable Framerate", "_samples.html#tutorial02", null ],
        [ "Tutorial: Tutorial 03 - Deterministic Loop", "_samples.html#tutorial03", null ],
        [ "Tutorial: Tutorial 04 - Interpolation Loop", "_samples.html#tutorial04", null ],
        [ "Tutorial: Tutorial 05 - Multithreading Basics", "_samples.html#tutorial05", null ],
        [ "Tutorial: Tutorial 06 - Multithreading", "_samples.html#tutorial06", null ],
        [ "Tutorial: Compute 01 - UAV Textures", "_samples.html#compute01", null ],
        [ "Tutorial: Compute 02 - UAV Buffers", "_samples.html#compute02", null ],
        [ "Tutorial: Distortion", "_samples.html#tut_distortion", null ],
        [ "Tutorial: Dynamic Cube Map", "_samples.html#dyncubemap", null ],
        [ "Tutorial: EGL Headless", "_samples.html#eglheadless", null ],
        [ "Tutorial: Open VR", "_samples.html#openVR", null ],
        [ "Tutorial: Reconstructing Position From Depth", "_samples.html#reconpfromd", null ],
        [ "Tutorial: Rendering Sky As A Postprocess With A Single Shader", "_samples.html#skypost", null ],
        [ "Tutorial: SMAA", "_samples.html#SMAA", null ],
        [ "Tutorial: SSAO", "_samples.html#ssao", null ],
        [ "Tutorial: Terra Terrain", "_samples.html#terrain", null ],
        [ "Tutorial: Texture Baking", "_samples.html#texturebaking", null ],
        [ "Tutorial: UAV Setup 1 Example", "_samples.html#uav1", null ],
        [ "Tutorial: UAV Setup 2 Example", "_samples.html#uav2", null ]
      ] ],
      [ "Plugins", "_plugins.html", [
        [ "ParticleFX2 / Particle System 2 Documentation", "_particle_system2.html", [
          [ "Reasons to use ParticleFX2", "_particle_system2.html#ParticleSystem2ReasonsPFX2", null ],
          [ "Reasons not to use ParticleFX2", "_particle_system2.html#ParticleSystem2ReasonsNotPFX2", null ],
          [ "Differences with ParticleFX2", "_particle_system2.html#ParticleSystem2DiffWithPFX2", [
            [ "Distance to Camera", "_particle_system2.html#ParticleSystem2DistToCamera", null ]
          ] ],
          [ "Using OIT (Order Independent Transparency)", "_particle_system2.html#ParticleSystem2Oit", [
            [ "Alpha Hashing: Blue Noise vs White Noise", "_particle_system2.html#AlphaHashingBlueNoiseSetup", null ]
          ] ],
          [ "Thread Safe RandomValueProvider", "_particle_system2.html#autotoc_md79", null ],
          [ "New settings", "_particle_system2.html#autotoc_md80", null ]
        ] ],
        [ "Terra System", "_terra_system.html", [
          [ "Vertex-bufferless rendering", "_terra_system.html#autotoc_md81", null ],
          [ "Vertex Trick in Terra", "_terra_system.html#autotoc_md82", null ],
          [ "Terra cells", "_terra_system.html#autotoc_md83", [
            [ "First layer, the 4x4 block", "_terra_system.html#autotoc_md84", null ],
            [ "Outer layers", "_terra_system.html#autotoc_md85", null ]
          ] ],
          [ "Skirts", "_terra_system.html#autotoc_md86", null ],
          [ "Shadows", "_terra_system.html#autotoc_md87", null ],
          [ "Shading", "_terra_system.html#autotoc_md88", null ],
          [ "Why is it not a component?", "_terra_system.html#autotoc_md89", null ]
        ] ]
      ] ],
      [ "Migrating Series", "_migrating_series.html", [
        [ "Migrating from 2.1 to 2.2", "_migrating_21_to_22.html", [
          [ "What's new in Ogre 2.2", "_ogre22_changes.html", [
            [ "Load Store semantics", "_ogre22_changes.html#Ogre22LoadStoreSemantics", [
              [ "Now that we’ve explained how TBDRs work, we can explain load and store actions", "_ogre22_changes.html#autotoc_md23", null ]
            ] ],
            [ "More control over MSAA", "_ogre22_changes.html#autotoc_md24", null ],
            [ "Porting to Ogre 2.2 from 2.1", "_ogre22_changes.html#autotoc_md25", [
              [ "PixelFormats", "_ogre22_changes.html#autotoc_md26", [
                [ "Common pixel format equivalencies", "_ogre22_changes.html#autotoc_md27", null ]
              ] ],
              [ "Useful code snippets", "_ogre22_changes.html#autotoc_md28", [
                [ "Create a TextureGpu based on a file", "_ogre22_changes.html#autotoc_md29", null ],
                [ "Create a TextureGpu based that you manually fill", "_ogre22_changes.html#autotoc_md30", null ],
                [ "Uploading data to a TextureGpu", "_ogre22_changes.html#autotoc_md31", null ],
                [ "Upload streaming", "_ogre22_changes.html#autotoc_md32", null ],
                [ "Downloading data from TextureGpu into CPU", "_ogre22_changes.html#autotoc_md33", null ],
                [ "Downloading streaming", "_ogre22_changes.html#autotoc_md34", null ]
              ] ]
            ] ],
            [ "Difference between depth, numSlices and depthOrSlices", "_ogre22_changes.html#autotoc_md35", null ],
            [ "Memory layout of textures and images", "_ogre22_changes.html#autotoc_md36", null ],
            [ "Troubleshooting errors", "_ogre22_changes.html#autotoc_md37", null ],
            [ "RenderPassDescriptors", "_ogre22_changes.html#autotoc_md38", null ],
            [ "DescriptorSetTexture & co.", "_ogre22_changes.html#autotoc_md39", null ],
            [ "Does 2.2 interoperate well with the HLMS texture arrays?", "_ogre22_changes.html#autotoc_md40", null ],
            [ "Hlms porting", "_ogre22_changes.html#autotoc_md41", null ],
            [ "Things to watch out when porting", "_ogre22_changes.html#autotoc_md42", null ]
          ] ]
        ] ],
        [ "Migrating from 2.2 to 2.3", "_migrating_22_to_23.html", [
          [ "What's new in Ogre 2.3", "_ogre23_changes.html", [
            [ "Switch importV1 to createByImportingV1", "_ogre23_changes.html#autotoc_md43", null ],
            [ "Shadow's Normal Offset Bias", "_ogre23_changes.html#autotoc_md44", null ],
            [ "Unlit vertex and pixel shaders unified", "_ogre23_changes.html#autotoc_md45", null ],
            [ "Added HlmsMacroblock::mDepthClamp", "_ogre23_changes.html#autotoc_md46", null ],
            [ "Added shadow pancaking", "_ogre23_changes.html#autotoc_md47", null ],
            [ "PluginOptional", "_ogre23_changes.html#autotoc_md48", null ],
            [ "Other relevant information when porting", "_ogre23_changes.html#autotoc_md49", [
              [ "Do not call notifyDataIsReady more than needed", "_ogre23_changes.html#autotoc_md50", null ],
              [ "Global changes for Vulkan compatibility:", "_ogre23_changes.html#autotoc_md51", null ]
            ] ]
          ] ]
        ] ],
        [ "Migrating from 2.3 to 3.0", "_migrating_23_to_30.html", [
          [ "Resolving Merge Conflicts in Ogre-Next 3.0", "_resolving_merge_conflicts30.html", [
            [ "Notes:", "_resolving_merge_conflicts30.html#autotoc_md76", null ],
            [ "Batch Script", "_resolving_merge_conflicts30.html#autotoc_md77", null ]
          ] ],
          [ "What's new in Ogre-Next 3.0", "_ogre30_changes.html", [
            [ "Ogre to OgreNext name migration", "_ogre30_changes.html#autotoc_md52", null ],
            [ "PBS Changes in 3.0", "_ogre30_changes.html#autotoc_md53", null ],
            [ "Hlms Shader piece changes", "_ogre30_changes.html#autotoc_md54", null ],
            [ "AbiCookie", "_ogre30_changes.html#autotoc_md55", null ],
            [ "Move to C++11 and general cleanup", "_ogre30_changes.html#autotoc_md56", null ]
          ] ],
          [ "PBR / PBS Changes in 3.0", "_p_b_s_changes_in30.html", [
            [ "Short version", "_p_b_s_changes_in30.html#autotoc_md63", null ],
            [ "Long version", "_p_b_s_changes_in30.html#autotoc_md64", [
              [ "Direct Lighting", "_p_b_s_changes_in30.html#autotoc_md65", [
                [ "Fresnel Diffuse is no longer considered", "_p_b_s_changes_in30.html#autotoc_md66", [
                  [ "Raffaele's comments:", "_p_b_s_changes_in30.html#autotoc_md67", null ],
                  [ "Default-enable to diffuse fresnel", "_p_b_s_changes_in30.html#autotoc_md68", null ]
                ] ],
                [ "Geometric Term change", "_p_b_s_changes_in30.html#autotoc_md69", null ],
                [ "Metalness change", "_p_b_s_changes_in30.html#autotoc_md70", null ]
              ] ],
              [ "IBL", "_p_b_s_changes_in30.html#autotoc_md71", [
                [ "IBL Diffuse", "_p_b_s_changes_in30.html#autotoc_md72", [
                  [ "Multiplication by PI", "_p_b_s_changes_in30.html#autotoc_md73", null ]
                ] ],
                [ "IBL Specular", "_p_b_s_changes_in30.html#autotoc_md74", null ]
              ] ]
            ] ],
            [ "Hemisphere Ambient Lighting changes", "_p_b_s_changes_in30.html#autotoc_md75", null ]
          ] ]
        ] ],
        [ "Migrating from 3.0 to 4.0", "_migrating_30_to_40.html", [
          [ "What's new in Ogre-Next 4.0", "_ogre40_changes.html", [
            [ "Threaded Hlms", "_ogre40_changes.html#autotoc_md57", null ],
            [ "Hlms implementations and listeners", "_ogre40_changes.html#autotoc_md58", [
              [ "Porting tips (from <= 3.0)", "_ogre40_changes.html#Ogre40Changes_PortingTips", null ]
            ] ],
            [ "Compositor Script changes", "_ogre40_changes.html#autotoc_md59", null ],
            [ "New initialization step", "_ogre40_changes.html#autotoc_md60", null ],
            [ "HlmsUnlit changes", "_ogre40_changes.html#autotoc_md61", null ],
            [ "Header renames", "_ogre40_changes.html#autotoc_md62", null ]
          ] ]
        ] ]
      ] ],
      [ "Deprecation Plan", "_deprecation_plan.html", [
        [ "CMake Option", "_deprecation_plan.html#autotoc_md21", null ],
        [ "Functions marked with <tt>OGRE_DEPRECATED_VER</tt>", "_deprecation_plan.html#autotoc_md22", null ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Properties", "functions_prop.html", null ],
        [ "Related Symbols", "functions_rela.html", "functions_rela" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_android_2_ogre_config_dialog_imp_8h.html",
"_ogre_billboard_chain_8h.html",
"_ogre_d3_d11_legacy_s_d_k_emulation_8h.html#a4ce028ca5138a46260628a132207f2aa",
"_ogre_g_l_e_s2_prerequisites_8h.html#a4c9d616356e30e42fa669b72a7860abc",
"_ogre_id_string_8h.html#af5d7e0eaf474c82bfa2bf21d0c624d20",
"_ogre_overlay_prerequisites_8h.html#a6fc186106cde55e3a7b867798fe28e89",
"_ogre_render_system_8h.html",
"_ogre_texture_gpu_manager_8h.html#a3a978c834ce00930123468c9a64047b4a56f1a0ff4bdff9b91a463a7f6b10b02d",
"_ogre_vertex_elements_8h.html#a0a62b3f2ede8992ff365bb013a8bc00daabddc327dc0835e75b7622ee81e7f527",
"_ogre_x11_e_g_l_support_8h.html#af5c3b39d44706b903a2c61448a84f132",
"azdo.html#VaoMaanger",
"class_ogre_1_1_archive_manager.html#a912729e3f6383f3883ffd361bca0464f",
"class_ogre_1_1_array_memory_manager.html#a8c128b8ba585ecb04205e81d2aa2c341",
"class_ogre_1_1_array_vector2.html#a77a66a077477b80c99606deeca6b6748",
"class_ogre_1_1_array_vector3.html#aa234d85338fdb34ec62d8abd510efedf",
"class_ogre_1_1_async_texture_ticket.html#a89bea6111361e89646624550ea24c83a",
"class_ogre_1_1_axis_aligned_box.html#a6388a911df973ae067d9751ca74a57c4",
"class_ogre_1_1_box_emitter_factory2.html",
"class_ogre_1_1_camera.html#a6cb8fad5b8e61a4b3fe80146c6d71928",
"class_ogre_1_1_colour_fader_affector2.html#a46710cc716923965fc31d3c9dc510ece",
"class_ogre_1_1_colour_image_affector2.html#a0af64826c76804aca64aa964b81ed8d8",
"class_ogre_1_1_compositor_load_action_translator.html#a8e1eb800363a19d28a7796312d78fc31",
"class_ogre_1_1_compositor_pass_ibl_specular.html#a497cf40b22a9cdd96b28163c4d732823",
"class_ogre_1_1_compositor_target_def.html#abe6a03c3d3be1fd9ec2fb778f18b104f",
"class_ogre_1_1_controller_manager.html#aa27ced49b9021563ef663cebdd320191",
"class_ogre_1_1_d3_d11_buffer_interface_base.html#a85fb8feb2209c67459ff235c6082573e",
"class_ogre_1_1_d3_d11_h_l_s_l_program.html#ad0e483d3b547f413c40e5701abbe0860",
"class_ogre_1_1_d3_d11_render_system.html#a46b2811434f8e6847acdc018cc1f48ce",
"class_ogre_1_1_d3_d11_stereo_driver_n_v_i_d_i_a.html#a22ed83ac8175af0ea3310b47fdee833d",
"class_ogre_1_1_d3_d11_window.html#a766fc30be7bb699389532945f13dc2d3",
"class_ogre_1_1_default_work_queue_base.html#a1a8e6d759f17f283aec248d83e7f8f6d",
"class_ogre_1_1_dual_quaternion.html#a433f730b581493a9358c5b542a0bffd2",
"class_ogre_1_1_egl_p_buffer_support.html#a8ea937e17888a28c251d85dd198f63e6",
"class_ogre_1_1_emscripten_e_g_l_context.html#a62d8dccf7e13e2b546eff68d4402c4df",
"class_ogre_1_1_file_system_archive_factory.html#a815bf2c7933b84eb0f554e86403af067",
"class_ogre_1_1_g_l3_plus_async_texture_ticket.html#a0068832fd7a7e7978644037ba561e26b",
"class_ogre_1_1_g_l3_plus_render_system.html#a1257a2c48a25e4218988346501020bb8",
"class_ogre_1_1_g_l3_plus_staging_buffer.html#a3b2d417cb3ef65ba0f9733ddff3767bd",
"class_ogre_1_1_g_l3_plus_vao_manager.html#a9d7b3b0cab487f7cc1d44426f276c370",
"class_ogre_1_1_g_l_e_s2_hardware_occlusion_query.html#a28654e4a823e22abb31cc32d4324b99c",
"class_ogre_1_1_g_l_e_s2_render_system.html#aa6bfad53622bb5f865871a3918bb4fac",
"class_ogre_1_1_g_l_s_l_e_s_link_program.html#a735d86193053d61f6277fabf48be2b23",
"class_ogre_1_1_g_l_s_l_program.html#ac9e119d25b6c3b8c9d6ff07df71c9967",
"class_ogre_1_1_g_l_x_utils.html#ad702f5c059eb96eb281f010dfd158a5a",
"class_ogre_1_1_gpu_program_parameters.html#a155c886f15e0c10d2c33c224f0d43ce3a7ba19d7807670b428dffa18f92a7b60a",
"class_ogre_1_1_gpu_shared_parameters.html#a1765f9158008bcb4ca0f7ca4c97fa50e",
"class_ogre_1_1_hlms.html#aa0365b8787bb8b348fb7b715c056954fa796424c11f74d0fae5691990af64f4fb",
"class_ogre_1_1_hlms_low_level.html#a2fd2517b15984c75e877d20d701ac648",
"class_ogre_1_1_hlms_unlit_datablock.html#a155adc41b23793c2361190a2c444a1e2",
"class_ogre_1_1_instant_radiosity.html#a1dcaa208b809026bbc318db0bf6eff59",
"class_ogre_1_1_iterator_wrapper.html#a72bb580445cd26d668677e159b692d4f",
"class_ogre_1_1_linear_force_affector.html#a1483dbcb861930fca02a2649345c231c",
"class_ogre_1_1_lod_strategy.html#a667bd94e7c15e2b5d5692146d22cd1f8",
"class_ogre_1_1_manual_object.html#a7624900911edd20d578f6061e9f2f633",
"class_ogre_1_1_math.html#a38414e20b7863022fd260770e7b1ab5b",
"class_ogre_1_1_matrix3.html#adca9be180377c51c05a608df576a8e86",
"class_ogre_1_1_metal_buffer_interface.html#af75c8ccf266201fb2572500ad965bd05",
"class_ogre_1_1_metal_render_pass_descriptor.html#a22e20dbfe209171b363b5329c8d619f6",
"class_ogre_1_1_metal_staging_buffer.html#ae3ed88ef87bcfbb383fd6e8e5e8773c3",
"class_ogre_1_1_movable_object.html#a28b12f8d0fd7c9da7fcd1e9806dd8064",
"class_ogre_1_1_n_u_l_l_const_buffer_packed.html#af8e0948bb27dc0e3bb4f8577f9159050",
"class_ogre_1_1_n_u_l_l_uav_buffer_packed.html#a95389fdc42c77f89a4954eb0fee4175b",
"class_ogre_1_1_node.html#af73c4989864f0066125b37bb7a93731f",
"class_ogre_1_1_p_s_s_m_shadow_camera_setup.html#adb420010a1fb38c2effabc47ff37b3f5",
"class_ogre_1_1_paged_world_section_factory.html",
"class_ogre_1_1_particle.html#ac9741b2623435c312819c9d3903c915e",
"class_ogre_1_1_particle_system2_factory.html#a73713b2aa209081631f5fe887c6d0808",
"class_ogre_1_1_particle_system_renderer.html#acedd9af6338bc40603a571333be5f5f9",
"class_ogre_1_1_pixel_format_gpu_utils.html#a46b7c0bea73c1fb67a81f7fa0636283b",
"class_ogre_1_1_process_resource_name_script_compiler_event.html#a3c4bdfcd9e3758d5281dfe0ed7d8e5fc",
"class_ogre_1_1_radian.html#ab8ee9ee512b74502f50703100de37374",
"class_ogre_1_1_render_system.html#a0be74d0a03a241caeff54bb97ee3e584",
"class_ogre_1_1_render_system_capabilities.html#a9711b0aac1cd00105a18d08546a91bef",
"class_ogre_1_1_resource_1_1_listener.html#a7951abdcff85efd6cf58a49d94442f67",
"class_ogre_1_1_root.html#a23636c3da47e220edfd4d5ef8515dc94",
"class_ogre_1_1_s_t_l_allocator.html#a5d26e2252c837f0620a51c075aeb6d56",
"class_ogre_1_1_scene_manager.html#a1f068bf536a1b910aa5cd02e55165f35",
"class_ogre_1_1_scene_manager.html#a87acee4fb506a3dc869c674e6a2f19c8",
"class_ogre_1_1_scene_manager.html#af669a83b9010d5cb88c86084a28fd23e",
"class_ogre_1_1_script_compiler.html#ab2bff7a6427fde76c9cf9137d4eaeac5",
"class_ogre_1_1_skeleton_animation_def.html#ae0ba9ff97396a703e62aac5099e0530c",
"class_ogre_1_1_small_vector_template_common.html#a922c12bc5de4cf0fee5c101919fecc94",
"class_ogre_1_1_stream_serialiser.html#a5f557c549a65a20e76e605f9bf9fe4c9",
"class_ogre_1_1_technique.html#a98091dbc9cb06b40138458537c36e3ed",
"class_ogre_1_1_texture_gpu.html#a8993f62ca86dc5f0e92b1943b247889b",
"class_ogre_1_1_texture_unit_state.html#aa9ab8b2feef0c89ccb4559c4496a33ab",
"class_ogre_1_1_vao_manager.html#a21be4e3d6b7ad0490c59eb9db1cdcdf7",
"class_ogre_1_1_vct_voxelizer.html#a0d399e3016b11ce9f42e727939e3f026",
"class_ogre_1_1_vector4.html#ae4417c4a3d52ee6fafd4a9103343958c",
"class_ogre_1_1_volume_1_1_chunk.html#aa52c1f2c5b5b39669eaee2bc11668a77",
"class_ogre_1_1_volume_1_1_source.html#aba96b1aef0b798535549600b9563560b",
"class_ogre_1_1_vulkan_delayed__vk_destroy_shader_module.html#a991e0a0e6562ac12c47b5cc796752bbf",
"class_ogre_1_1_vulkan_program.html#a1c3d9ae0cdbdf704191d6bfbd04e9c63",
"class_ogre_1_1_vulkan_render_system.html#a4116bee16a25b8af6185fda7408545c5",
"class_ogre_1_1_vulkan_staging_buffer.html#a06b3928d00037b776f2adcab1964adac",
"class_ogre_1_1_vulkan_vao_manager.html#ab58aa47c8a54e57fecd9d7e93b6651a6ad1e8da73c7fc5e3ce7de33801b73f247",
"class_ogre_1_1_win32_context.html#a02724e124a37133de86907ad3c4a65e9",
"class_ogre_1_1_work_queue_1_1_request_handler.html#a8e0e8cf40a6e47136aac754e15f08974",
"class_ogre_1_1v1_1_1_animation_state_set.html#a4d83a50930ab187d58e9c4f3e3e53841",
"class_ogre_1_1v1_1_1_billboard_set.html#af8dcf1e247d16a26427a7230bc89bd0c",
"class_ogre_1_1v1_1_1_entity.html#a465a2b36e240a90b0e89c36db69c885a",
"class_ogre_1_1v1_1_1_g_l_e_s2_default_hardware_buffer_manager.html#a05b048cb86b74dca56afbbd2240d21f2",
"class_ogre_1_1v1_1_1_hardware_buffer_manager.html#a3d052ba43c323137194e3df2144e6d9a",
"class_ogre_1_1v1_1_1_mesh.html#a3704c9124ac56ed06c1b9d076231d931",
"class_ogre_1_1v1_1_1_node_animation_track.html",
"class_ogre_1_1v1_1_1_old_skeleton_instance.html#a0e54c74f56680830421c3f54485fd82b",
"class_ogre_1_1v1_1_1_overlay_manager.html#a55e1986e31a1bebee1db2c14dde578c4",
"class_ogre_1_1v1_1_1_skeleton.html#ac95e4733ecfe46f42a27011c0f9544c0",
"class_ogre_1_1v1_1_1_vertex_animation_track.html#a13c5c793d317d46adfbe7712d7eeb323",
"class_ogre_1_1v1_1_1_wire_bounding_box.html#a2189c0ee19612a7ae7382fda94aeec5f",
"dir_a612293e292439edfb7592851fd229f7.html",
"group___animation.html#gga5b37bdf2f67384dbd81643164545f7bdaacf798731cab07af608a45eb331faa01",
"group___general.html#gga22a20f11c008a0d9b677fc2635922cfea025771347fabdae9bb5db80f997ced2c",
"group___general.html#gga30d5439896c2a2362024ec689b1e181caaccc6116d00d1d35e4bf91eae922c5fe",
"group___image.html#ga05b16bf23239e24a3fe5c2ee7b252209",
"group___image.html#gga71f09fe41a1db41186262f1aa5814a18aebc0969a0648ce2ba66a551e1d2bb0d1",
"group___optional.html#ga78f9813d951ab38b1ebbae6b0f807df6",
"group___resources.html#ga1e2e9ee3e2ee22a4e792952239d38821",
"hlmspbsdatablockref.html#dbParamBlendBlock",
"namespace_ogre.html#a769d41c00dac951b9c2162c6c1a73573a464139a1080b831143c015fb3b7b8aca",
"namespace_ogre_1_1_particle_rotation_type.html#a8dc71a0e7995e681a2b4096adbb12b5daedb1d971c0f9f5d43373fa82b2685236",
"namespacemembers_eval_i.html",
"struct_ogre_1_1_bone_transform.html#ac71bce37df3f8cc357de286ef0fd41d8",
"struct_ogre_1_1_compute_property.html#a4acf7638ac6d00b185f01833a8624673",
"struct_ogre_1_1_descriptor_set_uav_1_1_buffer_slot.html#a43f49016570e3a2813d8c011a39b0ea7",
"struct_ogre_1_1_g_l_e_s2_vao_manager_1_1_stride_changer.html#abc273c69383874800e6e7437aae2f761",
"struct_ogre_1_1_hlms_blendblock.html#a81bbefc83b818e89da47b4cba0bea28e",
"struct_ogre_1_1_key_frame_rig.html#a19259e95a79790ae9df29b28b85f6d20",
"struct_ogre_1_1_lod_level.html#a39e40bdcbeea13357ace7e38e53446e3afe36984fdb5b516b5bc79f53d3e48699",
"struct_ogre_1_1_object_data.html#abec80ae2e06993a18dfc3824815d059f",
"struct_ogre_1_1_render_pass_target_base.html#a55f1b8b9b1a915ce34b513afba0f0a9f",
"struct_ogre_1_1_skeleton_def_1_1_depth_level_info.html#a3fe19361b59b2bd4371ed187b0192ffe",
"struct_ogre_1_1_unlit_property.html#a14a597273ad4f18cd2e30fd173cdfb96",
"struct_ogre_1_1_vertex_array_object.html",
"struct_ogre_1_1_volume_1_1_vertex.html#aa6e33996a0561273423e609e79d46a21",
"struct_ogre_1_1_vulkan_global_binding_table.html#a692fc06fc3b7890bb6b91b5d470b0599",
"struct_ogre_1_1uint4.html#a4794e373594483c694585942a2d2e82b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';