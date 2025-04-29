import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { slides } from "../../../constant/slider";
import Slide from "./Slide";
import NavigationDots from "./NavigationDots";
import NavigationArrows from "./NavigationArrows";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isPaused, nextSlide]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[500px] md:h-[500px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <Slide
            key={currentSlide}
            direction={direction}
            data={slides[currentSlide]}
          />
        </AnimatePresence>
      </div>

      <NavigationDots
        slides={slides}
        currentSlide={currentSlide}
        onDotClick={(index) => {
          setDirection(index > currentSlide ? 1 : -1);
          setCurrentSlide(index);
        }}
      />

      <NavigationArrows onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
}
