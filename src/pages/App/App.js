
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import './App.css';

export default function App() {
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

