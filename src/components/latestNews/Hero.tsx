
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

function Hero({currentPost}: {currentPost: any}) {

  // Animation variants
  const introVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <section className="relative  bg-primary text-[var(--color-primary)]">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPost.date}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden  bg-primary text-secondary"
          >
            {/* Top Header Section */}
            <div className="relative">
              <motion.img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent " />

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 sm:left-10 text-left">
                <motion.h1
                  className="text-2xl sm:text-4xl font-bold text-[var(--color-primary)] drop-shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentPost.title}
                </motion.h1>
                <motion.p
                  className="mt-2 text-sm sm:text-base text-gray-200 max-w-2xl hidden md:block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentPost.descreption}
                </motion.p>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 px-6 sm:px-10 py-4 text-gray-600 text-sm sm:text-base">
              <div className="flex flex-col items-center gap-2 text-left">
                {/* date Section */}
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-tertiary" />
                  <span>{currentPost.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaTag className="text-[var(--color-tertiary)]" />
                <span className="capitalize">{currentPost.type}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Hero;
