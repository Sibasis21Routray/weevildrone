import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import type { Variants } from "framer-motion";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sagarika Parija",
      position: "Promoter / Director",
      company: "Weevils Drones Initial Funding",
      description:
        "Visionary leader driving innovation in drone technology with extensive experience in business development and strategic planning.",
      skills: [
        "Strategic Planning",
        "Business Development",
        "Innovation Management",
      ],
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/02/sagarika-parija-e1739941191700-200x300.jpg",
    },
    {
      id: 2,
      name: "Ashis Saha",
      position: "CEO",
      company: "Weevils Drones",
      description:
        "Leading Weevils Drones with 37 years of extensive experience in IT Industries, driving technological innovation and business growth.",
      skills: ["IT Leadership", "Business Strategy", "Technology Innovation"],
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/02/Ashis-saha-286x300.jpg",
    },
    {
      id: 3,
      name: "Narendra Das",
      position: "CTO",
      company: "Weevils Drones",
      description:
        "Chief Technology Officer with 25 years of experience in IT Industries and CEO of Quotus Solutions, bringing financial expertise and strategic oversight.",
      skills: [
        "Technical Management",
        "IT Industry Experience",
        "Strategic Planning",
      ],
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/02/Narendra-Das-e1739941082342-276x300.jpg",
    },
    {
      id: 4,
      name: "Siddhartha Sircar",
      position: "Director",
      company: "Weevils Drones",
      description:
        "Director with 37 years of experience in Education Domain, in charge of IIT KGP STEP Workshop, driving technological advancement in drone.",
      skills: [
        "Education Technology",
        "IIT KGP STEP Workshop",
        "Technical Leadership",
      ],
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/02/sidharth-sircar.jpg",
    },
    {
      id: 5,
      name: "Prasun Kr. Paul",
      position: "Director Sales",
      company: "Weevils Drones",
      description:
        "Director Sales with 30 years of experience in IT service Industries, specializing in sales and marketing of group companies.",
      skills: ["Sales Management", "IT Services", "Marketing Strategy"],
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/02/prasun-kr-paul-300x296.jpg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

 
  const cardVariants:Variants = {
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-white min-h-screen">
      {/* Header Section with Background */}
      <div
        className="relative pt-20 pb-80 overflow-hidden bg-gray-200"
        style={{
          backgroundImage: `
          linear-gradient(rgba(74, 144, 226, 0.2), rgba(74, 144, 226, 0)),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Meet The Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The innovative minds behind Weevils Drone technology, driving the
              future of aerial engineering.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative -mt-60">
        {" "}
        {/* Negative margin to pull cards up */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-fill transition-transform duration-500 "
                  />

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
                      <FaLinkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
                      <FaEnvelope className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name and Position */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-tertiary font-semibold text-sm mb-1">
                      {member.position}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-tertiary/10 text-tertiary text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Experience</span>
                      <span className="text-sm font-semibold text-tertiary">
                        {member.id === 1 && "15+ Years"}
                        {member.id === 2 && "37 Years"}
                        {member.id === 3 && "25 Years"}
                        {member.id === 4 && "37 Years"}
                        {member.id === 5 && "30 Years"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Accent Border */}
                <div className="h-1 bg-gradient-to-r from-tertiary to-orange-400"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 bg-white rounded-2xl shadow-lg p-8" // Increased mt to account for overlap
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-tertiary mb-2">5+</div>
              <div className="text-sm text-gray-600">Expert Leaders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tertiary mb-2">144+</div>
              <div className="text-sm text-gray-600">Combined Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tertiary mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tertiary mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-tertiary text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Join Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
