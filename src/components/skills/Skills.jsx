import React from 'react'
import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Others from './Others'


const Skills = () => {
  return (
    <div className= "w-full py-20 bg-slate-100" id= "Skills">
      <div className='w-full flex gap-x-2 justify-center items-center sm:text-4xl text-2xl font-bold pb-6 '>
        <h1>My</h1>
      <h1 className='text-red-600'>Technical</h1>
      <h1>Skills</h1>
      </div>
      
      <div className= "w-full md:grid-cols-2 lg:grid-cols-3 gap-6 grid">

       <Frontend/>
       <Backend/>
       <Others/>
      </div>

    </div>

  )
}

export default Skills
