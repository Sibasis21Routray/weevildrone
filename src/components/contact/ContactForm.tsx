
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
              className="mt-[15vh] md:mt-[15vh] pl-[35vw] md:pl-0 "
              style={{ transform: "scale(1.5)" }}
            >
              <iframe
                width="610px"
                height="620px"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=799b8397f0baf55efe49fe751fd5b304758754d61cb180cb81c499ec19075f74f0fd28f95f8b7c049ebef48a01c6fd84gida8b8768becf62d994b7b4042b57b70c12bb87368801de6b8f50b358d824be255"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
