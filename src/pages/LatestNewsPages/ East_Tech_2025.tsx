// Updated React component with new award content for WeevilsDrones
// Hero and RelatedNews sections kept intact as requested

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { newsData } from "../../data/LatestNewsData";
import Hero from "../../components/latestNews/Hero";
import RelatedNews from "../../components/latestNews/RelatedNews";
import { useLocation } from "react-router-dom";

const East_Tech_2025 = () => {
  const location = useLocation();
  const [currentPost, setCurrentPost] = useState<any>(null);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const slug = pathParts[pathParts.length - 1];

    const foundPost = newsData.find((post) => {
      const postSlug = post.url.split("/").pop();
      return postSlug === slug;
    });

    setCurrentPost(foundPost || null);
  }, [location.pathname]);

  if (!currentPost)
    return (
      <div className="flex items-center justify-center h-80">
        <p className="text-gray-500 text-lg">Loading ...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row lg:px-12 gap-5">
          {/* Main Content */}
          <section className="lg:w-2/3">
            <Hero currentPost={currentPost} />

            <div className="container mx-auto max-w-full sm:max-w-3xl lg:max-w-4xl px-4 sm:px-6">
              <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">
                  1. WeevilsDrones Achieves Excellence at EAST TECH X – High
                  Altitude Trials
                </h2>

                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  From{" "}
                  <span className="font-medium">
                    17th October to 2nd November 2025
                  </span>
                  , WeevilsDrones Pvt. Ltd. participated in one of the most
                  prestigious defence-technology events —
                  <span className="font-medium">
                    {" "}
                    EAST TECH X High Altitude Trials
                  </span>
                  , held in collaboration with India's leading defence bodies.
                  The trials showcased breakthrough innovations from companies
                  across the nation, tested under extreme climatic and altitude
                  conditions.
                </p>

                {/* Image 1 */}
                <img
                  src="/news/East_Tech_2025Frame2.jpeg"
                  alt="WeevilsDrones - High Altitude Trial"
                  className="rounded-lg shadow-md mb-6 w-full"
                />

                <h3 className="text-xl font-medium text-black mb-3">
                  Demonstrating Cutting-Edge Technology at High Altitudes
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  During the evaluation, WeevilsDrones conducted real-time
                  demonstrations of its
                  <span className="font-medium"> advanced UAV platforms</span>,
                  specifically engineered for high-altitude performance,
                  intelligence gathering, and long-endurance missions. These
                  systems excelled in challenging environments, validating their
                  capability to operate in remote, low-temperature, and thin-air
                  conditions.
                </p>

                {/* Image 2 */}
                <img
                  src="/news/East_Tech_2025Frame3.jpeg"
                  alt="Drone Demonstration"
                  className="rounded-lg shadow-md mb-6 w-full"
                />

                <h3 className="text-xl font-medium text-black mb-3">
                  Awarded for Outstanding High-Altitude Performance
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  At the conclusion of the trials, WeevilsDrones Pvt. Ltd. was
                  officially
                  <span className="font-medium">
                    {" "}
                    recognized with a prestigious award
                  </span>{" "}
                  for delivering exceptional performance and demonstrating a new
                  benchmark in high-altitude UAV technology. The acknowledgment
                  reinforces the company's vision of contributing cutting-edge
                  innovations to India's defence ecosystem.
                </p>

                {/* Image 3 */}
                <img
                  src="/news/East_Tech_2025Frame1.jpeg"
                  alt="WeevilsDrones Award Ceremony"
                  className="rounded-lg shadow-md mb-6 w-full"
                />

                <h3 className="text-xl font-medium text-black mt-8 mb-3">
                  Looking Ahead
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  With this achievement, WeevilsDrones continues its journey
                  toward designing
                  <span className="font-medium">
                    {" "}
                    next-generation UAV systems
                  </span>{" "}
                  capable of supporting India's surveillance, border management,
                  and defence intelligence operations. The recognition at EAST
                  TECH X serves as both motivation and validation of the
                  company’s ongoing mission to lead the future of indigenous
                  drone innovation.
                </p>

                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-gray-700 italic lg:text-justify text-left">
                    WeevilsDrones remains committed to pushing technological
                    boundaries and ensuring that India becomes a global leader
                    in high-performance drone systems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related News Sidebar */}
          <div className="lg:w-1/3 ">
            <div className=" lg:top-20 lg:ml-[5vw] lg:w-1/4">
              <RelatedNews skipId={currentPost.id} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default East_Tech_2025;
