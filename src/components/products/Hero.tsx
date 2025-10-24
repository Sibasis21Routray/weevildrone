import React from "react";
import { motion } from "framer-motion";
import { FaDownLong } from "react-icons/fa6";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  image?: string;
  layout?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  description,
  image,
  layout,
}) => {
  return (
    <div className="relative lg:h-screen overflow-hidden pl-0 lg:pl-5 bg-primary">
      <div className="relative z-10 h-full flex items-center justify-center bg-primary md:mt-25 lg:mt-0">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 md:mt-0 ${
              layout === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <motion.div
              className="order-1"
              initial={{ opacity: 0, x: layout === "right" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-secondary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
              >
                {title}
              </motion.h2>

              <motion.div
                className="text-lg mb-8 space-y-4 text-secondary/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                <p>{description}</p>
              </motion.div>

              {/* <motion.button
                className="px-6 py-2 sm:px-8 sm:py-3 bg-tertiary text-primary font-medium rounded-lg hover:bg-tertiary/90 transition flex items-center justify-center gap-2 group shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 105, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/ppt/arthaPpt.pptx";
                  link.download = "MyPresentation.pptx";
                  link.click();
                }}
              >
                Download Presentation
                <FaDownLong className="transition-transform group-hover:translate-y-1 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button> */}
            </motion.div>

            {/* Image/Video Content */}
            <motion.div
              className={`relative aspect-video rounded-xl ${
                layout === "right" ? "order-1 lg:order-2" : "order-2"
              }`}
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeIn" }}
            >
              {/* Container for decorative elements and image */}
              <div className="relative p-6 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Decorative background divs with theme colors */}
                    <div className="absolute -inset-4 bg-tertiary/20 rounded-2xl transform rotate-3 z-0"></div>
                    <div className="absolute -inset-3 bg-secondary/10 rounded-xl transform -rotate-2 z-0"></div>
                    <div className="absolute -inset-2 bg-tertiary/10 rounded-lg transform rotate-1 z-0"></div>

                    {/* Main image */}
                    <img
                      src={image}
                      alt="Hero background"
                      className="relative w-full h-full object-cover rounded-xl shadow-2xl z-10 border border-secondary/10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
