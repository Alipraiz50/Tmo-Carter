// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Features Your E-commerce Software Must Have",
      description:
        "Learn about the top features that every e-commerce platform needs to succeed in today’s competitive market.",
      image: "/images/image16.jpeg",
      author: "Jane Doe",
      date: "Nov 18, 2024",
    },
    {
      id: 2,
      title: "How AI is Revolutionizing E-commerce",
      description:
        "Discover how artificial intelligence is transforming online shopping experiences and boosting sales.",
      image: "/images/image18.jpeg",
      author: "John Smith",
      date: "Nov 17, 2024",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-black p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.header
        className="bg-blue-600 text-white py-6 text-center rounded-lg mb-8 shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold">Tmo Carter Blog</h1>
        <p className="mt-2 text-lg">
          Stay updated with the latest trends and tips in e-commerce
        </p>
      </motion.header>

      {/* Blog List */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 },
          },
        }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">By {blog.author}</span>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>
              <motion.button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                whileHover={{ scale: 1.1 }}
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-gray-800">
          Ready to Elevate The Tmo Carter Brand
        </h3>
        <p className="text-gray-600 mt-2">
          Discover how our Fashion Style can help you achieve your goals.
        </p>
        <motion.button
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
