// ThankYouPage.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle, Home, Clock, ArrowRight } from "lucide-react";

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to home page after countdown
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen  flex items-start justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        {/* Main Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className=" pt-12 rounded-3xl lg:mt-12 "
        >
          <div className=" ">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.4,
              }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-[#FF6900] relative z-10" />
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="text-center mb-10">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-[#333333] mb-4"
              >
                Thank You!
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-xl text-[#666666] mb-6"
              >
                Your submission has been received successfully.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg text-[#555555] mb-8"
              >
                We appreciate you taking the time to complete our form. Our team
                will review your information and get back to you shortly.
              </motion.p>
            </div>

            

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#FF6900] text-white font-semibold rounded-xl hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                onClick={() => (window.location.href = "/")}
              >
                <Home size={20} />
                Back to Home
              </motion.button>

              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#333333] font-semibold rounded-xl border-2 border-[#FF6900] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Support
                <ArrowRight size={20} />
              </motion.button>
            </div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <Clock size={16} className="text-[#FF6900]" />
                <span className="text-[#333333] text-sm">
                  Redirecting to homepage in{" "}
                  <span className="font-bold text-[#FF6900]">{countdown}</span>{" "}
                  seconds
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ThankYouPage;
