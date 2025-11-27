import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { newsData } from "../../data/LatestNewsData";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LatestNewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleViewAllNews = () => setShowAll(!showAll);

  const displayedNews = showAll ? newsData : newsData.slice(0, 3);

  // 🔹 Reusable animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-primary py-10 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-block border border-tertiary px-5 py-2 mb-5 sm:mb-6">
            <span className="text-tertiary text-sm sm:text-base font-medium tracking-wider uppercase">
              Latest Updates
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-secondary tracking-tight leading-tight">
            News & Events
          </h2>

          <p className="text-base sm:text-lg text-secondary/80 mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed px-2">
            Stay updated with our latest achievements, events, and milestones in
            advancing drone technology.
          </p>
        </motion.div>

        {/* News Cards */}
        <div className="space-y-6 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {displayedNews.map((news, index) => {
              const isImageLeft = news.layout === "image-left";

              return (
                <motion.article
                  key={news.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  exit={{
                    opacity: 0,
                    y: -10,
                    transition: { duration: 0.25 },
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex flex-col sm:flex-row text-left border border-secondary/10 hover:border-secondary/20 transition-all duration-300 group rounded-xl overflow-hidden bg-white ${
                    !isImageLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative w-full sm:w-1/3 md:w-2/4 h-34 sm:h-auto ">
                    <motion.img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out"
                      whileHover={{ scale: 1.03 }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full flex flex-col justify-between py-4 px-5">
                    <div>
                      <span className="font-light text-xs sm:text-sm">
                        {news.date}
                      </span>
                      <h3 className="text-xl sm:text-xl md:text-xl font-semibold text-secondary mb-2 sm:mb-3  transition-colors duration-200">
                        {news.title}
                      </h3>
                      <div className="border-l-4 border-tertiary pl-3 sm:pl-4 py-5 mb-3 sm:mb-4">
                        <blockquote className="text-secondary/80 italic text-sm sm:text-base leading-relaxed max-w-full line-clamp-3">
                          {news.descreption}
                        </blockquote>
                        <div className="mt-3 sm:mt-4">
                          <p className="font-semibold text-secondary text-sm sm:text-base">
                            {news.author}
                          </p>
                          <p className="text-secondary/60 text-xs sm:text-sm">
                            {news.position}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div>
                      <button
                        onClick={() => navigate(news.url)}
                        className="text-tertiary font-semibold text-sm sm:text-base hover:underline flex items-center gap-1 "
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All / Less Button */}
        {newsData.length > 3 && (
          <motion.div
            onClick={handleViewAllNews}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto w-fit flex items-center justify-center mt-8 sm:mt-10 px-6 sm:px-8 py-2.5 bg-orange-500 text-primary font-semibold text-base sm:text-lg rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            {showAll ? (
              <div className="flex items-center gap-2">
                <span>View Less</span>
                <MdKeyboardDoubleArrowUp className="text-xl" />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>View All</span>
                <MdKeyboardDoubleArrowDown className="text-xl" />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LatestNewsSection;
