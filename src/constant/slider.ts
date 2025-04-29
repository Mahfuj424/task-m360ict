import { SlideData } from "../types/bannerSliderType";
import slider1 from "../assets/slider/slider1.png";
import slider2 from "../assets/slider/slider2.webp";
import slider3 from "../assets/slider/slider3.jpg";

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Eco-Friendly Products",
    subtitle: "NEW COLLECTION",
    description:
      "Discover sustainable products that are good for you and the planet.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    bgColor: "bg-gradient-to-r from-purple-600 to-purple-400",
    image: slider1,
    vendorName: "GreenEarth",
  },
  {
    id: 2,
    title: "Handcrafted Essentials",
    subtitle: "ARTISAN COLLECTION",
    description: "Unique handmade items crafted with care by local artisans.",
    buttonText: "Explore",
    buttonLink: "/artisan",
    bgColor: "bg-gradient-to-r from-emerald-600 to-emerald-400",
    image: slider2,
    vendorName: "ArtisanCraft",
  },
  {
    id: 3,
    title: "Organic Home Decor",
    subtitle: "TRENDING NOW",
    description:
      "Transform your space with our organic and sustainable home decor.",
    buttonText: "Discover",
    buttonLink: "/home-decor",
    bgColor: "bg-gradient-to-r from-amber-600 to-amber-400",
    image: slider3,
    vendorName: "NaturalHome",
  },
];
