import { FeatureProduct } from "../types/featureProduct";
import tshirt from "../assets/featureProduct/tshirt.png";
import beg1 from "../assets/featureProduct/bag1.png";
import beg2 from "../assets/featureProduct/beg2.png";
import beg3 from "../assets/featureProduct/beg3.png";
import cap from "../assets/featureProduct/cap.png";

export const featureProducts: FeatureProduct[] = [
  {
    id: "1",
    name: "Comfort Zip Track Jacket",
    price: 59.99,
    originalPrice: 79.99,
    image: tshirt,
    category: "Clothing",
    isSale: true,
    gridArea: "main",
  },
  {
    id: "2",
    name: "Leather Tote Bag",
    price: 129.99,
    image: beg1,
    category: "Accessories",
    isNew: true,
    gridArea: "top-left",
  },
  {
    id: "3",
    name: "Bucket Hat",
    price: 34.99,
    image: cap,
    category: "Accessories",
    gridArea: "top-right",
  },
  {
    id: "4",
    name: "Classic Tote Bag",
    price: 89.99,
    image: beg2,
    category: "Accessories",
    gridArea: "bottom-left",
  },
  {
    id: "5",
    name: "Leather Handbag",
    price: 149.99,
    originalPrice: 179.99,
    image: beg3,
    category: "Accessories",
    isSale: true,
    gridArea: "bottom-right",
  },
];
