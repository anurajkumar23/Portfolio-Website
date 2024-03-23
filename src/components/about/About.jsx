import React from "react";
import "./about.css";
import AboutImg from "../../assests/about2.jpg";
import CV from "../../assests/Anuraj kumar resume.pdf";
import Info from "./info";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full py-20" id="about">
      <div className="w-full flex gap-x-2 justify-center items-center sm:text-4xl text-[1.4rem] font-bold pb-6">
        <p>All</p>
        <p className="text-red-600">About</p>
        <p>Me And My</p>
        <p className="text-red-600">Experience</p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1.5, scale: 1 }}
        transition={{ duration: 1 }} 
      >
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data pb-10">
            <Info />
            <p className="about__description pt-6">
              I am a Full-stack developer with industry experience building
              websites and web applications. I specialize in JavaScript and
              have professional experience working with C, C++, HTML, CSS, and
              React. I also have experience working with MongoDB, Express js,
              Firebase, MySQL, PHP, Java, and jQuery. I would love to combine
              my passion for learning and teaching with my software development
              skills to continue building software products for people and make
              their lives easier.
            </p>

            <Link
              to={CV}
              download
              className="flex max-w-36 max-sm:ml-2 p-2 border bg-red-600 text-white font-semibold rounded-lg"
            >
              <FaFileAlt />
              Download CV
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
