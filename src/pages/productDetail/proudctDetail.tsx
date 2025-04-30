/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetProductByIdQuery } from "../../redux/api/productApi";
import { Star, Ruler, Truck, HelpCircle } from "lucide-react";
import Spinner from "../../components/ui/Spinner/Spinner";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import {
  DescriptionTab,
  ReviewsTab,
} from "../../components/productDetail/ProductTab";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("SM");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !product) return <p>Something went wrong!</p>;

  const {
    title,
    description,
    price,
    brand,
    category,
    rating,
    stock,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    images,
    thumbnail,
  } = product;

  const allImages = [thumbnail, ...images];
  const activeImage = selectedImage || thumbnail;

  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Left Image Section */}
      <div>
        {/* Main Image */}
        <div className="border rounded-lg overflow-hidden mb-4">
          <img
            src={activeImage}
            alt={title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto">
          {allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                activeImage === img ? "ring-2 ring-black" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right Product Info */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-xl font-bold text-black mb-2">${price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(rating) ? "fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-600 ml-2 text-sm">
            {rating} Ratings | 35 Reviews
          </span>
        </div>

        {/* Brand & Category */}
        <div className="text-sm text-gray-600 mb-1">
          Brand: <span className="text-green-600">{brand}</span>, Category:{" "}
          <span className="text-green-600">{category}</span>
        </div>

        <p className="text-gray-600 mt-4 mb-4">{description}</p>

        {/* Sizes */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Select Sizes :
          </label>
          {["SM", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border px-3 py-1 mr-2 rounded ${
                selectedSize === size ? "bg-black text-white" : "text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Colors */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Select Colors :
          </label>
          <div className="flex items-center gap-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`w-5 h-5 rounded-full cursor-pointer border ${
                  selectedColor === i ? "ring-2 ring-black" : ""
                }`}
                style={{
                  backgroundColor:
                    i === 0 ? "#d3cfc7" : i === 1 ? "#cfd3da" : "#000",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Quantity & Cart */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-xl"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 text-xl"
            >
              +
            </button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

        {/* Stock */}
        <p className="text-sm text-gray-600 mb-4">{stock} Pieces Available</p>

        {/* Variations */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Variation :</label>
          <div className="flex gap-2">
            <span className="border px-3 py-1 rounded bg-gray-100 text-sm">
              brown
            </span>
            <span className="border px-3 py-1 rounded bg-gray-100 text-sm">
              ash
            </span>
            <span className="border px-3 py-1 rounded bg-gray-100 text-sm">
              black
            </span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5" />
            <span>Size Guide</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5" />
            <span>Delivery and Return</span>
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            <span>Ask about this product</span>
          </div>
        </div>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Description" key="1">
          <DescriptionTab
            description={product.description}
            warrantyInformation={product.warrantyInformation}
            shippingInformation={product.shippingInformation}
            returnPolicy={product.returnPolicy}
          />
        </TabPane>
        <TabPane tab="Reviews" key="2">
          <ReviewsTab reviews={product.reviews || []} product={product} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProductDetail;
