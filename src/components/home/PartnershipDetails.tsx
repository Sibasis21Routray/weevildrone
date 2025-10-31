import { motion } from "framer-motion";
import { GiTargetPoster } from "react-icons/gi";
import {  FaHandshake } from "react-icons/fa";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";



const PartnershipComponent = () => {

  const cards = [
    {
      title: "Partnership",
      icon: <FaHandshake className="text-xl text-tertiary" />,
      text: "IIT Kharagpur collaborated with Bhubaneswar-based Weevils Drones",
    },
    {
      title: "Purpose",
      icon: <GiTargetPoster className="text-xl text-tertiary" />,
      text: "To set up a state-of-the-art drone manufacturing factory",
    },
    {
      title: "Program",
      icon: <FaGraduationCap className="text-xl text-tertiary" />,
      text: "The initiative is part of the STEP program",
    },
    {
      title: "Goal",
      icon: <FaFontAwesomeFlag className="text-xl text-tertiary" />,
      text: "To contribute to the growth of India's defense sector",
    },
  ];

  
  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white  p-5 shadow-md hover:shadow-xl border border-gray-200 transition-all"
            >
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="bg-tertiary/10 p-3 rounded-lg">{card.icon}</div>
                <h3 className="text-tertiary font-semibold text-lg">
                  {card.title}
                </h3>
              </div>
              <p className="text-secondary text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quotes Section - Enhanced */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Quote 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white  p-6 lg:p-8 border border-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="absolute left-6 top-6 text-6xl text-tertiary transform -translate-y-2">
                "
              </div>
              <blockquote className="text-sm lg:text-md text-secondary leading-relaxed mb-6 relative z-10 italic">
                "Weevils is one of the most trusted drone manufacturers in
                India. Together, we aim to build drones with more advanced
                technology, right here at IIT Kharagpur."
              </blockquote>
              <div className="border-t border-secondary/10 pt-4">
                <p className="font-semibold text-secondary text-lg">
                  Prof. Khanindra Pathak
                </p>
                <p className="text-sm text-secondary/70">
                  MD STEP, IIT Kharagpur
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white  p-6 lg:p-8 border border-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="absolute left-6 top-6 text-6xl text-tertiary transform -translate-y-2">
                "
              </div>
              <blockquote className="text-sm lg:text-md text-secondary leading-relaxed mb-6 relative z-10 italic">
                "Our goal is to provide the country with drones equipped with
                advanced technology at the right price. IIT Kharagpur will offer
                scientific and technical support, ensuring no parts need to be
                imported."
              </blockquote>
              <div className="border-t border-secondary/10 pt-4">
                <p className="font-semibold text-secondary text-lg">
                  Siddharth Sarkar
                </p>
                <p className="text-sm text-secondary/70">
                  Director of Weevils Drones
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipComponent;
