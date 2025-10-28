import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaInstagram, FaLinkedin, } from "react-icons/fa";
import {  FaX } from "react-icons/fa6";
import { LocateIcon, Mail } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  const productItems = [
    {
      id: "icarus",
      label: "icarus",
      path: "/products/icarus",
    },
    {
      id: "eagle-eye",
      label: "Eagle Eye",
      path: "/products/eagle-eye",
    },
    {
      id: "nayanavat",
      label: "Nayanavat",
      path: "/products/nayanavat",
    },
    {
      id: "gandiva",
      label: "Gandiva",
      path: "/products/gandiva",
    },
    {
      id: "varchas",
      label: "Varchas",
      path: "/products/varchas",
    },
    {
      id: "indrajit",
      label: "Indrajit",
      path: "/products/indrajit",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/weevils-drones",
    },
    {
      name: "Twitter",
      icon: FaX,
      url: "https://x.com/WeEvilsDrones",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/weevildrone/",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/ourservices" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contactus" },
  ];

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
    // Add your subscription API call here
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="w-full bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden text-left"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #FF6900 2%, transparent 0%), radial-gradient(circle at 75px 75px, #FF6900 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <img
                src="https://weevildrone.co.in/wp-content/uploads/2025/09/cropped-WhatsApp-Image-2025-08-27-at-1.11.53-PM.jpeg"
                alt="Logo"
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  WEEVILS DRONES
                </h3>
                <p className="text-gray-400 text-sm">PRIVATE LIMITED</p>
              </div>
            </motion.div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of drone technology with cutting-edge
              solutions for defense, agriculture, and industrial applications.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-orange-500"
                >
                  <LocateIcon />
                </motion.div>
                <p className="text-sm">
                  Duplex No-A/10 (Hill View Resorts),
                  <br />
                  Plot No 386/2123/2882, Kantabada
                  <br />
                  Bhubaneswar 752054
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-orange-500"
                >
                  <Mail />
                </motion.div>
                <a
                  href="mailto:info@weevildrone.co.in"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  info@weevildrone.co.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 mx-[5vw]"
          >
            <h4 className="text-lg font-semibold mb-6 text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors ${
                      location.pathname === link.path
                        ? "text-orange-400 font-semibold"
                        : ""
                    }`}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-1 h-1 bg-orange-500 rounded-full"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-orange-400">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productItems.map((product) => (
                <motion.li
                  key={product.id}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 45 }}
                    className="text-orange-500 text-sm"
                  >
                    ✦
                  </motion.div>
                  <Link
                    to={product.path}
                    className={`hover:text-orange-400 transition-colors ${
                      location.pathname === product.path
                        ? "text-orange-400 font-semibold"
                        : ""
                    }`}
                  >
                    {product.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-1 ">
            <h4 className="text-lg font-semibold mb-6 text-orange-400">
              Stay Updated
            </h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to get updates on our latest drone technologies and
              solutions.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-400 transition-all"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Subscribe
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="flex items-center justify-center mt-6">
              <p className="text-gray-300  text-sm">Follow Us :</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xl">
                      <social.icon />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 WEEVILS DRONES PRIVATE LIMITED. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <motion.a
                href="#"
                whileHover={{ color: "#FF6900" }}
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#FF6900" }}
                className="hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#FF6900" }}
                className="hover:text-orange-400 transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
