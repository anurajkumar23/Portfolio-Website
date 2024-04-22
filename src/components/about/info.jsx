import React from 'react'

const info = () => {
  return (
    <div className= "about__info grid font-bold mx-1">

    <div className="about__box bg-red-600 text-white border-2 border-blue-200">
    <i class= 'bx bx-award about__icon'></i>

    <h3 className= "about__title">Experience</h3>
    <span className="about__subtitle">2+ years Working</span>
    </div>

    <div className="about__box  bg-red-600 text-white border-2 border-blue-200 ">
    <i class= 'bx bx-briefcase-alt about__icon' ></i>
    <h3 className= "about__title">Completed</h3>
    <span className="about__subtitle">50+ Projects</span>
    </div>

    <div className="about__box  bg-red-600 text-white border-2 border-blue-200">
    <i class= 'bx bx-support about__icon'></i>

    <h3 className= "about__title">Support</h3>
    <span className="about__subtitle">Online 24/7</span>
    </div>


    </div>

  )
}

export default info
