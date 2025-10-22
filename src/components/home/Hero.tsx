import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-black overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none z-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Video Background - Fixed */}
      <div className="absolute inset-0 ml-[200px]">
        <video
          src="https://videos.pexels.com/video-files/10240606/10240606-uhd_2560_1440_24fps.mp4"
          className="w-full h-full object-contain opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Radial gradient to focus on center drone */}
        <div
          className="absolute inset-0 bg-radial-gradient"
          style={{
            background:
              "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)",
          }}
        />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Accents */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content - Split Layout */}
      <motion.div
        className="absolute inset-0 flex items-center z-20"
        style={{ opacity, scale }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Main Heading with 3D Tilt Effect */}
              <div className="space-y-4">
                <motion.div
                  style={{
                    rotateX: mousePosition.y,
                    rotateY: mousePosition.x,
                    transformStyle: "preserve-3d",
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="perspective-1000"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-7xl xl:text-7xl font-black tracking-tighter leading-none text-left"
                  >
                    <span className="text-white block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)] relative">
                      The Future
                      <span className="absolute inset-0 translate-z-[-10px] text-transparent bg-gradient-to-r from-gray-800 to-black opacity-60 blur-sm">
                        The Future
                      </span>
                    </span>
                    <span className="text-white block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)] relative">
                      Takes
                      <span className="absolute inset-0 translate-z-[-10px] text-transparent bg-gradient-to-r from-gray-800 to-black opacity-60 blur-sm">
                        Takes
                      </span>
                    </span>
                    <span className="relative text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 bg-clip-text block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)]">
                      Flight
                      {/* 3D Layer behind */}
                      <span className="absolute inset-0 translate-z-[-15px] text-transparent bg-gradient-to-r from-orange-600 via-red-700 to-red-900 bg-clip-text blur-sm opacity-60">
                        Flight
                      </span>
                      <span className="absolute inset-0 translate-z-[-25px] text-transparent bg-gradient-to-r from-red-800 to-black bg-clip-text blur-md opacity-40">
                        Flight
                      </span>
                    </span>
                  </motion.h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-white/60 text-base sm:text-lg lg:text-xl leading-tight max-w-md text-left"
              >
                Precision-engineered aerial systems combining cutting-edge
                autonomy with unparalleled performance. Experience flight
                redefined.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-4"
              >
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    85km
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    Max Range
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    120fps
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    Video
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    45min
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    Flight Time
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Drone Showcase with Text in Circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="relative lg:block hidden "
            >
              {/* Circular tech rings around drone with text and dotted lines */}
              <motion.div className=" flex items-center justify-end mt-[50vh] ml-[60vw]">
                <motion.div className=" inset-0 flex items-center justify-center ">
                  <div className="w-96 h-96 rounded-full border border-orange-500/100 relative">
                    <motion.div className=" inset-0 flex items-center justify-center">
                      <div className="w-80 h-80 rounded-full border border-white/50">
                        <div className="w-96 h-96 rounded-full border border-orange-500/60 relative">
                          <motion.div className=" inset-0 flex items-center justify-center">
                            <div className="w-80 h-80 rounded-full border border-white/80" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Center highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
