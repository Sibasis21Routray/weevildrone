import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import { useState, useEffect } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Force animation to trigger on component mount
  useEffect(() => {
    setIsVisible(true);

    // Additional trigger after a small delay to ensure rendering
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants with fallbacks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-white">
      <section id="contact" className="flex flex-col lg:flex-row lg:gap-[10vw]">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 lg:flex-1 lg:order-2 mb-8 lg:mb-0"
        >
          <ContactForm />
        </motion.div>

        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="order-2 lg:flex-1"
        >
          <motion.div variants={itemVariants} className="">
            <img
              src="/contact.jpg"
              alt="Contact Us"
              className="object-fill h-fit lg:h-[40vh] w-full rounded-lg mt-5 "
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3EContact Us%3C/text%3E%3C/svg%3E";
              }}
            />
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-1 text-left mt-3">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="p-2 bg-gray-100 rounded-lg  transition-colors duration-300">
                <MapPin className="h-6 w-6 text-gray-600 " />
              </div>
              <div className="flex-1 text-gray-600">
                <p className="font-medium">Our Address</p>
                <p>Plot No 386/2123/2882, Kantabada</p>
                <p>Bhubaneswar 752054</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="p-2 bg-gray-100 rounded-lg transition-colors duration-300">
                <Mail className="h-6 w-6 text-gray-600 " />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-600">Email Us</p>
                <a
                  href="mailto:connect@Weevildrone.ai"
                  className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  info@Weevildrone.co.in
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="p-2 bg-gray-100 rounded-lg transition-colors duration-300">
                <Phone className="h-6 w-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-600">Call Us</p>
                <a
                  href="tel:+91 89814 45777"
                  className="text-gray-600 transition-colors duration-300"
                >
                  +91 89814 45777
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
