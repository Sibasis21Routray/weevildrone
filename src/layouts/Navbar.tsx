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
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: "about", label: "About", path: "/about" },
    { id: "ourservices", label: "Services", path: "/ourservices" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "team", label: "Team", path: "/team" },
    { id: "contact", label: "Contact", path: "/contactus" },
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
                className="h-8 w-auto md:h-10"
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
              >
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
                {!isActivePath(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6900]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 relative"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`w-6 h-0.5 bg-gray-700 block transition-all ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
              animate={{ 
                rotate: isOpen ? 45 : 0, 
                y: isOpen ? 1 : 0 
              }}
            />
            <motion.span
              className={`w-6 h-0.5 bg-gray-700 block transition-all mt-1.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className={`w-6 h-0.5 bg-gray-700 block transition-all mt-1.5 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
              animate={{ 
                rotate: isOpen ? -45 : 0, 
                y: isOpen ? -1 : 0 
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-3 space-y-1">
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
                      className={`block px-4 py-3 font-medium transition-all duration-200 border-l-4 ${
                        isActivePath(item.path)
                          ? "text-[#FF6900] bg-orange-50 border-[#FF6900]"
                          : "text-gray-700 hover:text-[#FF6900] hover:bg-gray-50 border-transparent hover:border-orange-200"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;