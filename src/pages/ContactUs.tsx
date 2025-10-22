import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

const ContactUs = () => {
  return (
    <div className="relative overflow-hidden">
      <section
        id="contact"
        className="flex flex-col  lg:flex-row lg:gap-[10vw] py-5 bg-white pb-10"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-2"
        >
          <div className="] ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/055/715/non_2x/contact-us-button-web-banner-templates-illustration-free-vector.jpg"
              className="object-cover h-[60vh]"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-4 text-left items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex justify-center overflow-hidden"
            >
              <div className="flex items-start gap-6">
                <div className="p-1 ">
                  <MapPin className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1 text-gray-600">
                  <p>Meydan Road, Nad Al Sheba</p>
                  <p className="">Dubai, U.A.E.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex justify-center overflow-hidden"
            >
              <div className="flex items-start gap-4 text-gray-600">
                <div className="p-1 rounded-xl ">
                  <Mail className="h-6 w-6 " />
                </div>
                <div className="flex-1">
                  <a href="mailto:connect@Weevildrone.ai" className="text-lg ">
                    connect@Weevildrone.ai
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex justify-center  overflow-hidden text-gray-600"
            >
              <div className="flex items-start gap-4">
                <div className="p-1 ">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <a href="tel:+971XXXXXXXXX" className="text-lg ">
                    +971 XX XXX XXXX
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form  */}
        <div className="order-1">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
