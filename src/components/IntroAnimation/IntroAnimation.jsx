
import { useState, useEffect, useMemo } from 'react'
import './IntroAnimation.css'

export default function IntroAnimation({ onComplete }) {

    const baseLines =  useMemo(() => [
        'Hello, I am Jon Schiavone.',
        'I am a ',
        'Thank you for visiting my portfolio!'
    ], [])

    const changingPhrases = ['critical thinker.', 'problem solver.', 'full-stack web developer.']

    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [currentCharIndex, setcurrentCharIndex] = useState(0)
    const [changingPhraseIndex, setChangingPhraseIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        function typeChar() {
            
            let currentLine = baseLines[currentLineIndex]
            
            if (currentLineIndex === 1) {
                currentLine += changingPhrases[changingPhraseIndex]
            }

            if (currentCharIndex === currentLine.length && direction === 1) {
                if (currentLineIndex === 1) {
                    if (changingPhraseIndex < changingPhrases.length - 1) {
                        setChangingPhraseIndex(prev => prev + 1)
                        setDirection(-1)
                        setcurrentCharIndex(baseLines[1].length)
                    } else {
                        setCurrentLineIndex(prev => prev + 1)
                        setcurrentCharIndex(0)
                    }
                } else if (currentLineIndex < baseLines.length - 1) {
                    setCurrentLineIndex(prev => prev + 1)
                    setcurrentCharIndex(0)
                }
            } else if (currentCharIndex === baseLines[1].length && direction === -1 && currentLineIndex === 1) {
                setDirection(1)
            } else {
                setcurrentCharIndex(prev => prev + direction)
            }
        } 

        const typingInterval = setInterval(typeChar, 120)

        return () => {
            clearInterval(typingInterval)
        }
    }, [currentLineIndex, currentCharIndex, direction, changingPhraseIndex, baseLines])

    return (
        <div className='IntroAnimation'>
            <div className='animation-container'>
                {baseLines.map((line, index) => {
                    if (index > currentLineIndex) {
                        return null
                    }

                    let content = line
                    if (index === currentLineIndex) {
                        if (index === 1) {
                            content += changingPhrases[changingPhraseIndex].substring(0, currentCharIndex - line.length)
                        } else {
                            content = line.substring(0, currentCharIndex)
                        }
                    } else if (index < currentLineIndex) {
                        if (index === 1) {
                            content += changingPhrases[changingPhrases.length - 1]
                        }
                    }

                    return (
                        <div key={index}>
                            {content}
                            {index === currentLineIndex && <span className='console-underscore'>&#95;</span>}
                        </div>
                    ) 
                })}
            </div>
            <button onClick={onComplete}>Skip Intro</button>
        </div>
    )
}