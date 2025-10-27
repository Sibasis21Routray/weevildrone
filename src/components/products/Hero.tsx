import { motion } from "framer-motion";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  image?: string;
  layout?: string;
  keyFeatures?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  onScrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  name,
  description,
  image,
  layout,
  keyFeatures,
  onScrollClick,
}) => {
  return (
    <div
      className=" bg-gradient-to-br from-gray-100 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url('https://img.freepik.com/free-photo/background-gradient-lights_23-2149304995.jpg')",
      // }}
    >
      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] ${
            layout === "right" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Content */}
          <motion.div
            className={`space-y-8 text-left ${
              layout === "right" ? "lg:col-start-2" : ""
            }`}
            initial={{ opacity: 0, x: layout === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Product Name */}
            <motion.h1
              className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {name}
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                Professional Series
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Key Features Grid */}
            {keyFeatures && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-orange-300 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <div className="text-orange-600 group-hover:text-white text-lg transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={`relative ${layout === "right" ? "lg:col-start-1" : ""}`}
            initial={{
              opacity: 0,
              scale: 0.95,
              x: layout === "right" ? -100 : 100,
            }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div className="relative bg-white rounded-3xl  p-8 border border-gray-200 fex  justify-center ">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>

                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center space-x-6 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">In Stock</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 text-green-600">✓</div>
                    <span className="text-sm text-gray-600">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 text-blue-600">🛡️</div>
                    <span className="text-sm text-gray-600">
                      2-Year Warranty
                    </span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                    <span>Buy Now</span>
                    <span className="text-xl"><FaArrowRight/></span>
                  </button>

                  <button
                    onClick={onScrollClick}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all duration-300 bg-white"
                  >
                    View Specifications
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
