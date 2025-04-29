import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, User } from "lucide-react";
import type { NavItem } from "./NavItem";

export default function MobileNavbar({
  isMenuOpen,
  setIsMenuOpen,
  setIsCartOpen,
  setIsFavoritesOpen,
  navItems,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  setIsCartOpen: (v: boolean) => void;
  setIsFavoritesOpen: (v: boolean) => void;
  navItems: NavItem[];
}) {
  return (
    isMenuOpen && (
      <motion.div
        className="lg:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            className="mt-4 flex items-center space-x-6 border-t pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.button
              onClick={() => {
                setIsMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="relative"
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                3
              </span>
            </motion.button>
            <motion.button
              onClick={() => {
                setIsMenuOpen(false);
                setIsFavoritesOpen(true);
              }}
              className="relative"
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                2
              </span>
            </motion.button>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link to="/profile">
                <User className="h-6 w-6 text-gray-700" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    )
  );
}
