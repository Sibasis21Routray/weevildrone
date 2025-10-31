import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import type { Variants } from "framer-motion";

// Types
interface NavItem {
  id: string;
  label: string;
  path: string;
}

interface NavbarProps {
  logo?: string;
  companyName?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: "about", label: "About", path: "/about" },
    { id: "ourservices", label: "Services", path: "/ourservices" },
    { id: "product", label: "Product", path: "" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "team", label: "Team", path: "/team" },
    { id: "contact", label: "Contact", path: "/contactus" },
  ];

  const productItems = [
    {
      id: "icarus",
      label: "Icarus",
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsProductMenuOpen(false);
  }, [location.pathname]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const productMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  const dropdownVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const isActivePath = (path: string): boolean => {
    if (path === "/") {
      return location.pathname === "/";
    }
    if (path === "") {
      // For Product menu, check if any product path is active
      return productItems.some((product) =>
        location.pathname.startsWith(product.path)
      );
    }
    return location.pathname.startsWith(path);
  };

  const isProductActive = isActivePath("");

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-md bg-opacity-95 "
          : "bg-white bg-opacity-90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2 no-underline">
              <img
                src="https://weevildrone.co.in/wp-content/uploads/2025/09/cropped-WhatsApp-Image-2025-08-27-at-1.11.53-PM.jpeg"
                alt="Logo"
                className="h-8 w-auto md:h-12 object-center"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                onMouseEnter={() =>
                  item.id === "product" && setIsProductHovered(true)
                }
                onMouseLeave={() =>
                  item.id === "product" && setIsProductHovered(false)
                }
              >
                {item.id === "product" ? (
                  <div className="relative">
                    <div
                      className={`font-medium text-sm lg:text-base transition-colors duration-200 relative px-2 py-1 cursor-pointer ${
                        isProductActive || isProductHovered
                          ? "text-[#FF6900] font-semibold"
                          : "text-gray-700 hover:text-[#FF6900]"
                      }`}
                    >
                      {item.label}
                      {(isProductActive || isProductHovered) && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6900]"
                          layoutId="activeIndicator"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>

                    {/* Product Dropdown */}
                    <AnimatePresence>
                      {isProductHovered && (
                        <motion.div
                          className="absolute text-left top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100/80 py-3 z-50"
                          variants={dropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          onMouseEnter={() => setIsProductHovered(true)}
                          onMouseLeave={() => setIsProductHovered(false)}
                          style={{
                            boxShadow:
                              "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 105, 0, 0.05)",
                          }}
                        >
                          {/* Dropdown Header */}
                          <div className="px-4 py-2 border-b border-gray-100/60 mb-1">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Our Products
                            </h3>
                          </div>

                          {/* Product Items */}
                          <div className="space-y-1">
                            {productItems.map((product, index) => (
                              <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={product.path}
                                  className={`flex items-center px-4 py-1 text-sm transition-all duration-200 group relative ${
                                    location.pathname.startsWith(product.path)
                                      ? "text-[#FF6900] bg-gradient-to-r from-orange-50 to-red-50 font-semibold border-r-2 border-[#FF6900]"
                                      : "text-gray-700 hover:text-[#FF6900] hover:bg-orange-50/80"
                                  }`}
                                >
                                  {/* Active Indicator */}
                                  {location.pathname.startsWith(
                                    product.path
                                  ) && (
                                    <motion.div
                                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#FF6900] rounded-r-full"
                                      layoutId="activeIndicator"
                                      transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                      }}
                                    />
                                  )}

                                  {/* Product Name */}
                                  <span className="flex-1 font-medium">
                                    {product.label}
                                  </span>

                                  {/* Hover Arrow */}
                                  <motion.div
                                    className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                                    initial={false}
                                  >
                                    <svg
                                      className="w-4 h-4 text-[#FF6900]"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </motion.div>
                                </Link>

                                {/* Separator */}
                                {index < productItems.length - 1 && (
                                  <div className="mx-4 border-t border-gray-100/50" />
                                )}
                              </motion.div>
                            ))}
                          </div>

                          {/* Dropdown Footer */}
                          <div className="px-4 py-2 border-t border-gray-100/60 mt-2">
                            <div className="text-xs text-gray-400 text-center">
                              {productItems.length} innovative solutions
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium text-sm lg:text-base transition-colors duration-200 relative px-2 py-1 ${
                      isActivePath(item.path)
                        ? "text-[#FF6900] font-semibold"
                        : "text-gray-700 hover:text-[#FF6900]"
                    }`}
                  >
                    {item.label}
                    {isActivePath(item.path) && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6900]"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )}
                {!isActivePath(item.path) && item.id !== "product" && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6900]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button - Fixed with proper cross animation */}
          <motion.button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative bg-gray-100 rounded-lg border border-gray-300 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-gray-800 block absolute"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -6,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-800 block absolute"
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-800 block absolute"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 6,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-2xl"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-2 px-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    custom={index}
                    className="relative"
                  >
                    {item.id === "product" ? (
                      <div
                        className={`rounded-xl transition-all duration-200 ${
                          isProductActive
                            ? "bg-gradient-to-r from-orange-50 to-red-50 ring-1 ring-orange-200"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setIsProductMenuOpen(!isProductMenuOpen)
                          }
                          className={`w-full text-left px-4 py-4 font-medium transition-all duration-200 flex items-center justify-between rounded-xl ${
                            isProductActive
                              ? "text-[#FF6900] font-semibold"
                              : "text-gray-900 hover:text-[#FF6900]"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-base font-medium">
                              {item.label}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isProductMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-1 rounded-lg ${
                              isProductActive ? "bg-orange-100" : "bg-gray-100"
                            }`}
                          >
                            <svg
                              className={`w-4 h-4 transition-colors ${
                                isProductActive
                                  ? "text-[#FF6900]"
                                  : "text-gray-600"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isProductMenuOpen && (
                            <motion.div
                              className="ml-4 mr-4 mb-2 space-y-1 overflow-hidden"
                              variants={productMenuVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              <div className="bg-white/80 rounded-lg p-2 border border-gray-100 shadow-sm">
                                {productItems.map((product, productIndex) => (
                                  <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: productIndex * 0.1 }}
                                  >
                                    <Link
                                      to={product.path}
                                      className={`flex items-center space-x-3 px-3 py-3 text-sm transition-all duration-200 rounded-lg group ${
                                        location.pathname.startsWith(
                                          product.path
                                        )
                                          ? "bg-gradient-to-r from-[#FF6900] to-orange-600 text-white shadow-lg"
                                          : "text-gray-700 hover:bg-orange-50 hover:text-[#FF6900]"
                                      }`}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setIsProductMenuOpen(false);
                                      }}
                                    >
                                      <span
                                        className={`font-medium ${
                                          location.pathname.startsWith(
                                            product.path
                                          )
                                            ? "text-white"
                                            : ""
                                        }`}
                                      >
                                        {product.label}
                                      </span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-4 font-medium transition-all duration-200 rounded-xl group ${
                          isActivePath(item.path)
                            ? "bg-gradient-to-r from-[#FF6900] to-orange-600 text-white shadow-lg"
                            : "text-gray-900 hover:bg-gray-50 hover:text-[#FF6900]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-base font-medium">
                          {item.label}
                        </span>
                        {isActivePath(item.path) && (
                          <motion.div
                            className="ml-auto"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                        )}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-4 border-t border-gray-100 bg-gray-50/50"
              >
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-medium">
                    WEEVILS DRONES PRIVATE LIMITED
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Advanced Drone Technology Solutions
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
