
import {useState, useEffect } from 'react'
import IntroAnimation from '../../components/IntroAnimation/IntroAnimation'
import AboutMe from '../../components/AboutMe/AboutMe'
import Logos from '../../components/Logos/Logos'
import './AboutPage.css'

export default function AboutPage({ showAnimation }) {

    const [showAboutContent, setShowAboutContent] = useState(true)   
    const [timer, setTimer] = useState(null) 

    useEffect(() => {
        if (showAnimation) {
            setShowAboutContent(false)
            const newTimer = setTimeout(() => {
                setShowAboutContent(true)
            }, 16500)
            setTimer(newTimer)
        }
        return () => clearTimeout(timer)
    }, [showAnimation])

    function onComplete() {
        clearTimeout(timer)
        setShowAboutContent(true)
    }

    return (
        <div className="AboutPage">
            <div className="wrapper">
                <div className="conditional-container">
                    { !showAboutContent ? <IntroAnimation onComplete={onComplete}/> : 
                    <div>
                        <h1 className='page-title'>About Me</h1>
                        <AboutMe />
                        <h2 className='logos-title'>Tehcnologies Used</h2>
                        <span className="logos-component">
                            <Logos />
                        </span>
                    </div>
                }</div>
            </div>
        </div>
    )
}