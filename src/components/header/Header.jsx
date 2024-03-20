import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSetActiveLink = (link) => {
    if (link !== activeLink) {
      setActiveLink(link);
    } else {
      setActiveLink('');
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-slate-100">
      <nav className="container flex justify-between items-center gap-x-4 py-4">
        <a href="#home" className="flex text-4xl font-bold px-8">
          <p>Anu</p>
          <p className="text-red-600">raj</p>
        </a>

        <div className={`w-full justify-end mr-10 flex nav__menu bg-slate-100 md:bg-inherit ${toggle ? 'show-menu' : ''}`}>
          <ul className="md:flex  gap-10 md:text-xl md:font-semibold font-medium grid grid-cols-3 max-md:w-full ">
            <li className="">
              <a href="#home" className={`nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === 'home' ? 'underline text-red-600' : ''}`} onClick={() => handleSetActiveLink('home')}>
                <i className="uil uil-estate nav__icon items-center px-2"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className={`nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === 'about' ? 'underline text-red-600' : ''}`} onClick={() => handleSetActiveLink('about')}>
                <i className="uil uil-user nav__icon px-2"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className={`nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === 'skills' ? 'underline text-red-600' : ''}`} onClick={() => handleSetActiveLink('skills')}>
                <i className="uil uil-file-alt nav__icon px-2"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className={`nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === 'services' ? 'underline text-red-600' : ''}`} onClick={() => handleSetActiveLink('services')}>
                <i className="uil uil-briefcase-alt nav__icon px-2"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#Porfolio" className={`nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === 'portfolio' ? 'underline text-red-600' : ''}`} onClick={() => handleSetActiveLink('portfolio')}>
                <i className="uil uil-scenery nav__icon px-2"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="/contact" className={`nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === 'contact' ? 'underline text-red-600' : ''}`} onClick={() => handleSetActiveLink('contact')}>
                <i className="uil uil-message nav__icon px-2"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close "
            onClick={handleToggle}
          ></i>
        </div>
        <div className="nav__toggle px-3" onClick={handleToggle}>
          <i className={`uil uil-apps text-red-600 text-2xl ${toggle ? 'transform rotate-90 border-2 p-2 rounded-xl border-blue-300' : ''}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
