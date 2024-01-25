import React from "react";
import aboutImage from "../assets/about-image.jpg"

const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col-reverse items-center w-full h-full bg-gradient-to-b from-gray-800 to-black text-white md:flex-row"
    >
        <div className="md:w-2/3">
            <img src={aboutImage} alt="Adventure depiction" className="rounded-2xl mx-auto w-2/3 md:w-4/5 shadow-lg shadow-blue-400"/>
        </div>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
            </p>
            </div>

            <p className="text-xl mt-10">
            As someone who is genuinely curious about the ever-evolving world of technology, I enjoy the challenge of solving complex problems and creating elegant solutions. Whether it's crafting server-side applications with Node.js and Express or designing engaging user interfaces using React, I am continuously striving to develop digital experiences that not only work seamlessly but also capture the imagination.
            </p>

            <br />

            <p className="text-xl">
            Outside the digital realm, you'll find me pursuing sunsets on scenic hikes, cycling through the great outdoors, and discovering new corners of the world. As an enthusiastic adventurer, I believe that the excitement of coding is heightened by the natural rhythm and joy of exploration. 🌍
            </p>
        </div>
    </div>
  );
};

export default About;