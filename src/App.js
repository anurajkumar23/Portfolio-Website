import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Qualification from './qualification/Qualification'
import Testimonials from './components/testimonials/Testimonials'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <div>
      <Header/>
    <main className= 'main'>
      <div >
        <Home />
        <About/>
        <Skills/>
        {/* <Services/> */}
        <Qualification/>
        {/* <Testimonials/> */}
        <Projects/>
        </div>
    </main>
   </div>
  )
}

export default App
