import React, { useState } from "react";
import "./qualification.css";
import { motion } from "framer-motion";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="w-full py-20 " id="skills">
      <div className="w-full flex gap-x-2 justify-center items-center sm:text-4xl text-[1.4rem]  font-bold pb-6 ">
        <h1 className="text-red-600">Qualification</h1>
        <h1>My personal</h1>
        <h1 className="text-red-600"> Journey</h1>
      </div>
      <div>
        <div className="flex justify-center gap-x-10">
          <div
            className={`flex  cursor-pointer items-center rounded-lg p-1 px-2 shadow-md hover:bg-red-600 hover:text-white ${
              toggleState === 1
                ? " border-blue-300 bg-red-600 text-white"
                : "bg-slate-100"
            } 
    `}
            onClick={() => toggleTab(1)}
          >
            <i className="uil-graduation-cap text-3xl "></i>
            <h1 className="font-medium text-xl">Education</h1>
          </div>

          <div
            className={`flex  cursor-pointer items-center rounded-lg p-1 px-2 shadow-md hover:bg-red-600 hover:text-white ${
              toggleState === 2
                ? " border-blue-300 bg-red-600 text-white"
                : "bg-slate-100"
            }
    `}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt text-3xl font-semibold"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections pt-6">
          <div
            className={`
              ${
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }`}
          >
            <div className="qualification__data">
              <motion.div
                initial={{ opacity: 0,x: -50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-end font-semibold">
                  <h3>Web Development</h3>
                  <span className="qualification__subtitle">
                    React.js developer
                  </span>
                  <div className="qualification__calender">
                    2021 - 2022
                    <i className="text-red-600 uil-calendar-alt"></i>
                  </div>
                </div>
              </motion.div>
              <div>
                <span className="qualification__rounder "></span>
                <span className="qualification__line "></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <motion.div
                initial={{ opacity: 0,x: 50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="font-semibold">
                <h3>Web Design</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>
              </motion.div>
            </div>

            <div className="qualification__data">
            <motion.div
                initial={{ opacity: 0,x: -50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="text-end font-semibold">
                <h3>Machine Learning</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  2022-2023
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                </div>
              </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <motion.div
                initial={{ opacity: 0,x: 50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="font-semibold">
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>
              </motion.div>
            </div>
            <div className="qualification__data">
            <motion.div
                initial={{ opacity: 0,x: -50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="text-end font-semibold">
                <h3>Full Stack Developer</h3>
                <h3>Next.Js developer</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  2023-Present
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                </div>
              </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
            <motion.div
                initial={{ opacity: 0,x: -50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="text-end font-semibold">
                <h3>Web Designer</h3>
                <span className="qualification__subtitle">Figma</span>
                <div className="qualification__calender">
                  2021 - 2022
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                </div>
              </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <motion.div
                initial={{ opacity: 0,x: 50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="font-semibold">
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                  2021 - 2022
                </div>
              </div>
              </motion.div>
            </div>

            <div className="qualification__data">
            <motion.div
                initial={{ opacity: 0,x: -50}}
                whileInView={{ opacity: 1.5,scale:1,x:0 }}
                transition={{ duration: 1 }}
              >
              <div className="text-end font-semibold">
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  2021 - 2022
                  <i className="text-red-600 uil uil-calendar-alt"></i>
                </div>
              </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
