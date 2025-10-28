import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

function Hero() {
  const heroRef = useRef(null);
  const targetDroneRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const stats = [
    { number: 95, suffix: "%", label: "Success Rate" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 3, suffix: "mins", label: "Average Response Time" },
    { number: 12, suffix: "hr", label: "Flight Time" },
  ];

  const containerVariants :Variants= {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


 

  return (
    <div ref={heroRef} className="relative ">
      {/* Main Content Section */}
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-left"
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-7 grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Content */}
          <motion.div
            ref={textRef}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Advanced Aerial
                <span className="bg-gradient-to-r from-[#FF6900] to-orange-600 bg-clip-text text-transparent block">
                  {" "}
                  Technology
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="o">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Weevildrone represents the pinnacle of drone engineering,
                combining cutting-edge AI, robust construction, and unparalleled
                performance for industrial applications.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="stats-section grid grid-cols-2 gap-4 sm:flex sm:gap-0 mb-10 lg:mb-0 "
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center w-full pl-4 pr-4 sm:pl-6 sm:pr-6"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    <span className="stat-number">{stat.number}</span>
                    <span className="text-[#FF6900]">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Target Drone */}
          <motion.div
            className="flex justify-center lg:justify-end relative order-1 lg:order-2  -mt-[10vh] md:-mt-[15vh] lg:mt-0"
            // variants={droneVariants}
            initial="hidden"
            animate="visible"
          >
            <div ref={targetDroneRef} className="relative">
              <motion.img
                src="/DroneHero.png"
                alt="Weevil Drone"
                className="w-full  object-contain drop-shadow-2xl "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
