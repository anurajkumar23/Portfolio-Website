import React from "react";
import { motion } from "framer-motion";

const Backend = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1.5, scale: 1 }}
    transition={{ duration: 0.8 }} 
  >
    <div className="border-4 border-red-600 max-sm:full rounded-2xl mx-2">
      <h3 className="skills__title font-medium text-red-600">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">

        <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Next Js</h3>
              <h1 className="">[Full Stack]</h1>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          
          </div>

          <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>

            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Backend;
