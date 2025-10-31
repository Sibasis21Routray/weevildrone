import { motion } from "framer-motion";
import {
  FaTools,
  FaChalkboardTeacher,
  FaUniversity,
  FaFighterJet,
} from "react-icons/fa";
import { FaJetFighter } from "react-icons/fa6";

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
    title: "Flight Training",
    description:
      "Practical drone flying training for both multi-rotor and fixed-wing aircraft",
    icon: FaFighterJet,
  },
  {
    title: "Drone Types & UAVs",
    description:
      "Different types of Drones/UAVs and their specific applications",
    icon: FaJetFighter,
  },
];

export const TrainingServices: React.FC = () => {
  return (
    <section id="training" className="py-1 bg-[var(--color-primary)] md:mt-10 lg:mt-4">
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
            className="text-lg max-w-3xl mx-auto"
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
          className="mb-10 lg:m-10"
        >
          <div className="bg-gradient-to-r from-[var(--color-secondary)] to-gray-800 rounded-lg p-6 lg:p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-4 lg:space-y-0 mb-4">
              <FaUniversity
                className="text-2xl lg:text-3xl"
                style={{ color: "var(--color-tertiary)" }}
              />
              <h4 className="text-xl lg:text-2xl font-bold text-white text-center">
                Government Mandated Training
              </h4>
              <FaUniversity
                className="text-2xl lg:text-3xl"
                style={{ color: "var(--color-tertiary)" }}
              />
            </div>
            <p className="text-sm lg:text-md text-white text-center">
              Central Government makes it mandatory for NCC students to get
              trained on Drone Technology. Our experienced team provides
              comprehensive training to 1 Bengal Air NCC Students.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8 lg:gap-12 items-center mb-16">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
              <motion.div className="lg:col-span-5">
                <img
                  src="/gallery/1-Bengal-Air-NCC_Training_9-1-scaled.jpg"
                  className="rounded-lg shadow-2xl h-64 lg:h-80 w-full object-cover"
                  alt="NCC Training 1"
                />
              </motion.div>

              <motion.div className="lg:col-span-3">
                <img
                  src="/gallery/1-Bengal-Air-NCC_Training_4-1.jpg"
                  className="rounded-lg shadow-2xl h-64 lg:h-80 w-full object-cover"
                  alt="NCC Training 2"
                />
              </motion.div>

              <motion.div className="lg:col-span-4">
                <img
                  src="/gallery/1-Bengal-Air-NCC_Training_5-1.jpg"
                  className="rounded-lg shadow-2xl h-64 lg:h-80 w-full object-cover"
                  alt="NCC Training 3"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center text-center lg:text-left">
              <h3 className="text-2xl font-bold text-primary bg-tertiary p-3 lg:w-1/3 w-full">
                Comprehensive Drone Training
              </h3>
              <div className="flex flex-col gap-4 lg:w-2/3 w-full">
                <p className="text-md leading-relaxed">
                  Comprehensive drone training program for 1 Bengal Air NCC
                  students at Behala Flying Club, Kolkata, West Bengal. Central
                  Government makes it mandatory for NCC students to get trained on
                  Drone Technology.
                </p>
                <p className="text-md leading-relaxed">
                  NCC students receiving hands-on drone training at Behala Flying
                  Club, Kolkata
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid - Responsive Cards */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-fit">
              {trainingFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white rounded-lg shadow-2xl p-6 border-2 border-gray-200 hover:border-[var(--color-tertiary)] transition-all duration-300 flex flex-col w-full min-h-[300px] lg:min-h-[310px]"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};