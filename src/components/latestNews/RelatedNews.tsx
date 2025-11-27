import React from "react";
import { motion } from "framer-motion";
import { newsData } from "../../data/LatestNewsData";
import { useNavigate } from "react-router-dom";

interface RelatedNewsProps {
  skipId: string;
}

const RelatedNews: React.FC<RelatedNewsProps> = ({ skipId }) => {
  const filteredNews = newsData.filter((item) => item.id !== skipId);
  const navigate =useNavigate();
  return (
    <aside className="bg-[var(--color-primary)] text-[var(--color-secondary)] w-full lg:w-[360px] p-4  shadow-md border border-gray-200 text-left">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2 text-[var(--color-tertiary)]">
        Related News
      </h2>

      <div className="space-y-4">
        {filteredNews.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={()=>navigate(item.url)}
            rel="noopener noreferrer"
            className="flex gap-3 items-start group  hover:bg-gray-50 transition-all duration-300 p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Thumbnail */}
            <div className="relative min-w-[90px] h-[70px] overflow-hidden ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Text Info */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-[var(--color-tertiary)] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {item.descreption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default RelatedNews;
