'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one, an amazing project built with Next.js and Tailwind CSS.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Description of project two, another fantastic project showcasing creativity and tech.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Description of project three, a cutting-edge project incorporating AI and advanced features.',
      link: '#',
    },
    {
      title: 'Project Four',
      description: 'Description of project four, an innovative project built with React and Node.js.',
      link: '#',
    },
    {
      title: 'Project Five',
      description: 'Description of project five, a top-notch project that uses advanced web technologies.',
      link: '#',
    },
    {
      title: 'Project Six',
      description: 'Description of project six, a creative and modern web application.',
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
      className="px-6 py-24 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Here are a few projects I’ve worked on, blending creativity with modern web technologies.
        </p>

        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-h-[400px] transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_6px_rgba(236,72,153,0.35)]"
              >
                <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-block text-pink-600 dark:text-pink-400 font-semibold border-b-2 border-transparent hover:border-pink-600 dark:hover:border-pink-400 transition"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left Button */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scroll('left')}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-lg"
            >
              <ChevronLeft />
            </button>
          </div>

          {/* Right Button */}
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
