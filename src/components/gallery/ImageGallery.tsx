import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { Variants } from "framer-motion";

interface Image {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
}

interface GalleryProps {
  images: Image[];
  columns?: number;
  gap?: number;
  enableFilter?: boolean;
  enableModal?: boolean;
}

export const ImageGallery: React.FC<GalleryProps> = ({
  images,
  columns = 4,
  gap = 4,
  enableFilter = true,
  enableModal = true,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false);

  // Get unique categories
  const categories = [
    "all",
    ...new Set(images.map((img) => img.category).filter(Boolean)),
  ];

  // Filter images based on selected category
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  // Handle filter change with loading state
  const handleFilterChange = (category: string) => {
    setIsFiltering(true);
    setFilter(category);
    // Small delay to ensure smooth transition
    setTimeout(() => setIsFiltering(false), 300);
  };

  // Update current image index when modal opens
  useEffect(() => {
    if (selectedImage) {
      const index = filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      setCurrentImageIndex(index);
    }
  }, [selectedImage, filteredImages]);

  // Modal navigation functions
  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setSelectedImage(null);
          break;
        case "ArrowRight":
          if (filteredImages.length > 1) handleNext();
          break;
        case "ArrowLeft":
          if (filteredImages.length > 1) handlePrev();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentImageIndex, filteredImages]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalImageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  // Grid column classes based on prop
  const getGridColsClass = () => {
    const colMap: { [key: number]: string } = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
      6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6",
    };
    return colMap[columns] || colMap[4];
  };

  // Gap classes based on prop
  const getGapClass = () => {
    const gapMap: { [key: number]: string } = {
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
    };
    return gapMap[gap] || gapMap[4];
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       

        {/*  Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 mt-10"
        >

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-light text-secondary tracking-tight mb-6">
            Explore our collection of
            <span className="font-medium bg-gradient-to-r from-tertiary to-orange-600 bg-clip-text text-transparent">
              {" "}
              {images.length}&nbsp;
            </span>
            stunning visuals
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        {enableFilter && categories.length > 1 && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${
                  filter === category
                    ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                    : "bg-[var(--color-primary)] text-[var(--color-secondary)] hover:bg-opacity-90"
                }`}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isFiltering}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Loading State */}
        <AnimatePresence>
          {isFiltering && (
            <motion.div
              className="flex justify-center items-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-tertiary)]"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          {!isFiltering && (
            <motion.div
              key={filter} // This forces re-animation when filter changes
              className={`grid ${getGridColsClass()} ${getGapClass()}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-[var(--color-primary)]"
                  variants={itemVariants}
                  onClick={() => enableModal && setSelectedImage(image)}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                    whileTap="tap"
                    loading="lazy"
                  />

                  {/* Fixed Overlay - only visible on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-end">
                    <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <h3
                        className="text-lg font-semibold mb-1 truncate"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {image.title || image.alt}
                      </h3>
                      {image.description && (
                        <p
                          className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Category Badge */}
                  {image.category && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-[var(--color-tertiary)] text-[var(--color-primary)]">
                        {image.category}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isFiltering && filteredImages.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl" style={{ color: "var(--color-primary)" }}>
              No images found in this category.
            </p>
          </motion.div>
        )}

        {/* Image Counter */}
        {!isFiltering && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm" style={{ color: "var(--color-primary)" }}>
              Showing {filteredImages.length} of {images.length} images
              {filter !== "all" && ` in ${filter}`}
            </p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {enableModal && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center"
              variants={modalImageVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
                onClick={() => setSelectedImage(null)}
                style={{ color: "var(--color-primary)" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
                    onClick={handlePrev}
                    style={{ color: "var(--color-primary)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
                    onClick={handleNext}
                    style={{ color: "var(--color-primary)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Image */}
              <div className="relative max-w-full max-h-full">
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Image Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-2xl font-bold flex-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {selectedImage.title || selectedImage.alt}
                  </h3>
                  <span
                    className="text-sm opacity-75 ml-4"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {currentImageIndex + 1} / {filteredImages.length}
                  </span>
                </div>

                {selectedImage.description && (
                  <p
                    className="text-lg mb-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {selectedImage.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {selectedImage.category && (
                    <span className="px-3 py-1 text-sm rounded-full bg-[var(--color-tertiary)] text-[var(--color-primary)]">
                      {selectedImage.category}
                    </span>
                  )}
                  {selectedImage.tags && selectedImage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-white bg-opacity-20 text-white"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
