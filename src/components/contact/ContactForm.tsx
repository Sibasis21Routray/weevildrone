
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; 

const ContactForm: React.FC = () => {

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }; 

  return (
    <div className="h-full py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-2xl"
        >
          {/* Form Header */}
          <div className="text-center lg:text-center mt-5">
            <h2 className="flex justify-center gap-4 text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Let's
              <span className="block text-tertiary">Connect</span>
            </h2>
            <p className="text-md text-gray-600 leading-tight max-w-lg font-light text-left lg:ml-10 hidden md:block">
              Let’s discuss how our drone solutions can transform your business.
            </p>
          </div>

          {/* Form  */}
          <div className=" overflow-hidden" style={{ width: "100%" }}>
            <div
              className="mt-[15vh] md:mt-[12vh] pl-[35vw] md:pl-0 "
              style={{ transform: "scale(1.5)" }}
            >
              <iframe
                width="610px"
                height="520px"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=e10b899557a88d61c6401123739f3c71c35f252a7f5fece6ed97cf835d9431d34e6e6029242ed46614683e46df0675a7gid0163f4be18ce6c1b23d80f3eb232b6c94b23e355d667f215d012cada440b2c94"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
