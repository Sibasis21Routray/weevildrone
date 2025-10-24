import { motion } from "framer-motion";

const technicalSpecs = [
  {
    category: "Precision Mapping",
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
    features: [
      "Agriculture & Forestry",
      "Logistics & Transportation",
      "Power & Mining Operations",
      "Industrial Site Mapping",
    ],
  },
];

export const PrecisionMapping: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Precision Mapping
            </h2>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Land Mapping Services
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Advanced drone-based land mapping solutions for agriculture,
              logistics, power, and mining sectors using cutting-edge DGPS RTK
              technology.
            </p>

            <div className="mb-8">
              <h4
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Agricultural Sector Expertise
              </h4>
              <p className="mb-4" style={{ color: "var(--color-primary)" }}>
                Specialized in agricultural land geo-fencing with DGPS RTK
                survey technology. Successfully completed mapping of Goodrick
                Tea Garden (2.54 Hectares) at North Bengal, West Bengal.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-lg bg-white bg-opacity-10">
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "var(--color-tertiary)" }}
                  >
                    3-4 kms/day
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Production Rate
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white bg-opacity-10">
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "var(--color-tertiary)" }}
                  >
                    2.54 Hectares
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Coverage
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/tea-garden-mapping.jpg" // Replace with your tea garden mapping image
              alt="Precision mapping of Goodrick Tea Garden (2.54 Hectares) in North Bengal, West Bengal"
              className="rounded-lg shadow-2xl w-full h-64 object-cover mb-4"
            />
            <p
              className="text-center text-sm italic mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Precision mapping of Goodrick Tea Garden (2.54 Hectares) in North
              Bengal, West Bengal
            </p>

            <div className="space-y-6">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={spec.category}
                  className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4
                    className="font-semibold text-lg mb-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {spec.category}
                  </h4>
                  <ul className="space-y-2">
                    {spec.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <span className="text-[var(--color-tertiary)] mt-1">
                          •
                        </span>
                        <span style={{ color: "var(--color-primary)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
