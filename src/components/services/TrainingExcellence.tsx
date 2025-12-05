import { motion } from "framer-motion";

const trainingHighlights = [
  {
    title: "Theoretical Training",
    description:
      "Comprehensive theoretical training on drone flying concepts and principles",
  },
  {
    title: "Drone Types & UAVs",
    description:
      "Different types of Drones/UAVs and their specific applications",
  },
  {
    title: "Assembly & Maintenance",
    description: "Hands-on training in RC drone assembly and maintenance",
  },
  {
    title: "Flight Training",
    description:
      "Practical drone flying training for multi-rotor and fixed-wing aircraft",
  },
];

export const TrainingExcellence: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-secondary)]">
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
            style={{ color: "var(--color-primary)" }}
          >
            Training Excellence
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Professional Drone Training
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Comprehensive drone training program for 1 Bengal Air NCC students
              at Behala Flying Club, Kolkata, West Bengal. Central Government
              makes it mandatory for NCC students to get trained on Drone
              Technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {trainingHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4
                    className="font-semibold text-lg mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {highlight.title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="trainning1.jpg" 
              alt="NCC students receiving hands-on drone training at Behala Flying Club, Kolkata"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <p
              className="text-center mt-4 text-sm italic"
              style={{ color: "var(--color-primary)" }}
            >
              NCC students receiving hands-on drone training at Behala Flying
              Club, Kolkata
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
