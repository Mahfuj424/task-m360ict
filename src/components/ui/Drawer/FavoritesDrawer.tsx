import { X, Heart } from "lucide-react";
import Drawer from "./Drawer";
import { Button } from "antd";

const favoriteItems = [
  {
    id: "1",
    name: "Organic Cotton Sweater",
    price: 49.99,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Sustainable Bamboo Watch",
    price: 89.99,
    image: "/placeholder.svg",
  },
];

export default function FavoritesDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Heart className="h-5 w-5 mr-2 text-purple-600" />
          <h2 className="text-lg font-semibold">
            Your Wishlist ({favoriteItems.length})
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {favoriteItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <Heart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {favoriteItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <div className="h-20 w-20 rounded-md bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-purple-600 font-semibold mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {favoriteItems.length > 0 && (
        <div className="p-4 border-t">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Add All to Cart
          </Button>
        </div>
      )}
    </Drawer>
  );
}
