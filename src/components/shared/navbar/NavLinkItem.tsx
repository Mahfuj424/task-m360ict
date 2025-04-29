import { Link } from "react-router-dom";
import type { NavItem } from "./NavItem";

export default function NavLinkItem({ item }: { item: NavItem }) {
  return (
    <Link
      to={item.href}
      className="group relative flex items-center text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
