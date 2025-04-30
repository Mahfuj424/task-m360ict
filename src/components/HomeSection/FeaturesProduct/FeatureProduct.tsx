"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { featureProducts } from "../../../constant/featureProduct";

export default function EnhancedFeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
      </motion.div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {featureProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-[200px]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    SALE
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div
        className="hidden md:grid gap-6"
        style={{
          gridTemplateAreas: `
            "main top-left top-right"
            "main bottom-left bottom-right"
          `,
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {featureProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group"
            style={{ gridArea: product.gridArea }}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden h-full">
              <div
                className={`relative w-full ${
                  product.gridArea === "main" ? "h-[628px]" : "h-[300px]"
                }`}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    SALE
                  </span>
                )}

                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4 flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3
                      className={`font-medium ${
                        product.gridArea === "main" ? "text-lg" : ""
                      }`}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-semibold ${
                          product.gridArea === "main" ? "text-lg" : ""
                        }`}
                      >
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 text-center"
      >
        <button className="duration-500 font-semibold hover:bg-white hover:text-black hover:border text-lg transition bg-black text-white px-5 py-2 cursor-pointer rounded">
          View All Products
        </button>
      </motion.div>
    </section>
  );
}
