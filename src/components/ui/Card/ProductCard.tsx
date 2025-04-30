import { Product } from "../../../types/productType";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="relative group border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-lg bg-white">
      {product.discountPercentage > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
          -{product.discountPercentage}%
        </span>
      )}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
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
        <div className="flex gap-1 mt-2">
          {product.images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              className="w-4 h-4 rounded-full border border-gray-300 bg-gray-200 hover:ring-2 ring-black"
            ></button>
          ))}
        </div>
      </div>

      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-500 font-semibold hover:bg-white hover:text-black hover:border text-lg transition bg-black text-white px-5 py-2 cursor-pointer rounded">
        Add to Cart
      </button>
    </div>
  );
};
