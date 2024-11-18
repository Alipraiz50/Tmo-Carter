// eslint-disable-next-line no-unused-vars
import React from "react";
import discountBanner from "../../assets/hero/image11.png";

const DiscountBanner = () => {
    return (
        <div
            className="pb-[3rem] pt-[5rem] bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${discountBanner})`, // Set the background image
            }}
        >
            <div className="w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-[2rem] bg-black bg-opacity-70 rounded-md p-[2rem]">
                {/* Banner Content */}
                <div className="text-center lg:text-left text-white w-full">
                    <p className="heading__mini text-yellow-300">Tmo Carter Special Offer</p>
                    <h1 className="heading__primary text-4xl font-bold">
                        Save Up to <span className="text-red-500">50% Off</span>
                    </h1>
                    <p className="mt-[1rem] text-[16px] text-gray-300">
                        Grab the latest deals on your favorite products on Tmo Carter Store. Limited time offer!
                    </p>
                    <button className="mt-[2rem] bg-red-600 hover:bg-red-700 text-white px-[2rem] py-[0.8rem] rounded-md text-[16px]">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;