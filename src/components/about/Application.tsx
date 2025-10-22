import { motion } from "framer-motion";
import {
  FaHelicopter,
  FaMapMarkedAlt,
  FaCamera,
  FaChartLine,
} from "react-icons/fa";
import type { Variants } from "framer-motion";


const Application = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-5 px-4 bg-secondary text-left   ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Drone Applications
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            Harness the power of aerial technology for advanced surveillance,
            mapping, and data collection across various industries.
          </p>
        </motion.div>

        {/* Applications Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2 "
        >
          {/* First Application - Image Left, Content Right */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center bg-tertiary p-2"
            style={{
              clipPath:
                "polygon(5% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 18%)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            {/* Image Section */}
            <div
              className="lg:w-1/2 w-full"
              style={{
                clipPath:
                  "polygon(9% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 17%)",
              }}
            >
              <motion.div
                variants={imageVariants}
                className="relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Farming Surveillance"
                  className="w-full h-64 lg:h-72 object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-3">
                    <span className="bg-tertiary text-white px-3 py-1 rounded-full text-sm font-medium ">
                      Agricultural Technology
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                      Precision Farming
                    </span>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full pl-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className=""
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                  Farming Surveillance
                </h3>

                <p className="text-primary leading-tight mx-3 my-3">
                  Revolutionize your agricultural operations with our advanced
                  drone surveillance systems. Monitor crop health, optimize
                  resource allocation, and increase yield through real-time
                  aerial data collection.
                </p>

                {/* Points with Icons */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FaHelicopter className="w-4 h-4" />
                    </div>
                    <span className="text-primary font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      Real-time crop monitoring
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FaCamera className="w-4 h-4" />
                    </div>
                    <span className="text-primary font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      High-resolution imaging
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FaChartLine className="w-4 h-4" />
                    </div>
                    <span className="text-primary font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      Yield prediction analytics
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Application - Image Right, Content Left */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row-reverse items-center bg-tertiary p-2"
            style={{
              clipPath:
                "polygon(0 0, 95% 0, 100% 18%, 100% 100%, 0 100%, 0 50%)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            {/* Image Section */}
            <div
              className="lg:w-1/2 w-full"
              style={{
                clipPath:
                  "polygon(0 0, 91% 0, 100% 17%, 100% 100%, 0 100%, 0 50%)",
              }}
            >
              <motion.div
                variants={imageVariants}
                className="relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mapping and Surveying"
                  className="w-full h-64 lg:h-72 object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-3">
                    <span className="bg-tertiary text-white px-3 py-1 rounded-full text-sm font-medium ">
                      Geospatial Solutions
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                      Aerial Mapping
                    </span>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full pl-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className=""
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                  Mapping and Surveying
                </h3>

                <p className="text-primary leading-tight my-3 mx-3">
                  Transform your mapping and surveying capabilities with our
                  drone technology. Capture precise topographic data, create
                  detailed 3D models, and conduct comprehensive land surveys
                  with unprecedented accuracy.
                </p>

                {/* Points with Icons */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkedAlt className="w-4 h-4" />
                    </div>
                    <span className="text-primary font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      High-precision topographic mapping
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FaCamera className="w-4 h-4" />
                    </div>
                    <span className="text-primary font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      3D terrain modeling
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <FaChartLine className="w-4 h-4" />
                    </div>
                    <span className="text-primary font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      Volume calculation & analysis
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Application;
