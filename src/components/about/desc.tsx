import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Wrench, Shield, Zap } from "lucide-react";
import { useRef } from 'react';

function Hero() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  // Smooth drone animation with easing
  const droneY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 200, 400, 600]);
  const droneX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 100, -50, 0]);
  const droneScale = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [1, 0.8, 0.6, 0.5]);
  const droneOpacity = useTransform(scrollYProgress, [0, 0.05, 0.75, 0.85, 1], [0, 1, 1, 0.3, 0]);
  const droneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 25, 45]);
  
  // Parallax effects for content
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.7]);
  
  const targetOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const contentX = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);

  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-[#FF6900]" />,
      title: "Smart Design",
      desc: "AI-powered drones for precision and performance.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#FF6900]" />,
      title: "Custom Build",
      desc: "Tailored drones for diverse industrial needs.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF6900]" />,
      title: "Reliable & Safe",
      desc: "Designed to ensure maximum safety and stability.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FF6900]" />,
      title: "High Performance",
      desc: "Built for efficiency and long-range operations.",
    },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
        style={{
          scale: heroScale,
          opacity: heroOpacity
        }}
      >
        {/* Top section */}
        <div
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full h-[60vh] relative"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px))",
          }}
        >
          <div className="mx-auto px-4 rounded-lg text-center space-y-1 md:space-y-1 h-full flex flex-col justify-center items-center">
            <motion.p
              className="text-white/80 text-sm md:text-base font-semibold tracking-widest uppercase mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Engineering drones that work smarter.
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mt-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              weevil<span className="text-[#FF6900]">drone</span>
            </motion.h1>

            <motion.p
              className="text-white/60 text-lg md:text-xl mt-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Advanced aerial solutions for industrial innovation
            </motion.p>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="bg-white w-full h-[40vh] absolute bottom-0"
          style={{
            clipPath: "polygon(0 0, 100% 60px, 100% 100%, 0 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 pt-12 text-center h-full flex items-center">
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flying Drone Animation */}
      <motion.div
        style={{
          x: droneX,
          y: droneY,
          scale: droneScale,
          opacity: droneOpacity,
          rotate: droneRotate,
        }}
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-3xl px-4 pointer-events-none"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6900]/30 to-orange-500/30 blur-3xl rounded-full"></div>
          
          {/* Drone */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl border border-slate-700 flex items-center justify-center">
              <div className="text-center">
                <Cpu className="w-16 h-16 text-[#FF6900] mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Advanced Drone Tech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Target Section */}
      <motion.div 
        ref={targetRef}
        className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden pt-20"
        style={{
          opacity: targetOpacity
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48"></div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen relative z-10">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
              style={{
                x: contentX
              }}
            >
              <div>
                <motion.p
                  className="text-[#FF6900] font-semibold tracking-widest uppercase text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Next Generation Technology
                </motion.p>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Advanced Drone <span className="text-[#FF6900]">Innovation</span>
                </h2>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
                Experience the future of aerial technology with our cutting-edge drone solutions. 
                Built with precision engineering, AI-powered navigation, and designed for 
                maximum reliability across all industrial applications.
              </p>

              <div className="space-y-4">
                {[
                  "Precision Engineering & Control",
                  "AI-Powered Navigation Systems",
                  "Long-Range Operational Capacity",
                  "Real-Time Data Processing"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#FF6900] rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-slate-800 font-medium group-hover:text-[#FF6900] transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-[#FF6900]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>

            {/* Right side - Visual showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full flex items-center justify-center"
            >
              <div className="relative w-full h-96">
                {/* Animated background shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-[#FF6900]/20 rounded-3xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-[#FF6900]/10 rounded-2xl"
                />
                
                {/* Center showcase */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700"
                    >
                      <div className="text-center space-y-4">
                        <Zap className="w-16 h-16 text-[#FF6900] mx-auto" />
                        <h3 className="text-white font-bold text-xl">Performance Metrics</h3>
                        <div className="grid grid-cols-2 gap-4 text-left">
                          <div><p className="text-[#FF6900] font-bold text-lg">120km</p><p className="text-white/60 text-sm">Max Range</p></div>
                          <div><p className="text-[#FF6900] font-bold text-lg">45min</p><p className="text-white/60 text-sm">Flight Time</p></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;