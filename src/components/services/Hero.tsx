import { motion } from "framer-motion";
import { Cpu, Wrench, Shield, Zap } from "lucide-react";

function Hero() {
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
    <div className="relative lg:h-screen md:h-[60vh]  h-[90vh] overflow-hidden">
      {/* Top section */}
      <div
        className="bg-tertiary w-full h-[40vh] lg:h-[50vh] relative"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 50px))",
        }}
      >
        <div className=" mx-auto px-4 rounded-lg text-center space-y-1 md:space-y-1">
          {/* Description */}
          <motion.p
            className="text-white text-sm md:text-base font-bold  mx-auto leading-relaxed pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineering drones that work smarter.
          </motion.p>

          {/* Second Heading */}
          <motion.h2
            className="text-5xl md:text-[100px] lg:text-[120px] font-semibold text-transparent bg-gray-700 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] bg-clip-text mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            weevildrone
          </motion.h2>
        </div>
      </div>

      {/* Drone Image - Centered between sections */}
      <div className="absolute top-1/3 md:top-1/2 lg:top-1/2   left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-4xl px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/DroneHero.png"
            alt="Weevil Drone"
            className="w-full max-w-lg md:max-w-2xl lg:max-w-xl xl:max-w-2xl object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Bottom section */}
      <div
        className=" w-full h-[40vh]  absolute  lg:bottom-0 "
        style={{
          clipPath: "polygon(0 0, 100% 50px, 100% 100%, 0 100%)",
        }}
      >
        {/* the bottom white section */}
        <div className="max-w-6xl mx-auto px-4 pt-6 text-center">
          <div className="w-full py-2 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 text-center">
              {features.map((feature, index) => (
                <div key={index} className="rounded-xl p-4 md:p-5 transition">
                  <div className="flex flex-col items-center space-y-2 md:space-y-3">
                    {feature.icon}
                    <h3 className="text-base md:text-lg font-semibold text-[#333333]">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 hidden md:block lg:block">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
