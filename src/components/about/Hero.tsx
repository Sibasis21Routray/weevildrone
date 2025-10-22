import { useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const heroRef = useRef(null);
  const targetDroneRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const stats = [
    { number: 95, suffix: "%", label: "Success Rate" },
    { number: 150, suffix: "+", label: "Projects Completed" },
    { number: 40, suffix: "km", label: "Maximum Range" },
    { number: 12, suffix: "hr", label: "Flight Time" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  // const ringVariants = {
  //   initial: { scale: 0, opacity: 0 },
  //   animate: (index: number) => ({
  //     scale: 1 + index * 0.5,
  //     opacity: [0.3, 0.1, 0.3],
  //     transition: {
  //       duration: 3,
  //       delay: index * 0.5,
  //       repeat: Infinity,
  //       ease: "easeInOut",
  //     },
  //   }),
  // };

  const droneVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
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

        <div className="relative container mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
            <motion.div variants={itemVariants} className="stats-section flex">
              {stats.map((stat, index) => (
                <div key={index} className="text-center w-full pl-6 pr-6">
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
            className="flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0 "
            // variants={droneVariants}
            initial="hidden"
            animate="visible"
          >
            <div ref={targetDroneRef} className="relative">
              <motion.img
                src="/drone.png"
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
