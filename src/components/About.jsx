import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, my name is Anvar Ganiyev and I am a Frontend developer. I was born in 2001 in Krasnagorsk, Tashkent region. I have been interested in programming since my youth. This year, I graduated from Tashkent State Technical University named after Islam Karimov. My hobbies include coding, reading various books, and watching anime.

I am proficient in HTML, CSS, Sass, Bootstrap, GSAP, JavaScript, jQuery, TypeScript, Ajax, React JS, Redux, RTK Query, React Query, MaterialUI, HeadlessUI, ReactBootstrap, Firebase, Git, GitHub, NextJs, and VueJs. I am also constantly learning new technologies and aspiring to become a strong frontend developer in the future.

I have been working as a JavaScript developer at "Algorithm Consulting Group" for 6 months. Our company primarily develops software for ERP systems, similar to the 1C program, and I am responsible for creating the user interface (UI) for these programs. Due to the financial accounting nature of the program, I am unable to add the work I have done to my portfolio.
        </p>
      </div>
    </div>
  );
};

export default About;
