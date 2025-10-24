import React from "react";
import { motion } from "framer-motion";

interface KeyFeature {
  icon: React.ReactNode;
  text: string;
}

interface GeneralSpecifications {
  wingspan: string;
  length: string;
  height: string;
  flyingWeight: string;
  construction: string;
  power: string;
  assembly: string;
}

interface ElectricPowerSystem {
  pusherMotor: string;
  pusherPropeller: string;
  vtolMotor: string;
  vtolESC: string;
  vtolPropeller: string;
  battery: string;
  servos: string;
}

interface CommunicationAndPerformance {
  communication: string;
  flightPerformance: string;
}

interface ProductDetailsProps {
  keyFeatures: KeyFeature[];
  generalSpecifications: GeneralSpecifications;
  electricPowerSystem: ElectricPowerSystem;
  communicationAndPerformance: CommunicationAndPerformance;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  keyFeatures,
  generalSpecifications,
  electricPowerSystem,
  communicationAndPerformance,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-primary">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Key Features Section */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-secondary/10 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary text-xl">
                  {feature.icon}
                </div>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General Specifications */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-secondary/10 p-8"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6 pb-4 border-b border-secondary/10">
            General Specifications
          </h3>
          <div className="space-y-4">
            {Object.entries(generalSpecifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center py-3 border-b border-secondary/5 last:border-b-0"
              >
                <span className="text-secondary/70 font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}:
                </span>
                <span className="text-secondary font-semibold text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Electric Power System */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-secondary/10 p-8"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6 pb-4 border-b border-secondary/10">
            Electric Power System
          </h3>
          <div className="space-y-4">
            {Object.entries(electricPowerSystem).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center py-3 border-b border-secondary/5 last:border-b-0"
              >
                <span className="text-secondary/70 font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}:
                </span>
                <span className="text-secondary font-semibold text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Communication & Performance */}
        <motion.div
          className="lg:col-span-2 bg-gradient-to-br from-tertiary/5 to-secondary/5 rounded-2xl shadow-lg border border-secondary/10 p-8"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-secondary mb-6">
            Communication & Performance
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                Communication System
              </h4>
              <p className="text-secondary/70 leading-relaxed">
                {communicationAndPerformance.communication}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                Flight Performance
              </h4>
              <p className="text-secondary/70 leading-relaxed">
                {communicationAndPerformance.flightPerformance}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
