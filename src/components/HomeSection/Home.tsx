import React from "react";
import BannerSlider from "./BannerSlider/BannerSlider";
import { Category } from "./shobByCategory/Category";
import ProductsOfTheWeek from "./ProductOfTheWeek/ProductOfTheWeek";
import EnhancedFeaturedProducts from "./FeaturesProduct/FeatureProduct";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Category />
      <ProductsOfTheWeek />
      <EnhancedFeaturedProducts />
    </div>
  );
};

export default Home;
