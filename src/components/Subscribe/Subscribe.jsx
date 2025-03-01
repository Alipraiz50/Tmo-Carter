// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
    return (
        <div
            data-aos="zoom-in"
            className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
            style={BannerImg}
        >
            <div className="container backdrop-blur-sm py-10">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
                        Receive Notification About New Products
                    </h1>
                    <input
                        data-aos="fade-up"
                        type="text"
                        placeholder="Enter your email"
                        className="w-full p-3"
                    />
                    <button
                        data-aos="fade-up"
                        className="w-full bg-black text-white p-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
