import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import BannerSlider from "./components/HomeSection/BannerSlider/BannerSlider";
import { Category } from "./components/HomeSection/shobByCategory/Category";
import ProductOfTheWeek from "./components/HomeSection/ProductOfTheWeek/ProductOfTheWeek";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import FeaturedProducts from "./components/HomeSection/FeaturesProduct/FeatureProduct";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <BannerSlider />
        <Category />
        <ProductOfTheWeek />
        <FeaturedProducts />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
