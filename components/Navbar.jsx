'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center overflow-hidden">
        
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold text-pink-600 dark:text-pink-400">
          Aanchal.dev
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-300">
          <Link href="#about" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
