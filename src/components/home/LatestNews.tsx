import { motion } from "framer-motion";

const LatestNews = () => {
  const newsData = [
    {
      date: "19th September 2025",
      title: "Meeting with Defence Minister",
      content:
        "A remarkable evening — I met Mr. Sanjay Seth, the State Minister of Defence, at a dinner party and exchanged ideas in a truly insightful discussion.",
      author: "Ashis Saha",
      position: "CEO",
      type: "event",
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-20-at-9.04.01-AM-1536x1153.jpeg",
      layout: "image-left", // First item: image left, content right
    },
    {
      date: "19-21 September 2025",
      title: "East Tech 2025 Participation",
      content:
        "Weevils Drones Pvt. Ltd. is proud to announce our participation at East Tech 2025 — India's Defence Technology Symposium.",
      type: "participation",
      image:
        "https://weevildrone.co.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-23-at-10.17.48-AM-e1758606381915-1536x1101.jpeg",
      achievement: "Certificate of Appreciation",
      recognition:
        "This recognition reflects our ongoing commitment to advancing cutting-edge drone technology and supporting India's defence and security ecosystem through innovation, reliability, and excellence.",
      layout: "image-right", // Second item: image right, content left
    },
  ];

  return (
    <section className="w-full bg-primary py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-tertiary px-6 py-2 mb-6">
            <span className="text-tertiary text-sm font-medium tracking-wider uppercase">
              Latest Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-secondary tracking-tight">
            News & Events
          </h2>
          <p className="text-lg text-secondary/80 mt-4 max-w-2xl mx-auto">
            Stay updated with our latest achievements, events, and milestones in
            advancing drone technology.
          </p>
        </motion.div>

        <div className="space-y-12">
          {newsData.map((news, index) => {
            const isImageLeft = news.layout === "image-left";

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row bg-white border border-secondary/10 hover:border-secondary/20 transition-all duration-300 group ${
                  !isImageLeft ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="relative h-64 lg:h-80 lg:w-1/2 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-tertiary text-primary px-3 py-1 text-sm font-medium">
                      {news.date}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-tertiary transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-secondary/80 leading-relaxed mb-4">
                    {news.content}
                  </p>

                  {/* CEO Quote Section */}
                  {news.author && (
                    <div className="border-l-4 border-tertiary pl-4 py-2 mb-4">
                      <blockquote className="text-secondary/80 italic">
                        "{news.content.split("— ")[1]}"
                      </blockquote>
                      <div className="mt-2">
                        <p className="font-semibold text-secondary text-sm">
                          {news.author}
                        </p>
                        <p className="text-secondary/60 text-xs">
                          {news.position}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Achievement Section */}
                  {news.achievement && (
                    <div className="bg-secondary/5 p-4 border border-secondary/10">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-2 h-2 bg-tertiary"></div>
                        <span className="font-semibold text-secondary">
                          {news.achievement}
                        </span>
                      </div>
                      <p className="text-secondary/70 text-sm leading-relaxed">
                        {news.recognition}
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
