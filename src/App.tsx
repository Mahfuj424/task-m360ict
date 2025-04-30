import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import BannerSlider from "./components/HomeSection/BannerSlider/BannerSlider";
import { Category } from "./components/HomeSection/shobByCategory/Category";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BannerSlider />
      <Category />
      {/* <ProductList /> */}
      {/* <Footer /> */}
      <h1>Hello world</h1>
    </BrowserRouter>
  );
}

export default App;
