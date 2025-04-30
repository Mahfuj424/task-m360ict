import { motion } from "framer-motion";
import { SlideData } from "../../../types/bannerSliderType";
import { Button } from "../../ui/Button/Button";

type SlideProps = {
  data: SlideData;
  direction: number;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Slide = ({ data, direction }: SlideProps) => {
  return (
    <motion.div
      key={data.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className={`absolute inset-0 ${data.bgColor} flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10`}
    >
      <motion.div
        className="w-full md:w-1/2 text-white z-10 mb-8 md:mb-0"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.div variants={childVariants} className="mb-2">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
            {data.vendorName}
          </span>
        </motion.div>
        <motion.h3
          variants={childVariants}
          className="text-sm font-semibold tracking-wider mb-2"
        >
          {data.subtitle}
        </motion.h3>
        <motion.h2
          variants={childVariants}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          {data.title}
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-white/80 mb-6 max-w-md"
        >
          {data.description}
        </motion.p>
        <motion.div variants={childVariants}>
          <Button className="bg-white text-purple-700 hover:bg-white/90 font-medium px-8">
            <a href={data.buttonLink}>{data.buttonText}</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative h-[200px] md:h-[300px]"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <img
            src={data.image || "/placeholder.svg"}
            alt={data.title || ""}
            className="object-fill rounded-full"
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
    </motion.div>
  );
};

export default Slide;
