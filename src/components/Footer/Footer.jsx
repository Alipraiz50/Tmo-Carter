// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion"; // Importing motion from Framer Motion
import Logo from "../../assets/logo.png";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-12">
      {/* Footer Top */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center"
      >
        {/* Logo and description */}
        <div className="text-center sm:text-left">
          <a href="#" className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="w-12" />
            <span className="text-2xl font-bold">TmoCarter</span>
          </a>
          <p className="text-gray-400 text-sm">
            Your destination for the latest fashion trends and more. We aim to provide the best
            e-commerce experience with a focus on style and quality.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 mt-6 sm:mt-0">
          <ul className="text-center sm:text-left">
            <li className="text-lg font-semibold mb-3">Quick Links</li>
            <li>
              <a href="/#" className="text-gray-400 hover:text-purple-500 duration-200">Home</a>
            </li>
            <li>
              <a href="/#services" className="text-gray-400 hover:text-purple-500 duration-200">Wears</a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 hover:text-purple-500 duration-200">Dashboard</a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 hover:text-purple-500 duration-200">About</a>
            </li>
          </ul>

          <ul className="text-center sm:text-left">
            <li className="text-lg font-semibold mb-3">Follow Us</li>
            <li className="flex justify-center sm:justify-start gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                <FiFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <FiTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <FiInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                <FiLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-600 text-center py-4"
      >
        <p className="text-sm text-white-600">&copy; {new Date().getFullYear()} AliPraise. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
