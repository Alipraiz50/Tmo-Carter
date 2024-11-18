// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import AnimatedTextImage from "./components/AnimatedTextImage/AnimatedTextImage"
import Features from "./components/Features/Features"
import Products from "./components/Products/Products"
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./components/Card/Card"
import image12 from './assets/hero/image12.svg'; // Correct relative path
import image13 from './assets/hero/image13.svg'; // Add more images as needed
import image14 from './assets/hero/image14.svg'; // Add more images as needed
import Testimonial from "./components/Testimonial/Testimonial"
import Subscribe from "./components/Subscribe/Subscribe"
import Blog from "./components/Blog/Blog"
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer"

const cardData = [
  { id: 1, image: image12, title: 'CEO-Ali Praise' },
  { id: 2, image: image13, title: 'Creative Designer-Moses Illiya' },
  { id: 3, image: image14, title: 'Brand Manager-Grace Ali' },
];


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
return(
  <div>
    <Navbar />
    <Hero />
    <AnimatedTextImage />
    <Features />
    <Products />
    <div className="min-h-screen bg-black flex flex-col items-center">
      <div className="relative w-full max-w-6xl"> {/* Container for cards */}
        <h2 className="absolute top-0 left-0 w-full text-center text-2xl font-bold text-gray-700 py-4">
          Tmo Carter Management
        </h2>
        <div className="flex flex-row items-center justify-between mt-16 pb-8"> {/* Adjusted margin-top */}
          {cardData.map(card => (
            <div className="flex-none w-1/4 mx-2 pb-9 " key={card.id}> {/* Added horizontal margin */}
              <Card image={card.image} title={card.title} />
            </div> 
          ))}
        </div>
        <h4 data-aos="fade-up" className="text-xl text-white ">Tmo Carter Management is a dynamic and innovative team dedicated to delivering 
          exceptional solutions in 
          talent development, project management, and strategic planning. With a focus on fostering creativity, professionalism, and growth, 
          we empower our clients to achieve their goals and maximize their potential. Our commitment to excellence and a collaborative approach ensures impactful results in every endeavor. 
          At Tmo Carter Management, success is not just our aim, it is our standard.
          </h4>
      </div>
    </div>
    <Testimonial />
    <Subscribe />
    <Blog />
    <Text />
    <Footer />
    </div>
  
)
}


export default App
