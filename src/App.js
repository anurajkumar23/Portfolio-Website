import React from 'react'
import "./App.css"
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Qualification from './qualification/Qualification'
import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <div>
      <Header/>
    <main className= 'main'>
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Testimonials/>
    </main>
   </div>
  )
}

export default App
