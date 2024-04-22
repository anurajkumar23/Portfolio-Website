import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-slate-100 " id='Home'>
     <div className="grid grid-cols-2 w-3/4">
        <div className="home__img"></div>
        <Data/>
      </div>
    </section>
  );
};

export default Home;
