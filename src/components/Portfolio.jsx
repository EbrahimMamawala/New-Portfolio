import React from "react";
import WeatherVue from "../assets/portfolio/WeatherVue.jpg";
import blogWebsite from "../assets/portfolio/Blog-Website.jpg";
import capitalQuiz from "../assets/portfolio/CapitalQuiz.jpg";
import bandGenerator from "../assets/portfolio/BandGen.jpg";
import iotGamified from "../assets/portfolio/IOTGamified.jpg";
import travelTracker from "../assets/portfolio/TravelTracker.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: WeatherVue,
      name: "WeatherVue",
      codeLink: "https://github.com/EbrahimMamawala/WeatherVue",
    },
    {
      id: 2,
      src: travelTracker,
      name: "Travel Tracker",
      codeLink: "",
    },
    {
      id: 3,
      src: iotGamified,
      name: "IoT Gamified Blueprint",
      codeLink: "https://github.com/EbrahimMamawala/IOT-Gamified-final/tree/main",
    },
    {
      id: 4,
      src: blogWebsite,
      name: "Blog Website",
      codeLink: "https://github.com/EbrahimMamawala/Blog-API",
    },
    {
      id: 5,
      src: capitalQuiz,
      name: "World Capital Quiz",
      codeLink: "https://github.com/EbrahimMamawala/World-Capital-Quiz",
    },
    {
      id: 6,
      src: bandGenerator,
      name: "Band Name Generator",
      codeLink: "https://github.com/EbrahimMamawala/Band-Name-Generator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <p className="text-2xl p-3 text-center font-bold">{name}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={()=>window.open(codeLink, '_blank')}className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;