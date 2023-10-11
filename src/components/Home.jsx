import React from "react";
import HeroImage from "../assets/img-6.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hello, my name is Anvar Ganiyev and I am a Frontend developer. I have been working as a JavaScript developer at "Algorithm Consulting Group" for 6 months. I am proficient in HTML, CSS, Sass, Bootstrap, GSAP, JavaScript, jQuery, TypeScript, Ajax, React JS, Redux, RTK Query, React Query, MaterialUI,Tailwind Css, HeadlessUI, ReactBootstrap, Firebase, Git, GitHub, NextJs, and VueJs base. I am also constantly learning new technologies and aspiring to become a strong frontend developer in the future.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-96">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full object-cover h-60 md:h-96 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
