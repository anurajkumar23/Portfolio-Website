import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/anuraj_singh6294/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/anuraj-kumar-softwaredeveloper"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/anurajkumar23"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
