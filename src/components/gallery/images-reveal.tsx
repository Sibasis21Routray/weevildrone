
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cards = [
  {
    src: "/gallery/Icarus_5-scaled.jpg",
    angle: "8deg",
  },
  {
    src: "/gallery/P1919072.jpg",
    angle: "-15deg",
  },
  {
    src: "/gallery/P1919097-scaled.jpg",
    angle: "-5deg",
  },
  {
    src: "/gallery/P1919153.jpg",
    angle: "10deg",
  },
  {
    src: "/gallery/WhatsApp-Image-2025-09-23-at-2.48.47-PM-2.jpeg",
    angle: "-5deg",
  },
];

interface CustomProps {
  index: number;
  angle: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: (custom: CustomProps) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.angle,
    transition: {
      delay: custom.index * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  }),
};

export default function ImagesReveal() {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold text-tertiary/80">
        Weevildrone Events
      </h1>
      <div className="relative my-10 ml-10 flex flex-row justify-center md:ml-20">
        {cards.map((card, i) => (
          <motion.img
            key={i}
            className="relative -ml-10 size-48 rounded-2xl border-[6px] border-white object-cover shadow-xl md:-ml-20 "
            src={card.src}
            custom={{ index: i, angle: card.angle }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1,
              rotate: "0deg",
              zIndex: 10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
