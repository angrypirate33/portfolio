
import { Link } from 'react-router-dom'
import ProfilePic from '../../images/me.jpg'
import LinkedinLogo from '../../images/linkedin.svg'
import ResumeLogo from '../../images/resume.svg'
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='HomePage'>
            <div className="wrapper">
                <div className="parallax-container">
                    <div className="parallax-content">
                        <h1 className="parallax-header">
                            Jon Schiavone, Full-Stack Web Developer
                        </h1>
                        <h3 className="parallax-body">
                            Crafting unique and performant digital solutions.
                        </h3>
                        <div className="image-wrapper">
                            <img src={ProfilePic} alt="Jon Schiavone" className="profile-pic" />
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/jon-schiavone-9436ba21b" target='_blank' rel='noopener noreferrer' className='linkedin-link'>
                                <img src={LinkedinLogo} alt="Linkedin Logo" className='linkedin-logo' />
                                LinkedIn
                            </a>
                            <a href="/resume.pdf" target='_blank' rel='noopener noreferrer' className='resume-link'>
                                <img src={ResumeLogo} alt="Resume" className='resume-logo' />
                                Resume
                            </a>
                        </div>
                    </div>
                    <div className="parallax-background"></div>
                </div>
            </div>
        </div>
    )
}