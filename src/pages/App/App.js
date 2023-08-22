
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation'
import './App.css';

export default function App() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />
  }

  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </main>
  )
}

