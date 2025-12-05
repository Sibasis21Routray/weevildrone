import { motion } from "framer-motion";
import {
  FaMap,
  FaSatellite,
  FaIndustry,
  FaTree,
  FaTruck,
  FaBolt,
  FaMountain,
  FaRulerCombined,
  FaCrosshairs,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const technicalSpecs = [
  {
    category: "Precision Mapping",
    icon: FaCrosshairs,
    features: [
      "DGPS Real Time Kinematic (RTK) survey with 5-10s accuracy per point",
      "Ground Control Points at 5km intervals",
      "Local base station setup",
      "Proprietary post-processing software",
      "Real-time data correction",
    ],
  },
  {
    category: "Survey Accuracy",
    icon: FaRulerCombined,
    features: [
      "Operating Reference Stations (CORs) by Survey of India integration",
      "Nearest CORS station data utilization",
      "Enhanced accuracy through PCPs",
      "DGPS survey performance optimization",
      "Continuous monitoring systems",
    ],
  },
  {
    category: "Multi-Sector Applications",
    icon: FaIndustry,
    features: [
      "Agriculture & Forestry",
      "Logistics & Transportation",
      "Power & Mining Operations",
      "Industrial Site Mapping",
    ],
  },
];

const sectorApplications = [
  {
    sector: "Agriculture & Forestry",
    icon: FaTree,
    description:
      "Precision land mapping for agricultural optimization and forest management",
  },
  {
    sector: "Logistics & Transportation",
    icon: FaTruck,
    description:
      "Infrastructure planning and route optimization for transportation networks",
  },
  {
    sector: "Power & Mining Operations",
    icon: FaBolt,
    description: "Site assessment and monitoring for energy and mining sectors",
  },
  {
    sector: "Industrial Site Mapping",
    icon: FaMountain,
    description:
      "Comprehensive mapping solutions for industrial facilities and complexes",
  },
];

export const LandMappingServices: React.FC = () => {
  return (
    <section
      id="mapping"
      className="py-12 lg:py-20 bg-[var(--color-secondary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Land Mapping Services
          </h2>
          <p
            className="text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-primary)" }}
          >
            Advanced drone-based land mapping solutions for agriculture,
            logistics, power, and mining sectors using cutting-edge DGPS RTK
            technology
          </p>
        </motion.div>

        {/* Technology Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 lg:m-12"
        >
          <div className="bg-gradient-to-r from-[var(--color-tertiary)] to-orange-600 rounded-lg p-4 lg:p-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <FaSatellite className="text-white text-2xl lg:text-3xl" />
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                  Cutting-Edge DGPS RTK Technology
                </h3>
                <p className="text-white text-md ">
                  Advanced drone-based mapping with millimeter-level accuracy
                  for precision agriculture and industrial applications
                </p>
              </div>
              <FaSatellite className="text-white text-2xl lg:text-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Row 1: Agricultural Expertise + Tea Garden Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Agricultural Expertise Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-2xl p-4 lg:p-6 border-2 border-gray-200 h-full"
          >
            <div className="flex items-center space-x-3 lg:space-x-4 mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[var(--color-tertiary)] rounded-lg flex items-center justify-center">
                <FaTree className="text-white text-xl lg:text-2xl" />
              </div>
              <h3
                className="text-xl lg:text-2xl font-bold"
                style={{ color: "var(--color-secondary)" }}
              >
                Agricultural Sector Expertise
              </h3>
            </div>
            <p className="text-gray-700 mb-4 lg:mb-6 text-md lg:text-md leading-tight text-left">
              Specialized in agricultural land geo-fencing with DGPS RTK survey
              technology. Successfully completed mapping of Goodrick Tea Garden
              (2.54 Hectares) at North Bengal, West Bengal.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="bg-[var(--color-secondary)] rounded-lg p-3 lg:p-4 text-center">
                <FaChartLine className="text-white text-xl lg:text-2xl mx-auto mb-2" />
                <div className="text-lg lg:text-xl font-bold text-white mb-1">
                  3-4 kms/day
                </div>
                <div className="text-gray-300 text-xs lg:text-sm">
                  Production Rate
                </div>
              </div>
              <div className="bg-[var(--color-tertiary)] rounded-lg p-3 lg:p-4 text-center">
                <FaMap className="text-white text-xl lg:text-2xl mx-auto mb-2" />
                <div className="text-lg lg:text-xl font-bold text-white mb-1">
                  2.54 Hectares
                </div>
                <div className="text-gray-300 text-xs lg:text-sm">Coverage</div>
              </div>
            </div>
            <p className="text-center mt-3 text-sm lg:text-sm italic text-secondary">
              Precision mapping of Goodrick Tea Garden (2.54 Hectares) in North
              Bengal, West Bengal
            </p>
          </motion.div>

          {/* Tea Garden Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <img
              src="/landmapping.jpg"
              alt="Precision mapping of Goodrick Tea Garden (2.54 Hectares) in North Bengal, West Bengal"
              className="rounded-lg shadow-2xl w-full h-64 lg:h-96 object-cover border-4 border-white"
            />
          </motion.div>
        </div>

        {/* Row 2: Tea Garden Image 2 + Sector Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Tea Garden Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col order-2 lg:order-1"
          >
            <img
              src="precessionmapping.png"
              alt="Precision mapping analysis of Goodrick Tea Garden"
              className="rounded-lg shadow-2xl w-full h-56 lg:h-72 object-cover border-4 border-white lg:mt-12"
            />
            <p
              className="text-center mt-3 text-sm lg:text-sm italic"
              style={{ color: "var(--color-primary)" }}
            >
              Detailed mapping analysis and data visualization
            </p>
          </motion.div>

          {/* Sector Applications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3
              className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center"
              style={{ color: "var(--color-primary)" }}
            >
              Multi-Sector Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {sectorApplications.map((app, index) => (
                <motion.div
                  key={app.sector}
                  className="bg-white rounded-lg shadow-lg p-3 lg:p-4 border border-gray-200 hover:shadow-xl transition-all duration-300 h-28 lg:h-32 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-2 lg:space-x-3 mb-2">
                    <div className="bg-[var(--color-tertiary)] w-7 h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <app.icon className="text-white text-xs lg:text-sm" />
                    </div>
                    <h4
                      className="font-semibold text-md"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {app.sector}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-md leading-tight text-left">
                    {app.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 3: Tea Garden Image 3 + Technical Specifications */}
        <div className="">
          {/* Tea Garden Image 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:order-1"
          >
            <img
              src="/arealmapping.jpg"
              alt="Goodrick Tea Garden aerial mapping results"
              className="rounded-lg shadow-2xl w-screen h-64 lg:h-80 object-cover border-4 border-white"
            />
            <p
              className="text-center mt-3 text-sm lg:text-sm italic mb-4 lg:mb-5"
              style={{ color: "var(--color-primary)" }}
            >
              Aerial view of completed mapping project
            </p>
          </motion.div>
        </div>
        {/*  Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-2xl p-6 border-2 border-gray-200"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-[var(--color-tertiary)] rounded-lg flex items-center justify-center">
              <FaCog className="text-white text-xl" />
            </div>
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--color-secondary)" }}
            >
              Technical Specifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
            {technicalSpecs.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <motion.div
                  key={spec.category}
                  className="bg-white border border-gray-200 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-[var(--color-tertiary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white text-sm" />
                    </div>
                    <h4
                      className="font-semibold text-base"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {spec.category}
                    </h4>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mt-5">
                    {spec.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex  space-x-4 items-center"
                      >
                        <span className="text-[var(--color-tertiary)] mt-1 text-md flex-shrink-0">
                          •
                        </span>
                        <span className="text-gray-600 text-md leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>{" "}
        </motion.div>
      </div>
    </section>
  );
};