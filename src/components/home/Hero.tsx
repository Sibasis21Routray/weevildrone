import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Bluetooth } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#2a2c3e] overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/10240606/10240606-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2c3e] to-[#1a1c2e]"></div>
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Left Feature Icons - Made Responsive */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-16 top-1/2 -translate-y-1/2 space-y-8 sm:space-y-10 lg:space-y-12 z-40 hidden sm:flex flex-col"
      >
        {/* Bluetooth */}
        <motion.div 
          className="group relative flex flex-col items-center space-y-2 sm:space-y-3"
          whileHover={{ scale: 1.05, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#FF6900] blur-md opacity-0 transition-opacity duration-300 -z-10" />
          
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#FF6900]/40 flex items-center justify-center bg-gradient-to-br from-[#FF6900]/15 to-[#FF6900]/10 backdrop-blur-sm group-hover:border-[#FF6900]/70 transition-all duration-300 shadow-lg shadow-black/30">
            <Bluetooth className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6900]" />
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] sm:text-xs lg:text-xs text-white font-medium uppercase tracking-wider group-hover:text-[#FF6900] transition-colors duration-300">Bluetooth</div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-200 uppercase tracking-widest">Version 5.0</div>
          </div>
        </motion.div>

        {/* Warranty */}
        <motion.div 
          className="group relative flex flex-col items-center space-y-2 sm:space-y-3"
          whileHover={{ scale: 1.05, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#FF6900] blur-md opacity-0 transition-opacity duration-300 -z-10" />
          
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#FF6900]/40 flex items-center justify-center bg-gradient-to-br from-[#FF6900]/15 to-[#FF6900]/10 backdrop-blur-sm group-hover:border-[#FF6900]/70 transition-all duration-300 shadow-lg shadow-black/30">
            <Shield className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6900]" />
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] sm:text-xs lg:text-xs text-white font-medium uppercase tracking-wider group-hover:text-[#FF6900] transition-colors duration-300">1 Year</div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-200 uppercase tracking-widest">Warranty</div>
          </div>
        </motion.div>

        {/* Shipping */}
        <motion.div 
          className="group relative flex flex-col items-center space-y-2 sm:space-y-3"
          whileHover={{ scale: 1.05, x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#FF6900] blur-md opacity-0 transition-opacity duration-300 -z-10" />
          
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#FF6900]/40 flex items-center justify-center bg-gradient-to-br from-[#FF6900]/15 to-[#FF6900]/10 backdrop-blur-sm group-hover:border-[#FF6900]/70 transition-all duration-300 shadow-lg shadow-black/30">
            <Truck className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6900]" />
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] sm:text-xs lg:text-xs text-white font-medium uppercase tracking-wider group-hover:text-[#FF6900] transition-colors duration-300">Free and</div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-200 uppercase tracking-widest">Fast Shipping</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Feature Indicators - Made Responsive */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-6 sm:space-y-7 lg:space-y-8 z-40"
      >
        {/* Active */}
        <motion.div 
          className="flex flex-col items-end"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-sm sm:text-base lg:text-lg font-bold text-[#FF6900] mb-1 tracking-wider uppercase">Cinematic</div>
          <div className="w-1 h-6 sm:h-7 lg:h-8 bg-[#FF6900] rounded-full" />
        </motion.div>

        <motion.div className="flex flex-col items-end" whileHover={{ scale: 1.05 }}>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-300 mb-1 tracking-wider uppercase">Racing</div>
          <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gray-400 rounded-full" />
        </motion.div>

        <motion.div className="flex flex-col items-end" whileHover={{ scale: 1.05 }}>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-300 mb-1 tracking-wider uppercase">Industrial</div>
          <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gray-400 rounded-full" />
        </motion.div>

        <motion.div className="flex flex-col items-end" whileHover={{ scale: 1.05 }}>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-300 mb-1 tracking-wider uppercase">Military</div>
          <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Main Content Area - Made Responsive */}
      <div className="relative h-full flex flex-col items-center justify-start px-3 sm:px-4 pt-8 sm:pt-10 lg:pt-12 z-10">
        
        {/* Background Text "WEEVILDRONE" - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative w-full flex justify-center pointer-events-none select-none z-10 mb-4 sm:mb-5 lg:mb-6"
        >
          <div 
            className="text-[12vw] sm:text-[11vw] lg:text-[10vw] font-black text-white/30 tracking-tighter leading-none whitespace-nowrap"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.05em'
            }}
          >
            WEEVILDRONE
          </div>
        </motion.div>

        {/* Title "Beyond Gravity" - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center z-20 -mt-8 sm:-mt-10 lg:-mt-12 w-full"
        >
          <h1 
            className="text-xl sm:text-2xl lg:text-2xl font-light text-white tracking-[0.2em] uppercase drop-shadow-2xl w-full"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Beyond Gravity
          </h1>
        </motion.div>
      </div>

      {/* Description Text - Made Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 xl:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-4xl z-20 px-3 sm:px-4 lg:px-6"
      >
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Description Text - Responsive */}
          <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed max-w-full sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto font-light tracking-wide drop-shadow-sm px-2 sm:px-0">
            At Weevils Drones, we design, manufacture, and deploy advanced drones that redefine operational excellence. We empower businesses across industries and a multitude of platforms, with cutting edge technology to achieve efficiency, precision, and sustainability like never before.
          </p>
          
          {/* Bottom Decorative Elements - Responsive */}
          <motion.div 
            className="flex items-center justify-center space-x-4 sm:space-x-5 lg:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6900] animate-pulse"></div>
              <span className="text-[10px] sm:text-xs lg:text-xs text-gray-300 uppercase tracking-widest">Innovation</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6900] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <span className="text-[10px] sm:text-xs lg:text-xs text-gray-300 uppercase tracking-widest">Precision</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6900] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <span className="text-[10px] sm:text-xs lg:text-xs text-gray-300 uppercase tracking-widest">Excellence</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;