import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { blogPosts } from "../../data/blogsData"
import { newsData } from "../../data/LatestNewsData";
import Hero from "../../components/latestNews/Hero";
import RelatedNews from "../../components/latestNews/RelatedNews";
import { useLocation } from "react-router-dom";

const NewsMeetingWithDefenceMinister = () => {
  const location = useLocation();
  const [currentPost, setCurrentPost] = useState<any>(null);

  //get current news url, match with newsdata, pass correct data to child
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const slug = pathParts[pathParts.length - 1];

    const foundPost = newsData.find((post) => {
      const postSlug = post.url.split("/").pop();
      return postSlug === slug;
    });

    // console.log("Current URL:", location.pathname);
    // console.log("Slug:", slug);
    // console.log("Found Post:", foundPost);

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
          {/* Content Sections */}
          <section className="lg:w-2/3">
            {/* Intro Section */}
            <Hero currentPost={currentPost} />
            <div className="container mx-auto max-w-full sm:max-w-3xl lg:max-w-4xl px-4 sm:px-6">
              {/* ========================================================================================= */}
              <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">
                  A Remarkable Evening: Strengthening Defence-Industry
                  Collaboration
                </h2>

                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  On the evening of{" "}
                  <span className="font-medium">19th September 2025</span>,
                  WeevilsDrones Pvt. Ltd. had the privilege of engaging in a
                  thought-provoking discussion with{" "}
                  <span className="font-medium">Mr. Sanjay Seth</span>, the
                  <span className="font-medium">
                    {" "}
                    Minister of State for Defence
                  </span>
                  . The meeting took place during an official dinner event that
                  brought together distinguished members of India's defence
                  ecosystem — innovators, policymakers, and industry leaders —
                  all sharing a unified vision for strengthening India's defence
                  self-reliance.
                </p>

                <h3 className="text-xl font-medium text-black mb-3">
                  A Vision for Atmanirbhar Bharat in Defence
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  The conversation revolved around India's growing focus on
                  <span className="font-medium">
                    {" "}
                    indigenous drone technologies
                  </span>{" "}
                  and the role of private enterprises in building advanced,
                  scalable solutions for national defence and surveillance. Mr.
                  Seth emphasized the importance of collaboration between MSMEs,
                  startups, and research institutions to realize the goals of
                  the
                  <span className="font-medium"> "Make in India"</span> and
                  <span className="font-medium">
                    {" "}
                    "Atmanirbhar Bharat"
                  </span>{" "}
                  initiatives.
                </p>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
                  <p className="text-gray-700 italic lg:text-justify text-left">
                    "Defence innovation is no longer optional — it's the
                    foundation of a strong, future-ready India,"
                    <br />
                    <span className="text-sm text-gray-500">
                      — Mr. Sanjay Seth, Minister of State for Defence
                    </span>
                  </p>
                </div>

                <h3 className="text-xl font-medium text-black mb-3">
                  Showcasing WeevilsDrones' Capabilities
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  During the meeting, our CEO,{" "}
                  <span className="font-medium">Mr. Ashis Saha</span>, shared
                  insights into the company's ongoing projects in surveillance,
                  agriculture, and logistics, along with our future plans for
                  <span className="font-medium">
                    {" "}
                    dual-use drone systems
                  </span>{" "}
                  that serve both civil and defence applications. A brief
                  presentation showcased our upcoming
                  <span className="font-medium">
                    {" "}
                    "Sentinel-X" long-range UAV prototype
                  </span>
                  , highlighting its extended flight endurance, real-time data
                  integration, and AI-based object detection capabilities.
                </p>

                <h3 className="text-xl font-medium text-black mb-3">
                  Key Discussion Highlights
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed lg:text-justify text-left">
                  <li>
                    Emphasis on creating a unified innovation framework for
                    private and government defence projects.
                  </li>
                  <li>
                    The Minister appreciated the role of startups like Weevils
                    Drones in driving technological self-sufficiency.
                  </li>
                  <li>
                    Discussion on enhancing UAV deployment across surveillance,
                    reconnaissance, and logistics operations.
                  </li>
                  <li>
                    A shared vision of expanding India's footprint in global
                    drone exports.
                  </li>
                </ul>

                <div className="mt-8 p-5 bg-[var(--color-primary)] border-l-4 border-[var(--color-tertiary)] rounded-lg shadow-sm">
                  <p className="text-gray-700 lg:text-justify text-left">
                    Mr. Seth expressed optimism about the pace of innovation
                    within India's drone industry and reiterated the
                    government's support for local companies building
                    world-class products. The interaction also opened doors for
                    potential collaborations between WeevilsDrones and key
                    defence research bodies under the Ministry of Defence.
                  </p>
                </div>

                <h3 className="text-xl font-medium text-black mt-8 mb-3">
                  Looking Ahead: Building India's Drone Future
                </h3>
                <p className="text-gray-600 mb-6 lg:text-justify text-left">
                  The meeting served as a milestone for WeevilsDrones Pvt. Ltd.,
                  reinforcing our commitment to innovation, reliability, and
                  national service. We continue to align our efforts with
                  India's evolving defence technology landscape — developing UAV
                  systems that ensure both security and sustainability.
                </p>

                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-gray-700 italic lg:text-justify text-left">
                    As India prepares for a new era of aerial intelligence
                    and autonomous defence, WeevilsDrones remains dedicated to
                    contributing through cutting-edge drone technology, deep
                    research collaborations, and an unwavering spirit of
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related news Sections - Fixed sidebar */}
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

export default NewsMeetingWithDefenceMinister;
