'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="px-6 py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Aanchal 👋
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
            A full-stack web developer crafting sleek, responsive UIs and blending tech with creativity.
            Currently exploring AI tools to build intelligent, beautiful products.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-50 dark:hover:bg-pink-900/20 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Profile with Creative Background */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 flex justify-center items-center"
        >
          {/* Soft Gradient Background */}
          <div className="absolute w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] rounded-full bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-600 blur-[100px] opacity-20 z-0" />

          {/* Floating Blobs */}
          <div className="absolute top-[-60px] right-[-60px] w-20 h-20 sm:w-28 sm:h-28 bg-pink-500/30 rounded-full blur-3xl z-0 animate-pulse" />
          <div className="absolute bottom-[-60px] left-[-40px] w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/30 rounded-full blur-3xl z-0 animate-pulse" />

          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full z-0 ring-[3px] ring-white/40 blur-[2px]" />

          {/* Blended Image Card with White Glowing Ring */}
          <div className="relative z-10 rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shadow-xl border border-white/20 bg-white/10 backdrop-blur-md hover:scale-105 transform transition-all">
            {/* Image Container with Glowing Ring Effect */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full h-full absolute rounded-full border-2 border-white/50 blur-[2px] animate-pulse ring-glow" />
            </div>
            <Image
              src="/profile_pic1-removebg-preview.png"
              alt="Aanchal Hero"
              width={380}
              height={380}
              className="w-full h-full object-cover rounded-full mix-blend-soft-light  transition-all hover:rotate-3"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
