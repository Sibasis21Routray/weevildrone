import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ImagesReveal from "./images-reveal";
import type { Variants } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImages?: string[];
}

const Hero: React.FC<HeroSectionProps> = ({
  title = "Checkout our Gallery",
  subtitle = "WeevilsDrones engaged with IIT Kharagpur via Incubation process. We set up a UAV workshop at Science and Technology Entrepreneurs’ Park (STEP). The workshop was inaugurated by Prof Khanindra Pathak on 11th February 2025.",
  backgroundImages = [
    "/gallery/P1919255-scaled.jpg",
    "/gallery/P1919197.jpg",
    "/gallery/P1919175.jpg",
  ],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative md:h-fit sm:h-screen lg:h-screen overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 sm:px-6 lg:px-8 w-full mt-12  "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          variants={textVariants}
          style={{ color: "var(--color-primary)" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-lg lg:text-xl mb-8  mx-auto font-light"
          variants={textVariants}
          style={{ color: "var(--color-primary)" }}
        >
          {subtitle}
        </motion.p>
        <ImagesReveal />
      </motion.div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-[var(--color-tertiary)] scale-125"
                : "bg-[var(--color-primary)] opacity-50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
