import React from "react";
import { FaVideo } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ img, alt, title, Description, TechStack, Video, Live, Github }) => {
  return (
    <div>
       <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1.5, scale: 1 }}
        transition={{ duration: 1 }} 
      >
    <div className="mb-6 border shadow-xl hover:shadow-2xl p-4 rounded-xl bg-white">
      <img
        src={img}
        alt={alt}
        width={800} // Set the width of the image
        height={600} // Set the height of the image
        className=" object-cover sm:w-max-full sm:h-max-full cursor-pointer rounded-2xl"
      />
      <div className="px-5 mt-3">
        <div className="flex font-semibold sm:text-2xl text-xl justify-center">
          <h1>{title}</h1>
        </div>
        <h1 className="text-gray-500 text-sm h-max-[96px] overflow-hidden">
          {Description}
        </h1>

        <div className="flex text-sm gap-x-2 pt-2">
          <h1 className="text-red-600 font-semibold text-sm ">TechStack:</h1>
          <h1 className="text-gray-500">{TechStack}</h1>
        </div>
        <div className="pt-2 flex justify-between text-3xl">
          <a href={Video} target="_blank">
            <div className="p-2 rounded-full hover:text-white hover:bg-red-600 ">
            <FaVideo />
            </div>
          </a>
          <a href={Live} target="_blank">
          <div className="p-2 rounded-full hover:text-white hover:bg-red-600 ">
            <FaEye />
            </div>
          </a>
          <a href={Github} target="_blank" >
          <div className="p-2 rounded-full hover:text-white hover:bg-red-600 ">
            <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default Card;
