import { motion } from "framer-motion";
import {
  FaTools,
  FaHelicopter,
  FaCertificate,
  FaChalkboardTeacher,
  FaUniversity,
} from "react-icons/fa";

const trainingFeatures = [
  {
    title: "Theoretical & Practical Training",
    description:
      "Comprehensive theoretical training on drone flying concepts and practical flight operations",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Assembly & Maintenance",
    description:
      "Hands-on training in RC drone assembly and maintenance for both battery and IC engine based systems",
    icon: FaTools,
  },
  {
    title: "Flight Operations",
    description:
      "Practical drone flying training for both multi-rotor and fixed-wing aircraft",
    icon: FaHelicopter,
  },
  {
    title: "Government Certified Programs",
    description:
      "Central Government mandated training programs for NCC students",
    icon: FaCertificate,
  },
];



export const TrainingServices: React.FC = () => {
  return (
    <section id="training" className="py-10 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Training Services
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-secondary)" }}
          >
            Professional drone training programs for NCC students and aviation
            enthusiasts
          </p>
        </motion.div>
        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="m-10"
        >
          <div className="bg-gradient-to-r from-[var(--color-secondary)] to-gray-800 rounded-lg p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FaUniversity
                className="text-3xl"
                style={{ color: "var(--color-tertiary)" }}
              />
              <h4 className="text-2xl font-bold text-white">
                Government Mandated Training
              </h4>
              <FaUniversity
                className="text-3xl"
                style={{ color: "var(--color-tertiary)" }}
              />
            </div>
            <p className="text-md text-white text-center">
              Central Government makes it mandatory for NCC students to get
              trained on Drone Technology. Our experienced team provides
              comprehensive training to 1 Bengal Air NCC Students.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-10"
          >
            <motion.div className="col-span-5">
              <img
                src="/gallery/1-Bengal-Air-NCC_Training_9-1-scaled.jpg"
                className="rounded-lg shadow-2xl h-80 w-full object-cover"
              />
            </motion.div>

            <motion.div className="col-span-3">
              <img
                src="/gallery/1-Bengal-Air-NCC_Training_4-1.jpg"
                className="rounded-lg shadow-2xl h-80 w-full object-cover"
              />
            </motion.div>

            <motion.div className="col-span-4">
              <img
                src="/gallery/1-Bengal-Air-NCC_Training_5-1.jpg"
                className="rounded-lg shadow-2xl h-80 w-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex text-left gap-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary bg-tertiary p-3 text-center">
              Comprehensive Drone Training
            </h3>
            <div className="flex flex-col p-1 gap-2">
              <p className="text-lg  leading-tight items-center flex justify-center">
                Comprehensive drone training program for 1 Bengal Air NCC
                students at Behala Flying Club, Kolkata, West Bengal. Central
                Government makes it mandatory for NCC students to get trained on
                Drone Technology.
              </p>
              <p className="text-lg  leading-tight items-center flex  text-left">
                NCC students receiving hands-on drone training at Behala Flying
                Club, Kolkata
              </p>
            </div>
          </motion.div>

          {/* Features Grid - Squarish Cards with Icons */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {trainingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white h-[45vh] rounded-lg shadow-2xl p-6 border-2 border-gray-200 hover:border-[var(--color-tertiary)] transition-all duration-300 aspect-square flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {/* Icon Container */}
                  <div
                    className={`bg-tertiary w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto`}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4
                      className="font-bold text-xl text-center mb-3"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-center flex-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
