import React from "react";
import { motion } from "framer-motion";
import {  Shield, Swords, PencilRuler } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh]  md:h-[60vh]  lg:h-screen bg-cover bg-center bg-no-repeat overflow-hidden ">
      {/* Video Background https://r2.imgtoimg.ai/images/2025/10/27/7d3e91fbe95242adb0b3f9af301e5e3b.jpg */}
      <div className="absolute inset-0 z-0 lg:items-center items-start flex justify-center overflow-hidden">
        <img
          src="/DroneHero.png"
          className="object-cover w-[100vw]  lg:w-[60vw] items-center mt-0 md:mt-[-10vh] lg:mt-[-5vh]"
        />
      </div>

      {/* Left Feature Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-1/2 md:left-6 lg:left-16 top-[40vh] md:top-1/3 lg:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 space-x-8 md:space-x-0 space-y-0 md:space-y-8 lg:space-y-12 z-40 flex flex-row md:flex-col items-center justify-evenly"
      >
        {/* Field Proven */}
        <motion.div
          className="group relative flex flex-col items-center space-y-2 sm:space-y-3"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 rounded-full bg-[#FF6900] blur-md opacity-0 transition-opacity duration-300 -z-10" />
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#FF6900]/40 flex items-center justify-center bg-gradient-to-br from-[#FF6900]/15 to-[#FF6900]/10 backdrop-blur-sm group-hover:border-[#FF6900] transition-all duration-300 shadow-lg shadow-black/30">
            <Swords className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6900]" />
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] sm:text-xs lg:text-xs text-[#FF6900] font-medium uppercase tracking-wider group-hover:text-[#FF6900] transition-colors duration-300">
              Field Proven
            </div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#333333] uppercase tracking-widest hidden md:block">
              Tested Under Real Missions
            </div>
          </div>
        </motion.div>

        {/* High-End Engineering */}
        <motion.div
          className="group relative flex flex-col items-center space-y-2 sm:space-y-3"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 rounded-full bg-[#FF6900] blur-md opacity-0 transition-opacity duration-300 -z-10" />
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#FF6900]/40 flex items-center justify-center bg-gradient-to-br from-[#FF6900]/15 to-[#FF6900]/10 backdrop-blur-sm group-hover:border-[#FF6900]/70 transition-all duration-300 shadow-lg shadow-black/30">
            <PencilRuler className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6900]" />
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] sm:text-xs lg:text-xs text-[#FF6900] font-medium uppercase tracking-wider group-hover:text-[#FF6900] transition-colors duration-300">
              High-End Engineering
            </div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#333333] uppercase tracking-widest hidden md:block">
              Precision. Power. Control.
            </div>
          </div>
        </motion.div>

        {/* Engineered to Last */}
        <motion.div
          className="group relative flex flex-col items-center space-y-2 sm:space-y-3"
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 rounded-full bg-[#FF6900] blur-md opacity-0 transition-opacity duration-300 -z-10" />
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border border-[#FF6900]/40 flex items-center justify-center bg-gradient-to-br from-[#FF6900]/15 to-[#FF6900]/10 backdrop-blur-sm group-hover:border-[#FF6900]/70 transition-all duration-300 shadow-lg shadow-black/30">
            <Shield className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6900]" />
          </div>
          <div className="text-center space-y-1">
            <div className="text-[10px] sm:text-xs lg:text-xs text-[#FF6900] font-medium uppercase tracking-wider group-hover:text-[#FF6900] transition-colors duration-300">
              Engineered to Last
            </div>
            <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#333333] uppercase tracking-widest hidden md:block">
              Durable & Reliable Build
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Feature Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="
          flex flex-row sm:flex-col sm:justify-center items-center md:items-end
          absolute 
          left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0
          top-[58vh] md:top-1/3 lg:top-1/2 -translate-y-1/2
          sm:right-8 md:right-12 lg:right-16
          gap-6 sm:gap-8 z-40 bg-tertiary/30 md:bg-transparent px-5 py-1 rounded-2xl md:px-0 md:py-0  text-[#333333] border border-[#FF6900]/40 md:border-0
        "
      >
        {/* Military */}
        <motion.div
          className="
          flex flex-col sm:flex-row items-center sm:items-end
          text-center sm:text-right gap-1 sm:gap-3 
        "
        >
          <div className="text-sm sm:text-base lg:text-lg font-bold  tracking-wider uppercase">
            Military
          </div>
          <div className="w-full md:w-1 h-[2px] sm:h-7 lg:h-8 bg-[#FF6900] rounded-full hidden md:block" />
        </motion.div>

        {/* small screen divider */}
        <div className="block md:hidden">|</div>

        {/* Agricultural */}
        <motion.div
          className="
            flex flex-col sm:flex-row items-center sm:items-end
            text-center sm:text-right gap-1 sm:gap-3
          "
        >
          <div className="text-sm sm:text-base lg:text-lg font-bold  tracking-wider uppercase">
            Agricultural
          </div>
          <div className="w-full md:w-1 h-[2px] sm:h-7 lg:h-8 bg-[#FF6900] rounded-full hidden md:block " />
        </motion.div>
      </motion.div>

      {/* heading */}
      <div className="relative  flex flex-col items-center justify-start px-3 sm:px-4  z-10">
        {/* Background Text "WEEVILDRONE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative w-full flex justify-center pointer-events-none select-none z-10 mb-4 sm:mb-5 lg:mb-6 "
        >
          <div
            className="text-[12vw] sm:text-[11vw] lg:text-[10vw] font-black text-[#333333]/30 tracking-tighter leading-none whitespace-nowrap"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.05em",
            }}
          >
            WEEVILDRONE
          </div>
        </motion.div>

        {/* Beyond Gravity */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center z-20 -mt-2 sm:-mt-10 lg:-mt-12 w-full"
        >
          <h1
            className="text-xl sm:text-2xl lg:text-2xl font-light text-[#333333] tracking-[0.2em] uppercase drop-shadow-2xl w-full"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Beyond Gravity
          </h1>
        </motion.div>
      </div>

      {/* Description Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-[63vh] md:top-[44vh] lg:top-[75vh] left-1/2 -translate-x-1/2 w-full max-w-2xl  lg:max-w-2xl xl:max-w-4xl z-20 px-3 sm:px-4 lg:px-6 "
      >
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Description Text  */}
          <p className="text-[#333333] text-xs sm:text-sm lg:text-base leading-relaxed  mx-auto font-light tracking-wide drop-shadow-sm px-2 sm:px-0">
            At Weevils Drones, we design, manufacture, and deploy advanced
            drones that redefine operational excellence. We empower businesses
            across industries and a multitude of platforms, with cutting edge
            technology to achieve efficiency, precision, and sustainability like
            never before.
          </p>

          {/* Bottom Decorative Elements  */}
          <motion.div
            className="flex items-center justify-center space-x-4 sm:space-x-5 lg:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-[10px] sm:text-xs lg:text-xs text-[#555555] uppercase tracking-widest">
                Innovation
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#555555]"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-[10px] sm:text-xs lg:text-xs text-[#555555] uppercase tracking-widest">
                Precision
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#555555]"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-[10px] sm:text-xs lg:text-xs text-[#555555] uppercase tracking-widest">
                Excellence
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
