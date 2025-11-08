"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

const techLogos = [
  { name: "HTML", src: "/images/html.png" },
  { name: "CSS", src: "/images/css.png" },
  { name: "Vite", src: "/images/vite.png" },
  { name: "Javascript", src: "/images/js.png" },
  { name: "TypeScript", src: "/images/typeScript.png" },
  { name: "React", src: "/images/react.png" },
  { name: "Figma", src: "/images/figma.png" },
  { name: "Next", src: "/images/next.png" },
  { name: "Node", src: "/images/node.png" },
  { name: "Tailwind", src: "/images/tailwind.png" },
];

// Animation rotasi lingkaran
const rotating: Variants = {
  idle: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 30, ease: "linear" },
  },
};

export default function AnimationRight() {
  const [isHovered, setIstHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Hanya render di client

  const numLogos = techLogos.length;
  const radius = window.innerWidth < 768 ? 100 : 140;

  return (
    <div
      className="relative w-full h-96 flex items-center justify-center"
      onMouseEnter={() => setIstHovered(true)}
      onMouseLeave={() => setIstHovered(false)}
    >
      <motion.div
        className="absolute w-full h-full"
        variants={rotating}
        animate={isHovered ? "animate" : "idle"}
      >
        {techLogos.map((tech, index) => {
          const angle = (index / numLogos) * 2 * Math.PI;
          const xOffset = radius * Math.cos(angle);
          const yOffset = radius * Math.sin(angle);

          return (
            <div
              key={tech.name}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translate(${xOffset}px, ${yOffset}px)`,
              }}
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={70}
                height={70}
                className="rounded-full shadow-lg p-2 bg-gray-800/70 backdrop-blur-sm border border-white/10"
              />
              <span className="sr-only"></span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
