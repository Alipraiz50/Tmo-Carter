// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi"; // Import Cart Icon
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Wears", link: "/#services" },
  { id: 3, name: "Dashboard", link: "/#" },
  { id: 5, name: "About", link: "/#" },
];

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-black dark:bg-gray-900 dark:text-white duration-200
        relative z-40"
    >
      {/* Upper Navbar */}
      <div className="bg-black py-3">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-12" />
              TmoCarter
            </a>
          </div>

          {/* Search bar, Cart, and Dark Mode */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
               rounded-full border border-gray-300 px-2 py-1 focus:outline-none 
               focus:border-1 focus:border-purple-400"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-blue-500
               absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Cart Icon */}
            <div className="relative">
              <FiShoppingCart className="text-white text-2xl hover:text-purple-500 transition cursor-pointer" />
              {/* Cart Item Count */}
              <span
                className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1.5 
              translate-x-2 -translate-y-2"
              >
                3
              </span>
            </div>

            {/* Dark Mode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center bg-black">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-purple-600 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
