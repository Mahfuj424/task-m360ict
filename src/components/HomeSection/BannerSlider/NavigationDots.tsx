import { SlideData } from "../../../types/bannerSliderType";

type Props = {
  slides: SlideData[];
  currentSlide: number;
  onDotClick: (index: number) => void;
};

export default function NavigationDots({
  slides,
  currentSlide,
  onDotClick,
}: Props) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentSlide ? "w-6 bg-white" : "bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}
