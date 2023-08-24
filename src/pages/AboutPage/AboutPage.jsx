
import AboutMe from '../../components/AboutMe/AboutMe'
import Logos from '../../components/Logos/Logos'
import './AboutPage.css'

export default function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="wrapper">
                <h1 className='page-title'>About Me</h1>
                <AboutMe />
                <h2 className='logos-title'>Tehcnologies Used</h2>
                <span className="logos-component">
                    <Logos />
                </span>
            </div>
        </div>
    )
}