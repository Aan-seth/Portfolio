'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Try-Spotify',
      description: 'An amazing project built with Next.js and Tailwind CSS.',
      image: '/Try-spotify.png',
      link: 'https://try-spotify.vercel.app/',
    },
    {
      title: 'Project Two',
      description: 'Another fantastic project showcasing creativity and tech.',
      image: '/images/project2.png',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A cutting-edge project incorporating AI and advanced features.',
      image: '/images/project3.png',
      link: '#',
    },
    {
      title: 'Project Four',
      description: 'An innovative project built with React and Node.js.',
      image: '/images/project4.png',
      link: '#',
    },
    {
      title: 'Project Five',
      description: 'A top-notch project that uses advanced web technologies.',
      image: '/images/project5.png',
      link: '#',
    },
    {
      title: 'Project Six',
      description: 'A creative and modern web application.',
      image: '/images/project6.png',
      link: '#',
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="px-4 py-20 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-5">
          My Projects
        </h2>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Here are a few projects I’ve worked on, blending creativity with modern web technologies.
        </p>

        <div className="relative group p-3">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth space-x-4 px-6 py-8 scrollbar-hide snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden max-h-[420px] hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.35)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4 sm:p-5 h-[calc(100%-144px)] flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-snug">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-pink-400 font-medium border-b border-transparent hover:border-pink-500 transition"
                  >
                    Demo →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left scroll button */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scroll('left')}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-lg"
            >
              <ChevronLeft />
            </button>
          </div>

          {/* Right scroll button */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scroll('right')}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-lg"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
