import React, { useState } from "react";
import Test1 from "../../assests/testimonial1.png";
import unchiudaan from "../../assests/Screenshot 2024-04-21 002627.png"
import codebird from "../../assests/Screenshot 2024-04-21 003305.png"
import Card from "../card/Card";
import Test2 from "../../assests/testimonial2.png"

const Projects = () => {
  const Projects = [
    { id: "1", src: unchiudaan, alt: "Banquet", title: "Unchi udaan classes", description: "[A Freelancing Website] Unchiudaan is an education-based portal from which users can learn about current affairs, read news, take tests to assess their knowledge,and get monthly pdfs via free and paid access", techStack:"React,Next js Html,css Javascript,typescript"},
    { id: "2", src: codebird, alt: "Banquet", title: "THE CODEBIRD - COLLEGE CODING CLUB" , description: "Developed and maintained the official website of codebird,• Created dedicated sections for various domains (Web Dev,Android, AI/ML, etc.). ", techStack:"React,Html,css Javascript, nodeJs, Express, mongoDB"},
    // { id: "3", src: Catering, alt: "Catering", title: "Caterers" },
    // { id: "4", src: Photographer, alt: "Photographer", title: "Photographers" }
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="w-full py-20 bg-slate-100" id="Portfolio">
      <div className="w-full flex gap-x-2 justify-center items-center sm:text-4xl text-2xl font-bold pb-6 ">
        <h1>My Creative </h1>
        <h1 className="text-red-600">Portfolio</h1>
        <h1> Projects </h1>
      </div>
      <div className="flex justify-center gap-x-5">
        <div
          className={`flex  cursor-pointer items-center rounded-lg p-1 px-2 shadow-md hover:bg-red-600 hover:text-white ${
            toggleState === 1 ? " border-blue-300 bg-red-600 text-white border-2" : "bg-white"
          }`}
          onClick={() => toggleTab(1)}
        >
          <h1 className="font-medium text-xl">All</h1>
        </div>
        <div
          className={`flex  cursor-pointer items-center rounded-lg p-1 px-2 shadow-md hover:bg-red-600 hover:text-white ${
            toggleState === 2 ? " border-blue-300 bg-red-600 text-white border-2" : "bg-white"
          }`}
          onClick={() => toggleTab(2)}
        >
          <h1 className="font-medium text-xl">Next</h1>
        </div>

        <div
          className={`flex  cursor-pointer items-center rounded-lg p-1 px-2 shadow-md hover:bg-red-600 hover:text-white ${
            toggleState === 3 ? " border-blue-300 bg-red-600 text-white" : "bg-white"
          }`}
          onClick={() => toggleTab(3)}
        >
          <h1 className="font-medium text-xl">React</h1>
        </div>
        <div
          className={`flex  cursor-pointer items-center rounded-lg p-1 px-2 shadow-md hover:bg-red-600 hover:text-white ${
            toggleState === 4 ? " border-blue-300 bg-red-600 text-white" : "bg-white"
          }`}
          onClick={() => toggleTab(4)}
        >
          <h1 className="font-medium text-xl">Javascript</h1>
        </div>
      </div>
      <div className=' mx-6 mt-5 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10'>
      {Projects.map((card) => (
        <Card 
          key={card.id}
          img={card.src}
          alt={card.alt}
          title={card.title}
          Description={card.description}
          TechStack={card.techStack}
          Video={card.video}
          Live={card.live}
          Github={card.github}
        />
      ))}
      </div>
    </div>
  );
};

export default Projects;
