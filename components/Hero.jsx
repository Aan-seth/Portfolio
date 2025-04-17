'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="px-6 py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Aanchal 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
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
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-600 blur-[120px] opacity-30 z-0" />

          {/* Floating Blobs */}
          <div className="absolute top-[-60px] right-[-60px] w-28 h-28 bg-pink-500/40 rounded-full blur-3xl z-0 animate-pulse" />
          <div className="absolute bottom-[-60px] left-[-40px] w-24 h-24 bg-purple-500/40 rounded-full blur-3xl z-0 animate-pulse" />

          {/* Glassy Card */}
          <div className="relative z-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-3">
            <Image
              src="/Profile_pic.png"
              alt="Aanchal Hero"
              width={380}
              height={380}
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
