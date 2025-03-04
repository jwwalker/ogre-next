/*
-----------------------------------------------------------------------------
This source file is part of OGRE-Next
(Object-oriented Graphics Rendering Engine)
For the latest info, see http://www.ogre3d.org/

Copyright (c) 2000-2023 Torus Knot Software Ltd

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
#ifndef OgreColourFaderAffectorFX2_H
#define OgreColourFaderAffectorFX2_H

#include "OgreParticleFX2Prerequisites.h"

#include "ParticleSystem/OgreParticleAffector2.h"

namespace Ogre
{
    OGRE_ASSUME_NONNULL_BEGIN

    /** This plugin subclass of ParticleAffector allows you to alter the colour of particles.
    @remarks
        This class supplies the ParticleAffector implementation required to modify the colour of
        particle in mid-flight.
    */
    class _OgreParticleFX2Export ColourFaderAffectorFX2 : public ParticleAffector2
    {
    private:
        /** Command object for red adjust (see ParamCommand).*/
        class _OgrePrivate CmdRedAdjust final : public ParamCommand
        {
        public:
            String doGet( const void *target ) const override;
            void   doSet( void *target, const String &val ) override;
        };

        /** Command object for green adjust (see ParamCommand).*/
        class _OgrePrivate CmdGreenAdjust final : public ParamCommand
        {
        public:
            String doGet( const void *target ) const override;
            void   doSet( void *target, const String &val ) override;
        };

        /** Command object for blue adjust (see ParamCommand).*/
        class _OgrePrivate CmdBlueAdjust final : public ParamCommand
        {
        public:
            String doGet( const void *target ) const override;
            void   doSet( void *target, const String &val ) override;
        };

        /** Command object for alpha adjust (see ParamCommand).*/
        class _OgrePrivate CmdAlphaAdjust final : public ParamCommand
        {
        public:
            String doGet( const void *target ) const override;
            void   doSet( void *target, const String &val ) override;
        };

        /** Command object for setting min/max colour (see ParamCommand).*/
        class _OgrePrivate CmdMinColour final : public ParamCommand
        {
        public:
            String doGet( const void *target ) const override;
            void   doSet( void *target, const String &val ) override;
        };

        /** Command object for setting min/max colour (see ParamCommand).*/
        class _OgrePrivate CmdMaxColour final : public ParamCommand
        {
        public:
            String doGet( const void *target ) const override;
            void   doSet( void *target, const String &val ) override;
        };

        static CmdRedAdjust   msRedCmd;
        static CmdGreenAdjust msGreenCmd;
        static CmdBlueAdjust  msBlueCmd;
        static CmdAlphaAdjust msAlphaCmd;
        static CmdMinColour   msMinColourCmd;
        static CmdMaxColour   msMaxColourCmd;

    protected:
        Vector4 mColourAdj;
        Vector4 mMinColour;
        Vector4 mMaxColour;

    public:
        ColourFaderAffectorFX2();

        void run( ParticleCpuData cpuData, size_t numParticles, ArrayReal timeSinceLast ) const override;

        /** Sets the minimum value to which the particles will be clamped against.
        @param rgba
            RGBA components stored in xyzw.
        */
        void setMinColour( const Vector4 &rgba );

        const Vector4 &getMinColour() const;

        /** Sets the maximum value to which the particles will be clamped against.
        @param rgba
            RGBA components stored in xyzw.
        */
        void setMaxColour( const Vector4 &rgba );

        const Vector4 &getMaxColour() const;

        /** Sets the colour adjustment to be made per second to particles.
        @param red, green, blue, alpha
            Sets the adjustment to be made to each of the colour components per second. These
            values will be added to the colour of all particles every second, scaled over each frame
            for a smooth adjustment.
        */
        void setAdjust( float red, float green, float blue, float alpha = 0.0 );

        /** Sets the red adjustment to be made per second to particles.
        @param red
            The adjustment to be made to the colour component per second. This
            value will be added to the colour of all particles every second, scaled over each frame
            for a smooth adjustment.
        */
        void setRedAdjust( float red );

        /// Gets the red adjustment to be made per second to particles.
        float getRedAdjust() const;

        /** Sets the green adjustment to be made per second to particles.
        @param green
            The adjustment to be made to the colour component per second. This
            value will be added to the colour of all particles every second, scaled over each frame
            for a smooth adjustment.
        */
        void setGreenAdjust( float green );
        /// Gets the green adjustment to be made per second to particles.
        float getGreenAdjust() const;

        /** Sets the blue adjustment to be made per second to particles.
        @param blue
            The adjustment to be made to the colour component per second. This
            value will be added to the colour of all particles every second, scaled over each frame
            for a smooth adjustment.
        */
        void setBlueAdjust( float blue );
        /// Gets the blue adjustment to be made per second to particles.
        float getBlueAdjust() const;

        /** Sets the alpha adjustment to be made per second to particles.
        @param alpha
            The adjustment to be made to the colour component per second. This
            value will be added to the colour of all particles every second, scaled over each frame
            for a smooth adjustment.
        */
        void setAlphaAdjust( float alpha );
        /// Gets the alpha adjustment to be made per second to particles.
        float getAlphaAdjust() const;

        void _cloneFrom( const ParticleAffector2 *original ) override;

        String getType() const override;
    };

    class _OgrePrivate ColourFaderAffectorFX2Factory final : public ParticleAffectorFactory2
    {
        String getName() const override { return "ColourFader"; }

        ParticleAffector2 *createAffector() override
        {
            ParticleAffector2 *p = new ColourFaderAffectorFX2();
            return p;
        }
    };

    OGRE_ASSUME_NONNULL_END
}  // namespace Ogre

#endif
