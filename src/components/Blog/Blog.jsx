// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import product1 from "../../assets/hero/image16.jpeg";
import product2 from "../../assets/hero/image17.jpeg";
import product3 from "../../assets/hero/image18.jpeg";
import product4 from "../../assets/hero/image19.jpeg";

const TopProducts = () => {
  const products = [
    { id: 1, image: product1, name: "Carter Summer Collection", price: "$80" },
    { id: 2, image: product2, name: "Carter Summer Collection 21", price: "$120" },
    { id: 3, image: product3, name: "Carter Drip shirt", price: "$300" },
    { id: 4, image: product4, name: "Carter Dreamer Collection", price: "$70" },
  ];

  return (
    <div className="p-7 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
        Shirts and Tops
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg p-4 shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-lg font-bold text-black">{product.name}</h2>
              <p className="text-blue-500 font-semibold">{product.price}</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Order More Shirts
        </button>
      </div>
    </div>
  );
};

export default TopProducts;
