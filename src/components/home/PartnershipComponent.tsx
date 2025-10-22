import { motion } from "framer-motion";

const PartnershipShowcase = () => {
  return (
    <section className="w-full bg-primary py-0">
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
                STRATEGIC ALLIANCE
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-secondary tracking-tight mb-6">
            IIT Kharagpur
            <span className="font-medium bg-gradient-to-r from-tertiary to-orange-600 bg-clip-text text-transparent">
              {" "}
              Partnership
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Partnership Badge */}
            <div className="border-l-4 border-tertiary pl-6 py-1">
              <p className="text-secondary text-sm font-medium mb-1">
                In collaboration with
              </p>
              <p className="text-xl font-semibold text-secondary">
                Indian Institute of Technology Kharagpur
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-secondary">
              <p className="text-lg leading-relaxed">
                Indian Institute of Technology (IIT) Kharagpur has entered into
                a strategic partnership with{" "}
                <span className="font-semibold">Weevils Drones</span>, a leading
                drone manufacturer from Bhubaneswar, to establish an advanced
                drone manufacturing facility under the Startup Ecosystem
                Promotion (STEP) program.
              </p>

              <div className="bg-secondary text-primary p-6">
                <p className="text-sm font-medium mb-2">
                  FACILITY INAUGURATION
                </p>
                <p className="text-2xl font-light">February 11, 2025</p>
              </div>

              {/* <p className="text-lg leading-relaxed">
                This state-of-the-art facility is positioned to significantly
                enhance India's defense capabilities through the production of
                cutting-edge drone technology and advanced aerial systems.
              </p> */}
            </div>
          </motion.div>

          {/* Right Column - Achievement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-secondary text-primary p-8 relative overflow-hidden">
              {/* Minimal decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-tertiary/5 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-tertiary text-sm font-medium tracking-wide">
                    RECOGNITION
                  </span>
                </div>

                <h3 className="text-2xl font-light leading-tight mb-4">
                  Weevils Drones listed in the Science & Technology
                  Entrepreneurs' Park
                </h3>

                <p className="text-primary/80 mb-8 leading-relaxed">
                  IIT Kharagpur has officially recognized Weevils Drones as an
                  innovative startup within their prestigious Science &
                  Technology Entrepreneurs' Park ecosystem.
                </p>

                <motion.button
                  whileHover={{ backgroundColor: "var(--color-tertiary)" }}
                  transition={{ duration: 0.2 }}
                  className="border border-primary px-8 py-3 text-sm font-medium tracking-wide hover:bg-tertiary hover:border-tertiary transition-colors"
                >
                  VIEW DETAILS
                </motion.button>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 border border-secondary/20">
                <div className="text-2xl font-light text-secondary">STEP</div>
                <div className="text-xs text-secondary/70 mt-1">Program</div>
              </div>
              <div className="text-center p-4 border border-secondary/20">
                <div className="text-2xl font-light text-secondary">IIT</div>
                <div className="text-xs text-secondary/70 mt-1">Kharagpur</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipShowcase;