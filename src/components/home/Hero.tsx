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
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * -20,
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

      {/* Video Background - Fully Responsive */}
      <div className="absolute inset-0">
        <video
          src="https://www.pexels.com/download/video/3946074/"
          className="w-full h-full object-cover opacity-60 lg:opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100%)",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-[20vh] space-y-12"
            >
              {/* Main Heading with True 3D Effect */}
              <div className="space-y-4 " style={{ perspective: "1000px" }}>
                <motion.div
                  style={{
                    rotateY: mousePosition.x,
                    rotateX: mousePosition.y,
                    transformStyle: "preserve-3d",
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center text-4xl sm:text-5xl lg:text-7xl xl:text-7xl font-black tracking-tighter leading-none text-left"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span
                      className="text-white block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)] relative"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      The Future Takes
                    </span>
                    <span
                      className="relative text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 bg-clip-text block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)]"
                      style={{
                        transform: "translateZ(60px)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      Flight
                      {/* 3D depth layers */}
                      <span
                        className="absolute inset-0 text-transparent bg-gradient-to-r from-orange-600 via-red-700 to-red-900 bg-clip-text blur-sm opacity-60"
                        style={{ transform: "translateZ(-20px)" }}
                      >
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
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 mt-[5vh]"
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
