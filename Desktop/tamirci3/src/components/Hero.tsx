'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Modern gradient ve glassmorphism arka plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-pink-100" />
        <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" fillOpacity="0.7" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,600L1380,600C1320,600,1200,600,1080,600C960,600,840,600,720,600C600,600,480,600,360,600C240,600,120,600,60,600L0,600Z" />
        </svg>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-white/40 rounded-3xl blur-2xl" style={{filter:'blur(80px)'}} />
      </div>
      {/* İçerik */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 drop-shadow-lg text-center"
        >
          Yılmaz Teknik - Samed Yılmaz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-blue-700 mb-2 text-center"
        >
          “Ev Aletlerinizde Güvenin Adresi”
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-2 text-center"
        >
          “Arıza mı var? Hemen Çözelim!”
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-6 text-center"
        >
          “Hızlı, Güvenilir, Uygun Fiyatlı Servis”
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl mb-8 text-gray-700 text-center"
        >
          <span className="font-semibold">Usta: Samed Yılmaz</span> &nbsp;|&nbsp; <span className="font-semibold">İşletme: Yılmaz Teknik</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Hero; 