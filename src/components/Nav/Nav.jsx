
import {useState, useEffect} from 'react'
import './Nav.css'

export default function Nav({ onAboutClick }) {

    const [activeSection, setActiveSection] = useState('home')

    function handleScroll() {
        const aboutOffsetTop = document.getElementById('about').offsetTop
        const projectOffsetTop = document.getElementById('projects').offsetTop

        if (window.scrollY < projectOffsetTop - 50) {
            setActiveSection('home')
        } else if (window.scrollY < aboutOffsetTop - 50) {
            setActiveSection('projects')
        } else {
            setActiveSection('about')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='Nav'>
            <div className='nav-container'>
                <div className='nav-links'>
                    <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href='#home'>Home</a>
                    <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href='#projects'>Projects</a>
                    <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={onAboutClick} href='#about'>About</a>
                </div>
            </div>
        </div>
    )
}