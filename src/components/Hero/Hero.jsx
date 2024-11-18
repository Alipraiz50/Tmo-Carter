
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Image1 from "../../assets/hero/image2.jpeg";
import Image2 from "../../assets/hero/image2.jpeg";
import Image3 from "../../assets/hero/image18.jpeg";
import Image4 from "../../assets/hero/image9.jpeg";
import Image5 from "../../assets/hero/image11.png";

const slides = [
  {
    id: 1,
    title: '',
    description: '',
    image: Image1, // Use the imported variable
  },
  {
    id: 2,
    title: '',
    description: '',
    image: Image2, // Fixed typo
  },
  {
    id: 3,
    title: '',
    description: '',
    image: Image3, // Use the imported variable
  },
  {
    id: 4,
    title: '',
    description: '',
    image: Image4, // Use the imported variable
  },
  {
    id: 5,
    title: '',
    description: '',
    image: Image5, // Use the imported variable
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-400 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-3xl font-bold text-blue-950">{slide.title}</h2>
            <p className="mt-2 text-lg text-blue-950">{slide.description}</p>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200">
        Next
      </button>
    </div>
  );
};

export default Hero;
