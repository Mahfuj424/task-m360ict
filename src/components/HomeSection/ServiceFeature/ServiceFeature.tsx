import { motion } from "framer-motion";
import { Truck, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Free Shipping",
    description: "On All Order Over $599",
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Easy Returns",
    description: "30 Day Returns Policy",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Secure Payment",
    description: "100% Secure Guarantee",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Special Support",
    description: "24/7 Dedicated Support",
  },
];

export default function ServiceFeatures() {
  return (
    <div className="bg-gray-50 py-8 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-purple-600 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
