import { motion } from "framer-motion";
import { SlideData } from "../../../types/bannerSliderType";

type Props = {
  slide: SlideData;
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

export default function SlideContent({ slide }: Props) {
  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-between px-6 md:px-12 py-10 text-white">
      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.span
          className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm mb-2"
          variants={childVariants}
        >
          {slide.vendorName}
        </motion.span>
        <motion.h3
          className="text-sm font-semibold mb-2"
          variants={childVariants}
        >
          {slide.subtitle}
        </motion.h3>
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          variants={childVariants}
        >
          {slide.title}
        </motion.h2>
        <motion.p
          className="text-white/80 mb-6 max-w-md"
          variants={childVariants}
        >
          {slide.description}
        </motion.p>
        <motion.a
          href={slide.buttonLink}
          className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition"
          variants={childVariants}
        >
          {slide.buttonText}
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative h-[200px] md:h-[300px]"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title || ""}
            className="object-contain"
          />

          {/* Decorative elements */}
          <motion.div
            className="absolute -z-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/30"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-10 left-0 w-12 h-12 rounded-full bg-white/30"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
