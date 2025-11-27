import React from "react";
import { motion } from "framer-motion";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShieldHalved } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";

interface HeroProps {
  name: string;
  title: string;
  catagory?: string;
  description: string;
  image?: string;
  layout?: "left" | "right";
  onScrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  catagory,
  description,
  image,
  layout = "left",
  onScrollClick,
}) => {
  return (
    <section className="relative w-full bg-primary text-secondary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-5 sm:px-8 py-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            layout === "right" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* ================= TEXT CONTENT ================= */}
          <motion.div
            className={`space-y-6 lg:text-left order-2 text-left ${
              layout === "right" ? "lg:col-start-2" : ""
            }`}
            initial={{ opacity: 0, x: layout === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Product Title */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {name}{" "}
              <motion.span
                className="block text-[var(--color-tertiary)] mt-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {title}
              </motion.span>
            </motion.h1>

            {/* Product Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <button hidden={catagory === "Upcoming Model"}
                className="bg-gradient-to-r from-[var(--color-tertiary)] to-orange-600 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <AiOutlineThunderbolt className="text-white text-xl" /> Buy Now
              </button>

              <button
                onClick={onScrollClick}
                className="flex flex-row items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:border-tertiary bg-white transition-all duration-300"
              >
                <TbListDetails className="text-tertiary text-xl" />
                View Specifications
              </button>
            </motion.div>
          </motion.div>

          {/* ================= IMAGE CONTENT ================= */}
          <motion.div
            className={`relative flex flex-col justify-center items-start order-1 ${
              layout === "right" ? "lg:col-start-1" : ""
            }`}
            initial={{
              opacity: 0,
              scale: 0.95,
              x: layout === "right" ? -100 : 100,
            }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4">
                <img
                  src={
                    image ||
                    "https://images.unsplash.com/photo-1581091870622-9b6c31d84b36?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={name}
                  className="w-full h-auto object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>

            {/* Trust Badges */}

            {catagory === "Upcoming Model" ? (
              <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base mt-5">
                <MdEventAvailable className="text-tertiary" />
                <span>Upcoming Model</span>
              </div>
            ) : (
              <motion.div
                className="flex flex-col justify-start sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-3 sm:gap-5 mt-4 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                  <MdEventAvailable className="text-tertiary" />

                  <span>In Stock</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                  <span>
                    <TbTruckDelivery className="text-tertiary" />
                  </span>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                  <span>
                    <FaShieldHalved className="text-tertiary" />
                  </span>
                  <span>2-Year Warranty</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
