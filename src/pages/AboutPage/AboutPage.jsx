
import AboutMe from '../../components/AboutMe/AboutMe'
import Logos from '../../components/Logos/Logos'
import './AboutPage.css'

export default function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="wrapper">
                <h1 className='page-title'>About Me</h1>
                <AboutMe />
                <h1 className='logos-title'>Tehcnologies Used</h1>
                <Logos />
            </div>
        </div>
    )
}