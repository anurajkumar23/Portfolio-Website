import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./header.css";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


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



  const menuItems = [
    {
      id: 1,
      title: 'Home',
      class:'uil uil-estate nav__icon items-center px-2'
    },
    {
      id: 2,
      title: 'About',
      class:'uil uil-user nav__icon px-2'
    },
    {
      id: 3,
      title: 'Skills',
      class:'uil uil-file-alt nav__icon px-2'
    },
    {
      id: 4,
      title: 'Services',
      class:'uil uil-briefcase-alt nav__icon px-2'
    },
    {
      id: 5,
      title: 'Portfolio',
      class:'uil uil-scenery nav__icon px-2'
    },
    {
      id: 6,
      title: 'Contact',
      class:'uil uil-message nav__icon px-2'
    }
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-slate-100">
      <nav className="container flex justify-between items-center gap-x-4 py-4">
        <a href="#home" className="flex text-4xl font-bold px-8">
          <p>Anu</p>
          <p className="text-red-600">raj</p>
        </a>

        <div className={`w-full justify-end mr-10 flex nav__menu bg-slate-100 md:bg-inherit ${toggle ? 'show-menu' : ''}`}>
          <ul className="md:flex  gap-10 md:text-xl md:font-semibold font-medium grid grid-cols-3 max-md:w-full ">

            {menuItems.map((menu) => (
            <p key={menu.id}>
              <i className={menu.class}></i>
              <Link
                to={menu.title}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                onSetActive={() => handleSetActiveLink(menu.title)}
                className={`cursor-pointer nav__link sm:hover:bg-red-600 sm:hover:p-2 sm:hover:rounded-lg sm:hover:text-white sm:hover:no-underline ${activeLink === menu.title ? 'underline text-red-600' : ''}`}
              >{menu.title}</Link>
            </p>
          ))}

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
