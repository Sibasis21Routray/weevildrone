import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaLeaf,
  FaUserCheck,
  FaEye,
  FaBullseye,
  FaHistory,
} from "react-icons/fa";
import type { Variants } from "framer-motion";

const MissionValues = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Data for Why Choose Us - Updated with appropriate icons
  const whyChooseUsData = [
    {
      id: 1,
      icon: FaEye, // Changed from FaCogs to FaEye for Vision
      title: "Our Vision",
      description:
        "To innovate and manufacture with perfection and precision every thought a client .",
    },
    {
      id: 2,
      icon: FaBullseye, // Changed from FaRocket to FaBullseye for Mission
      title: "Our Mission",
      description:
        "To provide cutting-edge drone solutions that seemingly never existed.",
    },
    {
      id: 3,
      icon: FaHistory, // Changed from FaAward to FaHistory for Story
      title: "Our Story",
      description:
        "Started in 2019 with a vision to redefine and extend the potential of unmanned aerial systems. Over the years, we have evolved into a trusted partner for industries across the world. We have provided them with drones that have reinvented efficiency and reliability, In the skies of the future, our drones shall be technologically equipped to brave every challenge.",
    },
  ];

  // Data for Core Values
  const coreValuesData = [
    {
      id: 1,
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Ceaseless improvement, A continuum of technological innovation State of the Art technology.",
    },
    {
      id: 2,
      icon: FaLeaf,
      title: "Sustainability",
      description: "Eco-friendly solutions for a better tomorrow.",
    },
    {
      id: 3,
      icon: FaUserCheck,
      title: "Customer Success",
      description: "Customer satisfaction is our satisfaction.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Mission & Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation in unmanned aerial systems with precision,
            purpose, and passion.
          </p>
        </motion.div>

        {/* Vision, Mission & Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-left">
            {/* Bullet Points Section */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {whyChooseUsData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

             {/* Image Section */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D5612AQEDUDcu7Otl-w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655080622287?e=2147483647&v=beta&t=Kz8UKcGmr7qn6a9csEVeSKPtbqdZyv_igejPGmJ2RZs"
                  alt="Why Choose Our Drone Solutions"
                  className="w-full h-96 object-fill "
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our innovation and define our commitment
              to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValuesData.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 text-center group"
              >
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValues;