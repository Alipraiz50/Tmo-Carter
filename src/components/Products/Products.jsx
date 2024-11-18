// eslint-disable-next-line no-unused-vars
import react from "react";
import Image7 from "../../assets/hero/image4.jpeg";
import Image8 from "../../assets/hero/image8.jpeg";
import Image9 from "../../assets/hero/image9.jpeg";
import Image10 from "../../assets/hero/image10.jpeg";
import Image11 from "../../assets/hero/image11.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
      id: 1,
      img: Image7,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Image8,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Image9,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Image10,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Image11,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];


const Products = () => {
    return (
    <div className="mt-14 mb-12 bg-black">
      <div className="container">
     {/*Header section */}
     <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">Our best Selling Products</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Outfit</h1>
        <p data-aos="fade-up" className="text-xl text-white ">
            Tmo Carter Brand stands for classy style and comfort all in one 
          package.This brand was designed around excellence and structured for 
          customer satisfaction.
        </p>
     </div>
     {/*Body section */}
     <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
        lg:grid-cols-5 place-items-center gap-5">
        {/* card section */}
        {ProductsData.map((data) => (
                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} 
                key={data.id} 
                className="space-y-3">
                 <img 
                 src={data.img} 
                 alt="" 
                 className="h-[220px] w-[150px] object-cover rounded-md"
                 />
                 <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-gray-700" />
                      <span>{data.rating}</span>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer
          bg-orange-300 text-white py-1 p rounded-md">
            View All</button>
        </div>
     </div>
     </div>
    </div>
    );
};

export default Products;