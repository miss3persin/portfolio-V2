"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion";

export const Card = ({ title, imgSrc, demoLink, codeLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-52 overflow-hidden border-black rounded-md flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="w-full h-32 bg-white/50 flex items-center justify-center overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Content Section */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="bg-[#F4EEE0] border rounded-b-md border-black overflow-hidden"
      >
        <div className="p-4">
          <div className="font-bold text-center mb-4">
            {title}
          </div>
          <div className="flex justify-between gap-4">
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-black text-[#F4EEE0] rounded-md text-sm">
                DEMO
              </button>
            </Link>
            <Link href={codeLink} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-black text-[#F4EEE0] rounded-md text-sm">
                CODE
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
