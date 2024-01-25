import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/Bootstrap_logo.png";
import postman from "../assets/postman-icon.webp";
import postgres from "../assets/Postgresql.png";
import node from "../assets/NodeJs.png";
import java from "../assets/java.png";
import cplusplus from "../assets/c-plus.png";
import swift from "../assets/swift.png";
import python from "../assets/python.png";
import azure from "../assets/azure.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 9,
        src: postgres,
        title: "PostgreSQL",
        style: "shadow-blue-700",
      },
      {
        id: 10,
        src: node,
        title: "Node.js",
        style: "shadow-green-400",
      },
      {
        id: 11,
        src: java,
        title: "Java",
        style: "shadow-blue-800",
      },
      {
        id: 12,
        src: cplusplus,
        title: "C++",
        style: "shadow-blue-500",
      },
      {
        id: 13,
        src: swift,
        title: "Swift",
        style: "shadow-orange-600",
      },
      {
        id: 14,
        src: python,
        title: "Python",
        style: "shadow-yellow-600",
      },
      {
        id: 14,
        src: azure,
        title: "Azure",
        style: "shadow-blue-500",
      },
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black md:h-full"
    >
      <div className="max-w-screen-lg mx-auto my-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies and skills that I bring to the table</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;