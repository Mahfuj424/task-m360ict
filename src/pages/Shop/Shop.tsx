import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { ProductCard } from "../../components/ui/Card/ProductCard";
import { Product } from "../../types/productType";
import Spinner from "../../components/ui/Spinner/Spinner";

const PRODUCTS_PER_PAGE = 12;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const { data, isLoading, isError } = useGetProductsQuery({
    limit: PRODUCTS_PER_PAGE,
    skip,
  });

  const total = data?.total || 0;
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="container bg-slate-50 pt-10 mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
      {/* Right Sidebar Filter */}
      <div className="w-full lg:w-1/4 order-last lg:order-first">
        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {[
                "Shirts",
                "T-Shirts",
                "Pants",
                "Jackets",
                "Shoe",
                "Watch",
                "Ring",
              ].map((cat, i) => (
                <li key={i} className="flex justify-between">
                  <span>{cat}</span>
                  <span className="text-gray-500">42</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            {[
              "Small",
              "Medium",
              "Large",
              "Extra Large",
              "Extra Extra Large",
            ].map((size, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input type="checkbox" className="accent-black" />
                <label>{size}</label>
              </div>
            ))}
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold mb-2">Rating</h3>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < rating ? "⭐" : "☆"}</span>
                ))}
              </div>
            ))}
          </div>

          {/* Colour Filter */}
          <div>
            <h3 className="font-semibold mb-2">Colour</h3>
            <div className="flex flex-wrap gap-2">
              {["#f2f2f2", "#000", "#e63946", "#457b9d", "#ffcc00", "#fff"].map(
                (color, i) => (
                  <button
                    key={i}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h3 className="font-semibold mb-2">Brand</h3>
            {["Nike", "Rolex", "Wrangler", "Marmot"].map((brand, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input type="checkbox" className="accent-black" />
                <label>{brand}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data?.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full border border-gray-300 ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } hover:bg-black hover:text-white transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
