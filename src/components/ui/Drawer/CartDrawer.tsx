import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Drawer from "./Drawer";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { removeFromCart } from "../../../redux/slices/cartSlice";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Temporary placeholder image and product name for demonstration
  const getProductDetails = (id: number) => ({
    name: `Product ${id}`,
    image: "/placeholder.svg",
    price: 19.99,
  });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + getProductDetails(item.id).price * item.quantity,
    0
  );

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <ShoppingBag className="h-5 w-5 mr-2 text-purple-600" />
          <h2 className="text-lg font-semibold">Your Cart ({totalItems})</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => {
              const product = getProductDetails(item.id);
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <div className="h-20 w-20 rounded-md bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <p className="text-purple-600 font-semibold mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal:</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="grid gap-2">
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              type="primary"
            >
              Checkout
            </Button>
            <Button className="w-full" type="default">
              View Cart
            </Button>
          </div>
        </div>
      )}
    </Drawer>
  );
}
