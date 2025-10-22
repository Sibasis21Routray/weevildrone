import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaPlay, FaExternalLinkAlt } from "react-icons/fa";

const SocialUpdates = () => {
  const socialData = [
    {
      platform: "Instagram",
      type: "Reel",
      title: "IIT Kharagpur Partnership Announcement",
      description: "Watch the official announcement of our partnership with IIT Kharagpur for the new drone manufacturing facility.",
      action: "View Reel",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      icon: FaInstagram,
      actionIcon: FaPlay,
      link: "#"
    },
    {
      platform: "X",
      type: "Tweet",
      title: "Official IIT Kharagpur Tweet",
      description: "IIT Kharagpur's official announcement about the drone manufacturing factory inauguration.",
      action: "View Tweet",
      color: "from-gray-800 to-black",
      gradient: "bg-gradient-to-br from-gray-800 to-black",
      icon: FaTwitter,
      actionIcon: FaExternalLinkAlt,
      link: "#"
    },
    {
      platform: "LinkedIn",
      type: "Professional Update",
      title: "Professional Network Update",
      description: "Detailed LinkedIn post about the strategic partnership and its impact on India's defense sector.",
      action: "View Post",
      color: "from-blue-600 to-blue-700",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
      icon: FaLinkedin,
      actionIcon: FaExternalLinkAlt,
      link: "#"
    }
  ];

  return (
    <section className="w-full bg-primary py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border border-tertiary px-6 py-2 mb-6">
              <span className="text-tertiary text-sm font-medium tracking-wider">
                Social Updates
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-secondary tracking-tight mb-6">
            Stay
            <span className="font-medium bg-gradient-to-r from-tertiary to-orange-600 bg-clip-text text-transparent">
              {" "}
              Connected
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary/60 max-w-2xl mx-auto leading-relaxed">
            Follow our journey through latest developments and strategic
            partnerships
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialData.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              {/* Main Card */}
              <div className="relative text-left bg-white rounded-2xl border border-secondary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 flex items-center justify-center text-white`}
                      >
                        <social.icon
                          className={`w-full h-full ${social.gradient} rounded-md`}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary">
                          {social.platform}
                        </h3>
                        <p className="text-xs text-secondary/50">
                          {social.type}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-secondary mb-4 leading-tight">
                      {social.title}
                    </h4>
                    <p className="text-secondary/70 leading-relaxed">
                      {social.description}
                    </p>
                  </div>

                  {/* Action Button - Pushed to bottom */}
                  <div className="mt-auto pt-6">
                    <motion.button
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-full text-sm font-medium hover:bg-tertiary transition-all duration-300 group/btn w-full justify-center"
                    >
                      {social.action}
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <social.actionIcon className="w-3 h-3" />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialUpdates;