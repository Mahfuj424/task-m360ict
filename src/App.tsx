import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import BannerSlider from "./components/HomeSection/BannerSlider/BannerSlider";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BannerSlider />
      <h1>Hello world</h1>
    </BrowserRouter>
  );
}

export default App;
