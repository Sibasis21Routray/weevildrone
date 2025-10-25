
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  image?: string;
  layout?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  description,
  image,
  layout,
}) => {
 
 

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1e] to-[#16213e]">
       {/* Static Heading Text */}
              <motion.div
                className="mt-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6900] via-[#ff8c42] to-[#FF6900]">
                    Advanced Drone Technology
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 font-light">
                  Precision Engineering for Modern Applications
                </p>
              </motion.div>
      {/* Main Content */}
      <div className="relative z-10  flex items-start mt-10 justify-center ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              layout === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <motion.div
              className="order-2 lg:order-1 "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >

              {/* Title with Futuristic Effect */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
              >
                
                  <motion.span
                    className="inline-block mr-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  
                  >
                    {name}
                  </motion.span>
                
              </motion.h1>

              {/* Description with Glass Effect */}
              <motion.div
                className="mb-10 relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6900]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#FF6900]/30 transition-all">
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    {description}
                  </p>
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FF6900] rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6900] rounded-br-2xl" />
                </div>
              </motion.div>

             
            </motion.div>

            {/* Image/Video Content */}
            <motion.div
              className={`relative order-1 lg:order-2 ${
                layout === "right" ? "lg:order-1" : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative p-4 flex items-center justify-center">
               

                {/* Main Image Container */}
                <div className="relative w-full max-w-2xl z-10">
                  {/* Corner Frame Elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#FF6900]" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-[#FF6900]" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-[#FF6900]" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#FF6900]" />

                  
                  {/* Image with Holographic Effect */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image}
                      alt="Hero visual"
                      className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border-2 border-[#FF6900]/50 backdrop-blur-sm"
                    />
                    
                    

                  </motion.div>

                  {/* Tech Lines */}
                  <motion.div
                    className="absolute -right-12 top-1/4 w-32 h-px bg-gradient-to-r from-[#FF6900] to-transparent"
                  
                  />
                  <motion.div
                    className="absolute -left-12 bottom-1/4 w-32 h-px bg-gradient-to-l from-[#FF6900] to-transparent"
                   
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;