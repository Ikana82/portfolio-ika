"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

//Animasi
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
    },
  },
};

const fadeInRightColumn: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
      delay: 0.5,
    },
  },
};

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center px-10 md:px-30 bg-gray-950 text-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left */}
        <motion.div
          className="w-full md:w-1/2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Portfolio */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 rounded-full bg-blue-950 px-5 py-2 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <p className="text-sm text-blue-300">
              Frontend Developer & UI/UX Designer
            </p>
            <span className="text-md">✨</span>
          </motion.div>

          {/* Intro */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Hello, I'm Ika
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-md md:text-md"
          >
            I bridge the gap between user-centric design and precise technical
            execution, transforming complex ideas into functional and web
            interfaces.
          </motion.p>

          {/* Call To Action */}
          <motion.div variants={fadeInUp} className="mt-8 flex gap-5">
            <a
              href="/projects"
              className="px-6 py-3 text-sm rounded-lg border border-white/20 hover:bg-white/10 transitior text-gray-200"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="px-6 py-3 text-sm rounded-lg bg-white text-slate-950 hover:bg-gray-300 transition"
            >
              More About Me
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex items-center gap-5"
          >
            {/* Github */}
            <a
              href="https://github.com/Ikana82"
              target="_blank"
              arial-label="Github"
              className="social-link-wrapper"
            >
              <FaGithub className="h-5 w-5" />
              <span className="tooltip">Github</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ikanuraisma"
              target="_blank"
              arial-label="LinkedIn"
              className="social-link-wrapper"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="tooltip">LinkedIn</span>
            </a>
            {/* Behance */}
            <a
              href="https://www.behance.net/gallery/207559529/Increase-Conversion-Transaction-Alodokter-Mobile-Apps"
              target="_blank"
              arial-label="Behance"
              className="social-link-wrapper"
            >
              <FaBehance className="h-5 w-5" />
              <span className="tooltip">Behance</span>
            </a>
            {/* Resume / CV */}
            <a
              href="https://drive.google.com/file/d/18-WZv0RIKrSZHes1lFAT1e6avbrsM2xY/view?usp=sharing"
              target="_blank"
              arial-label="Resume"
              className="social-link-wrapper"
            >
              <IoDocumentTextOutline className="h-5 w-5" />
              <span className="tooltip">Resume / CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center w-full h-90 bg-zinc-800/50 border-white/10 rounded-lg ">
            Animation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
