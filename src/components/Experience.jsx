import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import sass from '../assets/sass-3.png'
import bootstrap from '../assets/bootstrap.jpg'
import typescript from '../assets/typescript.jpg'
import redux from '../assets/redux.jpg'
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import material from '../assets/material.jpg';
import jQuery from '../assets/jquery.png';
import reactQuery from '../assets/reactQuery.png';
import ajaxQuery from '../assets/ajaxQuery.png';
import firebaseImg from '../assets/firebas.png';
import gitImg from '../assets/gitimg.png';
import nextJs from '../assets/next.webp';
import vueJS from '../assets/v.png';

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
      src: sass,
      title: "SASS",
      style: "shadow-pink-600",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-900",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: jQuery,
      title: "jQuery",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: ajaxQuery,
      title: "Ajax",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-700",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-700",
    },
    {
      id: 13,
      src: reactQuery,
      title: "React Query",
      style: "shadow-red-500",
    },
    {
      id: 14,
      src: material,
      title: "Material UI",
      style: "shadow-sky-900",
    },
    {
      id: 15,
      src: gitImg,
      title: "Git",
      style: "shadow-red-800",
    },
    {
      id: 16,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: firebaseImg,
      title: "Firebase",
      style: "shadow-orange-400",
    },
    {
      id: 18,
      src: nextJs,
      title: "Next Js",
      style: "shadow-blue-300",
    },
    {
      id: 19,
      src: vueJS,
      title: "Vue Js base",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="experience"
      // className="py-24 bg-gradient-to-b from-gray-800  to-black w-full"
      className="py-24 bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto bg-inherit" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
