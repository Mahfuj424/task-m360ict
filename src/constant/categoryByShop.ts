import { CategoryItem } from "../types/categoryType";
import man from "../assets/shopCategory/man.png";
import kid from "../assets/shopCategory/kid.png";
import conmetics from "../assets/shopCategory/cosmetics.png";
import woman from "../assets/shopCategory/woman.png";

export const categories: CategoryItem[] = [
  {
    id: "men",
    title: "Man",
    subtitle: "Fashion Collection - 2025",
    image: man,
    link: "/shop",
    gridArea: "men",
  },
  {
    id: "kids",
    title: "Kids Collection",
    subtitle: "Trending - 2025",
    image: kid,
    link: "/shop",
    gridArea: "kids",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    subtitle: "Fashion Collection - 2025",
    image: conmetics,
    link: "/shop",
    gridArea: "cosmetics",
  },
  {
    id: "women",
    title: "Women",
    subtitle: "Winter Collection - 2025",
    image: woman,
    link: "/shop",
    gridArea: "women",
  },
];
