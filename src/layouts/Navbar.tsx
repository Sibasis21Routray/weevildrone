import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "ourservices", label: "Services", path: "/ourservices" },
    { id: "contact", label: "Contact", path: "/contactus" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "team", label: "Team", path: "/team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuVariants = {
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

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
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

  const isActivePath = (path: string): boolean => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg backdrop-blur-md bg-opacity-95"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
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
                  className="h-8 w-auto"
                />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              >
                <Link
                  to={item.path}
                  className={`font-medium transition-colors duration-200 relative ${
                    isActivePath(item.path)
                      ? "text-tertiary"
                      : "text-secondary hover:text-tertiary"
                  }`}
                >
                  {item.label}
                  {isActivePath(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-tertiary"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
                {!isActivePath(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-tertiary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}

            {/* CTA Button */}
            {/* <motion.button
              className="bg-tertiary text-primary px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 105, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              Get Started
            </motion.button> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`w-6 h-0.5 bg-secondary block transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 2 : 0 }}
            />
            <motion.span
              className={`w-6 h-0.5 bg-secondary block transition-all ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className={`w-6 h-0.5 bg-secondary block transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -2 : 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-primary border-t border-gray-200"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    custom={index}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                        isActivePath(item.path)
                          ? "text-tertiary bg-tertiary bg-opacity-10 rounded-md mx-2"
                          : "text-secondary hover:text-tertiary hover:bg-gray-100 rounded-md mx-2"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  className="w-full mx-4 bg-tertiary text-primary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={navItems.length}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
