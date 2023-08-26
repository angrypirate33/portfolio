
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation'
import Nav from '../../components/Nav/Nav'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import './App.css';

export default function App() {

  const [showAboutAnimation, setShowAboutAnimation] = useState(false)

  function handleAboutClick() {
    setShowAboutAnimation(true)
  }  

  return (
    <main className="App">
      <Nav onAboutClick={handleAboutClick} />
      <div className='section' id='home'>
      <HomePage />
      </div>
      <div className='section' id='projects'>
      <ProjectsPage />
      </div>
      <div className='section' id='about'>
      <AboutPage showAnimation={showAboutAnimation} />
      </div>
    </main>
  )
}

