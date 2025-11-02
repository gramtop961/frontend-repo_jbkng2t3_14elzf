import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark veil with subtle motion */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ x: -80, y: -40, opacity: 0.55 }}
        animate={{ x: 80, y: 40, opacity: 0.6 }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(800px 500px at 20% 20%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.05) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Soft edge fade so content remains legible */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-36 sm:pt-44 pb-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
              <p className="text-xs sm:text-sm text-white/80">Vibrant color • Precision cuts • Healthy hair</p>
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Love your hair.
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-300">
                Every single day.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/80">
              A poppy, modern salon experience with rich, fluid visuals. Sit back, relax,
              and let our stylists craft looks that turn heads.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-xl bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 font-medium shadow-lg shadow-pink-500/30 transition"
              >
                Book an appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-medium backdrop-blur-xl border border-white/10 transition"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
