
import { useState, useEffect } from 'react'
import './IntroAnimation.css'

export default function IntroAnimation({ onComplete }) {

    const words = ['This is a test', 'This is only a test', 'Do not be alarmed']
    const colors = ['red', 'blue', 'green']

    const [phraseIndex, setPhraseIndex] = useState(0)
    const [letterCount, setLetterCount] = useState(0)
    const [direction, setDirection] = useState(1)
    const [isWaiting, setIsWaiting] = useState(false)
    const [visible, setVisible] = useState(true)


    useEffect(() => {

        const typingInterval = setInterval(() => {
            if (isWaiting) return

            if (letterCount === words[phraseIndex].length + 1) {
                setIsWaiting(true)
                setTimeout(() => {
                    setDirection(-1)
                    setLetterCount(prevCount => prevCount + direction)
                    setIsWaiting(false)
                }, 10)
            } else if (letterCount === 0 && direction === -1) {
                setIsWaiting(true)
                setTimeout(() => {
                    if (phraseIndex < words.length - 1) {
                        const newIndex = phraseIndex + 1
                        setPhraseIndex(newIndex)
                        setDirection(1)
                    } else {
                        clearInterval(typingInterval)
                    }
                    setIsWaiting(false)
                }, 1000)
            } else {
                setLetterCount(prevCount => prevCount + direction)
            }
        }, 120)

        const cursorInterval = setInterval(() => {
            setVisible(visible => !visible)
        }, 400)

        return () => {
            clearInterval(typingInterval)
            clearInterval(cursorInterval)
        }
    }, [isWaiting, letterCount, direction, phraseIndex, words])

    return (
        <div className="IntroAnimation">
            <div style={{ color: colors[phraseIndex] }}>
                <span id='intro-text'>{words[phraseIndex].substring(0, letterCount)}</span>
                <span className={visible ? 'console-underscore' : 'console-underscore-hidden'}>
                    _
                </span>
            </div>
            <button onClick={onComplete}>Skip Intro</button>
        </div>
    )
}