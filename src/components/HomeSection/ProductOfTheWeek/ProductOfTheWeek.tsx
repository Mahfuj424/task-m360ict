import { Spin } from "antd";
import { useGetProductsQuery } from "../../../redux/api/productApi";
import { Product } from "../../../types/productType";
import { ProductCard } from "../../ui/Card/ProductCard";
import { Link } from "react-router-dom";

export default function ProductsOfTheWeek() {
  const { data, isLoading, isError } = useGetProductsQuery({
    limit: 10,
    skip: 0,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Spin size="large" />
      </div>
    );
  }

  if (isError || !data?.products?.length) {
    return (
      <div className="text-center text-red-500 py-12">
        Failed to load products.
      </div>
    );
  }

  const productList: Product[] = data.products;

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Products of the week</h2>
        <div className="mt-2 flex justify-center gap-4 text-gray-500 text-sm">
          <span className="text-black font-semibold">Best Seller</span>
          <span className="cursor-pointer hover:text-black">
            Hot Collection
          </span>
          <span className="cursor-pointer hover:text-black">Trendy</span>
          <span className="cursor-pointer hover:text-black">New Arrival</span>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to={"/shop"}
          className="duration-500 font-semibold hover:bg-white hover:text-black hover:border text-lg transition bg-black text-white px-5 py-2 cursor-pointer rounded"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
