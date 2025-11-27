// HowWeGetItDone.tsx
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  FaMapMarkedAlt,
  FaCogs,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import type { Variants } from "framer-motion";

interface ProcessCard {
  id: number;
  icon: ReactElement;
  bgImage: string;
  title: string;
  description: string;
}

const HowWeGetItDone = () => {

const processCards: ProcessCard[] = [
  {
    id: 1,
    icon: <FaMapMarkedAlt className="w-6 h-6" />,
    bgImage: "/aboutUs/Aerial_Mapping.jpg",
    title: "Aerial Mapping",
    description:
      "High-precision drone mapping services that provide accurate topographic data for construction, agriculture, and surveying projects.",
  },
  {
    id: 2,
    icon: <FaCogs className="w-6 h-6" />,
    bgImage: "/aboutUs/Flight_Planning.jpeg",
    title: "Flight Planning",
    description:
      "Our intelligent software creates optimized drone flight paths for efficient and safe data collection in various environments.",
  },
  {
    id: 3,
    icon: <FaCheckCircle className="w-6 h-6" />,
    bgImage: "/aboutUs/Real_Time_Inspection.jpg",
    title: "Real-Time Inspection",
    description:
      "Conduct real-time aerial inspections for infrastructure, utilities, and agriculture with live video feeds and analytics.",
  },
  {
    id: 4,
    icon: <FaRocket className="w-6 h-6" />,
    bgImage: "/aboutUs/Deployment_Support.jpeg",
    title: "Deployment & Support",
    description:
      "From setup to flight operations and post-mission analytics, we provide full deployment and ongoing technical support.",
  },
];


  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  
  return (
    <section className="py-16 px-3 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            How We Get It Done
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven process combines strategic thinking with technical
            excellence to deliver outstanding results that drive your business
            forward.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {processCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Main Card */}
              <div
                className="bg-white overflow-hidden h-full flex flex-col transform transition-all duration-300 group-hover:shadow-xl"
                style={{
                  clipPath:
                    "polygon(15% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 16%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  borderBottom: "4px solid #FF6900",
                }}
              >
                {/* Image Container */}
                <div className="relative h-32 overflow-hidden">
                  {" "}
                  {/* Reduced from h-40 */}
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.bgImage})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>
                {/* Circular Icon with higher z-index */}
                {/* <motion.div
                  className="absolute mt-[10vh] md:mt-[8vh] lg:mt-[15vh] left-1 w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white shadow-lg "
                >
                  {card.icon}
                </motion.div> */}
                {/* Content Area - More compact */}
                <div className="pt-6 pb-4 px-5 flex-1 flex flex-col">
                  {" "}
                  {/* Reduced padding */}
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {" "}
                    {/* Slightly smaller text */}
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1 text-sm">
                    {" "}
                    {/* Smaller text */}
                    {card.description}
                  </p>
                  
                </div>
              </div>

              {/* Accent Element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-tertiary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="bg-tertiary text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Project
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowWeGetItDone;