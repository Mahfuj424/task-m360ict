import { useDispatch } from "react-redux";
import { Product } from "../../../types/productType";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { addToCart } from "../../../redux/slices/cartSlice";
import toast from "react-hot-toast";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
    toast.success(`${product.title} added to cart`);
  };

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="relative group rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-lg bg-white">
      {/* Discount badge */}
      {product.discountPercentage > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
          -{product.discountPercentage}%
        </span>
      )}

      {/* Icons on hover */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <Eye className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Product image */}
      <div className="bg-gray-50 h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Add to Cart button */}
      <button
        onClick={handleAddToCart}
        className="absolute bottom-[90px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black text-white hover:bg-white hover:text-black border border-black px-4 py-2 rounded font-medium flex items-center gap-1 z-10 text-sm whitespace-nowrap"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Cart
      </button>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-sm truncate">{product.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-primary font-semibold">${discountedPrice}</span>
          {product.discountPercentage > 0 && (
            <span className="text-sm line-through text-gray-400">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Color indicators */}
        <div className="flex gap-1 mt-2">
          {product.images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              className="w-4 h-4 rounded-full border border-gray-300 bg-gray-200 hover:ring-2 ring-black"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
