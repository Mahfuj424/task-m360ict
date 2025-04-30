import { FC, useRef } from "react";
import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../constant/categoryByShop";
import { CategoryItem } from "../../../types/categoryType";

export const Category: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Shop By Category
      </h2>

      {/* Desktop Grid */}
      <div
        ref={containerRef}
        className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2"
        style={{
          gridTemplateAreas: `
            "men kids women"
            "men cosmetics women"
          `,
        }}
      >
        {categories.map((category: CategoryItem) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* Mobile Grid */}
      <div className="grid md:hidden gap-4 grid-cols-1">
        {categories.map((category: CategoryItem) => (
          <CategoryCard key={category.id} category={category} isMobile />
        ))}
      </div>
    </section>
  );
};
