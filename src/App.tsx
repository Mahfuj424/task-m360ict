import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/Shop";
import Home from "./components/HomeSection/Home";
import ProductDetail from "./pages/productDetail/proudctDetail";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default App;
