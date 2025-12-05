import React from "react";
import { useNavigate } from 'react-router-dom';


const CTASection: React.FC = () => {
  const navigate = useNavigate();
  const handleContactClick = () => navigate("/contact");

  return (
    <div className={`bg-primary py-6`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon/Graphic */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Need More Details?
          </h2>

          {/* Description */}
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our experts for comprehensive information about
            our products and solutions.
          </p>

          {/* CTA Button */}
          <div
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-primary font-semibold text-lg rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
