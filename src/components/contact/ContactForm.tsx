import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import type { Variants } from "framer-motion"; 

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      const { name, email, subject, message } = formData;
      window.location.href = `mailto:info@Weevildrone.co.in?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

      setTimeout(() => {
        setIsSending(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
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
            <p className="text-md text-gray-600 leading-tight max-w-lg font-light text-left lg:ml-10">
              Let’s discuss how our drone solutions can transform your business.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div variants={item} className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center space-x-2 text-sm font-medium text-secondary"
                  >
                    <FiUser className="w-4 h-4 text-tertiary" />
                    <span>Your Name</span>
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all duration-300 bg-white"
                    placeholder="Enter your full name"
                    required
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(255, 105, 0, 0.1)",
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={item} className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center space-x-2 text-sm font-medium text-secondary"
                  >
                    <FiMail className="w-4 h-4 text-tertiary" />
                    <span>Email Address</span>
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all duration-300 bg-white"
                    placeholder="your@email.com"
                    required
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(255, 105, 0, 0.1)",
                    }}
                  />
                </motion.div>
              </div>

              {/* Subject Field */}
              <motion.div variants={item} className="space-y-2">
                <label
                  htmlFor="subject"
                  className="flex items-center space-x-2 text-sm font-medium text-secondary"
                >
                  <FiMessageSquare className="w-4 h-4 text-tertiary" />
                  <span>Subject</span>
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all duration-300 bg-white"
                  placeholder="What's this regarding?"
                  required
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(255, 105, 0, 0.1)",
                  }}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={item} className="space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center space-x-2 text-sm font-medium text-secondary"
                >
                  <FiMessageSquare className="w-4 h-4 text-tertiary" />
                  <span>Your Message</span>
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-tertiary/20 transition-all duration-300 bg-white resize-none"
                  placeholder="Tell us about your project..."
                  required
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 3px rgba(255, 105, 0, 0.1)",
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={item} className="">
                <motion.button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-2 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSending
                      ? "bg-tertiary/70 cursor-not-allowed"
                      : "bg-tertiary hover:bg-orange-600 hover:shadow-lg active:scale-95"
                  } text-white shadow-md`}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FiMail className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactForm;
