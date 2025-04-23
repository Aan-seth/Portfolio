'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Try Spotify – Music Streaming UI Clone",
      description: "A modern and responsive Spotify-inspired music player UI built with Next.js and Tailwind CSS. It mimics core Spotify features like sidebar navigation, album artwork, and playlist layout with a sleek dark theme. Deployed seamlessly with Vercel.",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      liveLink: "https://try-spotify.vercel.app/",
      githubLink: "https://github.com/Aan-seth/Try_Spotify",
      image: "/Try-spotify.png"
    },
    {
      title: "Show Me Weather",
      description: "A sleek and responsive weather web app that shows real-time weather updates using OpenWeatherMap API.",
      techStack: ["React", "Tailwind CSS", "OpenWeatherMap API", "Vercel"],
      liveLink: "https://show-me-weather.vercel.app/",
      githubLink: "https://github.com/Aan-seth/Show-me-weather",
      image: "/Weather app.jpg"
    },
    {
      title: "AI Shell Agent – Terminal Command Assistant",
      description: "A command-line AI assistant powered by Mistral-7B-Instruct via Hugging Face. This tool intelligently interprets user goals and generates optimized shell commands. It avoids redundant installs, filters unsafe suggestions, and supports direct execution with user confirmation. Designed to enhance productivity for developers working in terminal environments.",
      techStack: ["Python", "Transformers", "Hugging Face", "Mistral-7B", "Shell"],
      liveLink: "https://drive.google.com/file/d/1G00k6OksyepIjtExjkmPHSa5-_LFHxmx/view?usp=drivesdk",
      githubLink: "https://github.com/Aan-seth/Ai_agent",
      image: "/Ai agent.jpg"
    },
    {
      title: "Password Generator – Secure & Customizable",
      description: "A sleek and minimal password generator web app that lets users create strong, secure passwords tailored to their needs. Built with React and Tailwind CSS, it offers options to include uppercase, lowercase, numbers, and symbols, along with a slider to control password length. User-friendly and responsive UI, deployed on Vercel.",
      techStack: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "https://password-generator-xi-ashen-91.vercel.app/",
      githubLink: "https://github.com/Aan-seth/Password_Generator",
      image: "/password generator.jpg" // make sure to add a screenshot at public/images/password-generator.png
    }
    ,
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
                className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.35)]"
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
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-snug line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    {project.techStack && (
                      <ul className="flex flex-wrap gap-1 text-xs items-center justify-center text-gray-500 dark:text-gray-400 mb-3">
                        {project.techStack.map((tech, idx) => (
                          <li key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-between gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 dark:text-pink-400 font-medium border-b border-transparent hover:border-pink-500 transition"
                        >
                         Demo →
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-black dark:hover:text-white transition"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scroll('left')}
              className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-lg"
            >
              <ChevronLeft />
            </button>
          </div>
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
