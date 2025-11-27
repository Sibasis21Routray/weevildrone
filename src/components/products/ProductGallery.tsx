import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

interface Photo {
  image: string;
  caption: string;
}

interface Video {
  title: string;
  url: string;
  description: string;
}

interface ProductGalleryProps {
  photos: Photo[];
  videos: Video[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ photos, videos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  const nextVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo + 1) % videos.length);
    }
  };

  const prevVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo - 1 + videos.length) % videos.length);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (selectedVideo !== null && videoRef.current) {
      videoRef.current.play();
    }
  }, [selectedVideo]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedPhoto !== null) {
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
        if (e.key === "Escape") setSelectedPhoto(null);
      }
      if (selectedVideo !== null) {
        if (e.key === "ArrowRight") nextVideo();
        if (e.key === "ArrowLeft") prevVideo();
        if (e.key === "Escape") setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedPhoto, selectedVideo]);

  return (
    <div className="w-full bg-white mt-10 md:mt-0 lg:mt-10">
      {/* Photo Gallery Section */}
      <section className="py-6 sm:py-10 lg:py-1 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-1 bg-tertiary" />
              <h2 className="text-sm uppercase tracking-widest text-[#333333] font-semibold">
                Gallery
              </h2>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] tracking-tight">
              Visual <span className="text-tertiary">Collection</span>
            </h3>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-12 ">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(index)}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold text-lg">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-6 sm:py-10 lg:py-14 px-6 sm:px-8 lg:px-16 bg-[#333333]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-1 bg-tertiary" />
              <h2 className="text-sm uppercase tracking-widest text-white font-semibold">
                Videos
              </h2>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              In <span className="text-tertiary">Action</span>
            </h3>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(index)}
              >
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.url} type="video/mp4" />
                  </video>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tertiary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>

                  {/* Click to Play Label */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-sm">
                    <p className="text-white text-xs uppercase tracking-wider font-semibold">
                      Click to Play Fullscreen
                    </p>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mt-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={selectedPhoto}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selectedPhoto].image}
                alt={photos[selectedPhoto].caption}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="mt-6 text-center">
                <p className="text-white text-lg font-semibold">
                  {photos[selectedPhoto].caption}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {selectedPhoto + 1} / {photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Fullscreen Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            {/* Video Player - Full Screen Cover */}
            <motion.video
              key={selectedVideo}
              ref={videoRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            >
              <source src={videos[selectedVideo].url} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            {/* Top Control Bar */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
              <div className="flex items-center justify-between">
                {/* Video Counter */}
                <div className="flex items-center space-x-4">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                    <span className="text-white text-sm font-semibold">
                      {selectedVideo + 1} / {videos.length}
                    </span>
                  </div>
                </div>

                {/* Navigation + Controls */}
                <div className="flex items-center space-x-3">
                  {/* Mute Toggle */}
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>

                  {/* Video Navigation Arrows */}
                  {videos.length > 1 && (
                    <>
                      <button
                        onClick={prevVideo}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      <button
                        onClick={nextVideo}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 z-10"
            >
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {videos[selectedVideo].title}
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {videos[selectedVideo].description}
                </p>
              </div>
            </motion.div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-tertiary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;