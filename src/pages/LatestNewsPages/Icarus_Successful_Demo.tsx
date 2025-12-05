import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { newsData } from "../../data/LatestNewsData";
import Hero from "../../components/latestNews/Hero";
import RelatedNews from "../../components/latestNews/RelatedNews";
import { useLocation } from "react-router-dom";

const Icarus_Successful_Demo = () => {
  const location = useLocation();
  const [currentPost, setCurrentPost] = useState<any>(null);

  // Extract slug from URL and match with newsData
  useEffect(() => {
    const slug = location.pathname.split("/").pop();
    const foundPost = newsData.find(
      (post) => post.url.split("/").pop() === slug
    );
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
          {/* Left main content */}
          <section className="lg:w-2/3">
            {/* Hero Section */}
            <Hero currentPost={currentPost} />

            <div className="container mx-auto max-w-full sm:max-w-3xl lg:max-w-4xl px-4 sm:px-6">
              <div className="max-w-4xl mx-auto px-4 py-8">
                {/* ========================================================================================= */}
                <h2 className="text-2xl font-semibold mb-4">
                  1. ICARUS Demonstrates Exceptional Performance During Hurdle
                  Test
                </h2>

                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  On <span className="font-medium">{currentPost.date}</span>,
                  WeevilsDrones Pvt. Ltd. successfully conducted a field
                  demonstration of our{" "}
                  <span className="font-medium">ICARUS VTOL UAV</span>. The
                  drone underwent a full-scale{" "}
                  <span className="font-medium">Hurdle Test</span>, supported by
                  an autonomous quadcopter system for aerial assistance and
                  real-time telemetry.
                </p>

                {/* Image 1 */}
                <div className="my-6">
                  <img
                    src="/news/icarus-demo/icarus-demo-1.jpeg"
                    alt="Icarus Demo Image 1"
                    className="rounded-xl w-full object-cover shadow"
                    loading="eager"
                  />
                </div>

                <h3 className="text-xl font-medium text-black mb-3">
                  Stability, Transition & Precision Performance
                </h3>

                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  ICARUS demonstrated remarkable flight stability during
                  vertical takeoff, smooth altitude hold, and seamless
                  transition from VTOL to forward-flight mode. The quadcopter
                  offered enhanced monitoring support, enabling better analysis
                  of aerodynamic behaviour and control-response accuracy.
                </p>

                {/* Image 2 */}
                <div className="my-6">
                  <img
                    src="/news/icarus-demo/icarus-demo-3.jpeg"
                    alt="Icarus Demo Image 2"
                    className="rounded-xl w-full object-cover shadow"
                    loading="eager"
                  />
                </div>

                <h3 className="text-xl font-medium text-black mb-3">
                  Key Achievements of the Test
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed lg:text-justify text-left">
                  <li>Stable VTOL takeoff with accurate altitude lock.</li>
                  <li>
                    Smooth transition from hover to forward flight under windy
                    conditions.
                  </li>
                  <li>
                    Enhanced telemetry and monitoring using quadcopter support.
                  </li>
                  <li>
                    Successful autonomous landing with minimal drift error.
                  </li>
                </ul>

                

                <div className="mt-8 p-5 bg-[var(--color-primary)] border-l-4 border-[var(--color-tertiary)] rounded-lg shadow-sm">
                  <p className="text-gray-700 lg:text-justify text-left">
                    This successful demonstration marks a significant milestone
                    for ICARUS UAV. It proved the drone’s reliability for
                    long-range surveillance, autonomous missions, and precision
                    flight operations under real-field conditions.
                  </p>
                </div>

                <h3 className="text-xl font-medium text-black mt-8 mb-3">
                  Looking Ahead
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  With the completion of this hurdle test, WeevilsDrones
                  continues advancing toward a new generation of intelligent UAV
                  systems — combining structural strength, advanced autopilot
                  algorithms, and real-time situational awareness to support
                  defence and industrial applications.
                </p>
              </div>
            </div>
          </section>

          {/* Right Sidebar - Related News */}
          <div className="lg:w-1/3">
            <div className="lg:top-20 lg:ml-[5vw] lg:w-1/4">
              <RelatedNews skipId={currentPost.id} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Icarus_Successful_Demo;
