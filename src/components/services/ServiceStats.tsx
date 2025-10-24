import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 500, suffix: "+", label: "Students Trained" },
  { number: 2.54, suffix: " Hectares", label: "Tea Garden Mapped" },
  { number: 3, suffix: "-4 km/day", label: "Mapping Production Rate" },
  { number: 100, suffix: "%", label: "Government Certified" },
];

export const ServiceStats: React.FC = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const currentValue = Math.floor(stat.number * progress);

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <section className="py-16 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "var(--color-tertiary)" }}
              >
                {counters[index]}
                {stat.suffix}
              </div>
              <div
                className="text-sm sm:text-base"
                style={{ color: "var(--color-primary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
