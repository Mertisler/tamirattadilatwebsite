'use client';

import { motion } from 'framer-motion';

type ServiceHeroProps = {
  title: string;
  isOther?: boolean;
};

export default function ServiceHero({ title, isOther }: ServiceHeroProps) {
  return (
    <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-pink-300" />
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-40 left-[-20%] top-[-30%]"
          animate={{ x: [0, 120, 0], y: [0, 100, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-30 right-[-15%] bottom-[-20%]"
          animate={{ x: [0, -100, 0], y: [0, -80, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </div>
      <div className="relative z-10 w-full flex items-center justify-center h-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg"
        >
          {isOther ? 'Diğer Ev Aletleri & Genel Arızalar' : title}
        </motion.h1>
      </div>
    </div>
  );
} 