import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import {products} from "../../data/ProductDetails"
import { useNavigate } from "react-router-dom";

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slideVariants = {
    enter: (direction:any) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      rotateY: direction > 0 ? 60 : -60,
      scale: 0.5,
      z: -500,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      z: 0,
    },
    exit: (direction:any) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      rotateY: direction < 0 ? 60 : -60,
      scale: 0.5,
      z: -500,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset:any, velocity:any) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: any) => {
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = products.length - 1;
    if (nextIndex >= products.length) nextIndex = 0;

    setDirection(newDirection);
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 20000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const getAdjacentIndices = () => {
    const prev = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    const next = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    return { prev, next };
  };

  const { prev, next } = getAdjacentIndices();

  return (
    <section className="w-full bg-primary py-6 sm:py-8 lg:py-1 overflow-hidden relative flex items-start ">
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={{
          background: `radial-gradient(circle at 50% 50%, ${
            products[currentIndex].color.split(" ")[1]
          } 0%, transparent 50%)`,
        }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-tertiary/10 rounded-full "></div>
        <div
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-orange-500/10 rounded-full "
          style={{ animationDelay: "1s" }}
        ></div>
      </motion.div>

      {/*  Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, var(--color-secondary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-secondary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col h-full">
          {/*  Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-tertiary px-6 py-2 mb-6">
                <span className="text-tertiary text-sm font-medium tracking-wider">
                  Product Portfolio
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-secondary tracking-tight mb-6 ">
              Advanced
              <span className="font-medium bg-gradient-to-r from-tertiary to-orange-600 bg-clip-text text-transparent">
                {" "}
                Drone
              </span>
              Technology
            </h2>
            {/* <p className="text-lg sm:text-xl text-secondary/60 max-w-2xl mx-auto leading-relaxed">
              Cutting-edge drone solutions for defense, agriculture, emergency
              response, and industrial applications
            </p> */}
          </motion.div>

          {/* 3D Slider - Optimized Height */}
          <div
            className="relative flex-1 max-h-[700px] sm:max-h-[650px] lg:max-h-[650px] mt-[25vh] lg:mt-[20vh]"
            style={{ perspective: "2000px" }}
          >
            {/* Side Preview - Previous */}
            <motion.div
              key={`prev-${prev}`}
              initial={{ opacity: 0, x: -150, rotateY: -45, scale: 0.6 }}
              animate={{ opacity: 0.3, x: -80, rotateY: -45, scale: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-56 xl:w-72 cursor-pointer z-10"
              onClick={() => paginate(-1)}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 0.65, opacity: 0.5, x: -70 }}
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                <img
                  src={products[prev].image}
                  alt={products[prev].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Side Preview - Next */}
            <motion.div
              key={`next-${next}`}
              initial={{ opacity: 0, x: 150, rotateY: 45, scale: 0.6 }}
              animate={{ opacity: 0.3, x: 80, rotateY: 45, scale: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-56 xl:w-72 cursor-pointer z-10"
              onClick={() => paginate(1)}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 0.65, opacity: 0.5, x: 70 }}
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                <img
                  src={products[next].image}
                  alt={products[next].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Main Center Card */}
            <div
              className="absolute inset-0 flex items-center justify-center px-4 lg:px-32 text-left"
              style={{ perspective: "2000px" }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 250, damping: 25 },
                    opacity: { duration: 0.4 },
                    rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    z: { duration: 0.8 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(e, { offset, velocity }) => {
                    // console.log(e);
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="w-full max-w-4xl cursor-grab active:cursor-grabbing"
                  style={{ transformStyle: "preserve-3d" }}
                  onHoverStart={() => setIsAutoPlaying(false)}
                  onHoverEnd={() => setIsAutoPlaying(true)}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-secondary/10 backdrop-blur-sm bg-white/95">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section  */}
                      <div className="relative lg:w-1/2 h-48 sm:h-64 lg:h-80 overflow-hidden ">
                        <motion.img
                          src={products[currentIndex].image}
                          alt={products[currentIndex].name}
                          className="w-full h-full object-fill"
                          initial={{ scale: 1.3 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${products[currentIndex].color} opacity-10 mix-blend-overlay`}
                        ></div>
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div> */}

                        {/* Animated Counter Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2,
                          }}
                          className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14      flex items-center justify-center "
                        >
                          <span className="text-tertiary text-lg sm:text-xl font-black">
                            {String(currentIndex + 1).padStart(2, "0")}
                          </span>
                        </motion.div>
                      </div>

                      {/* Content Section  */}
                      <div className="lg:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-secondary mb-2 sm:mb-3 leading-tight">
                            {products[currentIndex].name}
                          </h3>

                          <p className="text-secondary/70 text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
                            {products[currentIndex].description}
                          </p>

                          {/* Compact Specs */}
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {products[currentIndex].specs.map((spec, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + idx * 0.05 }}
                                className="flex items-center gap-2 px-2 py-1.5 text-left "
                              >
                                <span className="text-secondary/90 text-xs font-medium">
                                  {spec}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          <motion.button
                            onClick={() => { navigate(products[currentIndex].url);  console.log(">>>>>>",products[currentIndex].url);}}
                            whileHover={{
                              scale: 1.03,
                             
                            }}
                            whileTap={{ scale: 0.97 }}
                            className={`w-full px-6 py-3 bg-gradient-to-r ${products[currentIndex].color} text-white font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base`}
                          >
                            <span>View Details</span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Compact Navigation */}
        <div className=" flex items-end justify-center gap-4 sm:gap-6 mt-[35vh] md:mt-[30vh] ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/5 backdrop-blur-md border border-secondary/10 flex items-center justify-center hover:bg-tertiary transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-secondary group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <div className="flex gap-2">
            {products.map((product, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <div
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? `w-8 sm:w-10 bg-gradient-to-r ${product.color}`
                      : "w-1.5 sm:w-2 bg-secondary/20"
                  }`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${product.color} blur-md opacity-50`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/5 backdrop-blur-md border border-secondary/10 flex items-center justify-center hover:bg-tertiary transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-secondary group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
