// components/Contact.jsx
'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0ro06td',
      'template_aatdo1a',
      formRef.current,
      '8wscUpsRri4p_Rwwk'
    ).then(() => {
      setMessage('Message sent successfully!');
      formRef.current.reset();
    }).catch(() => {
      setMessage('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-900 text-center">
      <motion.h2 
        className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p 
        className="text-lg text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
      >
        Have a project idea or just want to say hi? Send me a message!
      </motion.p>

      <form ref={formRef} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
        >
          Send Message
        </button>
      </form>

      {message && <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>}

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://github.com/Aan-seth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
        >
          <FaGithub size={20} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aanchal-seth-1ab0b7225"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
      </div>
    </section>
  );
}
