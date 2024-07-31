import React from "react";
import weather from "../assets/weather.PNG";
import recipe from "../assets/recipe.PNG";

const Portfolio = () => {
    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold">Portfolio</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
                    <div className="relative shadow-md shadow-gray-700 rounded-lg overflow-hidden">
                        <img
                            src={recipe}
                            alt="Food recipe app"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <div className="text-white text-center text-lg">
                                <p className="mb-4">Food Recipe App</p>
                                <div className="flex flex-row gap-4 justify-center">
                                    <button
                                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleLinkClick("https://sarakhaled95.github.io/pinch-of-salt-app/")}>Link</button>
                                    <button
                                        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleLinkClick("https://github.com/sarakhaled95/pinch-of-salt-app")}>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative shadow-md shadow-gray-700 rounded-lg overflow-hidden">
                        <img
                            src={weather}
                            alt="Weather app"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <div className="text-white text-center text-lg">
                                <p className="mb-4">Weather App</p>
                                <div className="flex flex-row gap-4 justify-center">
                                    <button
                                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleLinkClick("https://sarakhaled95.github.io/alx-weather_app/")}>Link</button>
                                    <button
                                        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => handleLinkClick("https://github.com/sarakhaled95/alx-weather_app")}>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
