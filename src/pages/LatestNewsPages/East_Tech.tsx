// Updated React component with new award content for WeevilsDrones
// Hero and RelatedNews sections kept intact as requested

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { newsData } from "../../data/LatestNewsData";
import Hero from "../../components/latestNews/Hero";
import RelatedNews from "../../components/latestNews/RelatedNews";
import { useLocation } from "react-router-dom";

const East_Tech = () => {
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
        <p className="text-gray-500 text-lg">Loading or Post Not Found...</p>
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
                  East Tech X 2025 – Participation & Recognition
                </h2>

                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  WeevilsDrones Pvt. Ltd. proudly participated in{" "}
                  <span className="font-medium">East Tech X 2025</span> —
                  India’s premier Defence Technology Symposium held in Ranchi
                  from <span className="font-medium">19–21 September 2025</span>
                  . The event brought together innovators, defence officials,
                  technology leaders, and industry partners to showcase the
                  future of defence readiness through indigenous technological
                  advancements.
                </p>

                <h3 className="text-xl font-medium text-black mb-3">
                  Recognition of Excellence
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  WeevilsDrones was honoured to receive a{" "}
                  <span className="font-medium">
                    Certificate of Appreciation
                  </span>{" "}
                  in recognition of our valuable participation and contribution
                  to East Tech X 2025. This acknowledgement reflects our
                  continuous dedication toward developing reliable,
                  high-performance drone systems that support India’s defence
                  and security ecosystem.
                </p>

                <img
                  src="/news/east_tech_certificate.jpeg"
                  alt="WeevilsDrones at East Tech X"
                  className="rounded-lg shadow-md mb-6 w-full"
                />

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
                  <p className="text-gray-700 italic lg:text-justify text-left">
                    "This recognition symbolizes India’s trust in emerging
                    indigenous defence technologies. WeevilsDrones will continue
                    contributing to a stronger, self-reliant defence ecosystem."
                    <br />
                    <span className="text-sm text-gray-500">
                      — WeevilsDrones Pvt. Ltd.
                    </span>
                  </p>
                </div>

                <h3 className="text-xl font-medium text-black mb-3">
                  Driving Indigenous Innovation
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  Our participation showcased our advancements in UAV systems
                  engineered for surveillance, defence support, and strategic
                  operations. East Tech X provided an excellent platform for
                  demonstrating our commitment to innovation, reliability, and
                  excellence — values that define WeevilsDrones.
                </p>

                <h3 className="text-xl font-medium text-black mt-8 mb-3">
                  A Milestone for the Future
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  This recognition at East Tech X 2025 strengthens our vision of
                  contributing to India’s defence technology landscape with
                  cutting-edge UAV solutions. We remain dedicated to empowering
                  the nation with indigenous drone capabilities that ensure
                  safety, intelligence, and technological superiority.
                </p>

                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-gray-700 italic lg:text-justify text-left">
                    WeevilsDrones will continue advancing India’s drone
                    ecosystem with innovation, precision, and unwavering
                    dedication.
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

export default East_Tech;
