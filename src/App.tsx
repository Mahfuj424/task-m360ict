import { Routes, Route } from "react-router-dom";
import ShopPage from "./components/Shop/Shop";
import Home from "./components/HomeSection/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
};

export default App;
