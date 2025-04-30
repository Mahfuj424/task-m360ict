import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./NavItem";
import NavLinkItem from "./NavLinkItem";
import MobileNavbar from "./MobileNavbar";
import CartDrawer from "../../ui/Drawer/CartDrawer";
import FavoritesDrawer from "../../ui/Drawer/FavoritesDrawer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isCartOpen || isFavoritesOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isFavoritesOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-white"
        }`}
      >
        <div className="container mx-auto p-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-4xl font-bold">
                <span className="text-black">Buy</span>
                <span className="text-purple-600">let</span>
              </span>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLinkItem key={item.label} item={item} />
              ))}
            </nav>

            {/* Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBag className="h-12 w-12 border-2 rounded-full border-slate-100 p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                  3
                </span>
              </motion.button>
              <motion.button
                onClick={() => setIsFavoritesOpen(true)}
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="h-12 w-12 border-2 rounded-full border-slate-100 p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                  2
                </span>
              </motion.button>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/profile">
                  <User className="h-12 w-12 border-2 rounded-full border-slate-100 p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          <MobileNavbar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setIsCartOpen={setIsCartOpen}
            setIsFavoritesOpen={setIsFavoritesOpen}
            navItems={navItems}
          />
        </AnimatePresence>
      </header>

      {/* Drawers */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
      />
    </>
  );
}
