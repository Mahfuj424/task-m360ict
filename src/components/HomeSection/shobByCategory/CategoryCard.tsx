/* eslint-disable @typescript-eslint/no-unused-vars */
import { CategoryItem } from "../../../types/categoryType";
import { Button } from "../../ui/Button/Button";

type Props = {
  category: CategoryItem;
  index?: number;
  isMobile?: boolean;
};

export const CategoryCard = ({ category, isMobile = false }: Props) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md bg-gray-100 group transition-transform duration-300 hover:scale-[1.02]"
      style={{ gridArea: category.gridArea }}
    >
      <div className="relative h-full min-h-[250px]">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />
        <div className="absolute bottom-0 left-0 p-4 md:p-6 text-left text-white">
          <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
          <p className="text-sm md:text-base text-white/90 mb-3">
            {category.subtitle}
          </p>
          <Button className="bg-white text-purple-700 hover:bg-white/90 font-medium px-8">
            <a href={category.link}>Shop Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
