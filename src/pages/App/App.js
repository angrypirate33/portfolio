
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation'
import Nav from '../../components/Nav/Nav'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import './App.css';

export default function App() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 17000)

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />
  }

  return (
    <main className="App">
      <Nav />
      <div className='section' id='home'>
      <HomePage />
      </div>
      <div className='section' id='about'>
      <AboutPage />
      </div>
      <div className='section' id='projects'>
      <ProjectsPage />
      </div>

      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes> */}
    </main>
  )
}

