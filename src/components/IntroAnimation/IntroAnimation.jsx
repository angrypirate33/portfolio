
import { useState, useEffect, useMemo } from 'react'
import './IntroAnimation.css'

export default function IntroAnimation({ onComplete }) {

    const baseLines =  useMemo(() => [
        'Hello, I am Jon Schiavone.',
        'I am a ',
        'Thank you for visiting my portfolio!',
        ''
    ], [])

    const changingPhrases = ['critical thinker.', 'problem solver.', 'full-stack web developer.']

    const [typingState, setTypingState] = useState({
        currentLineIndex: 0,
        currentCharIndex: 0,
        changingPhraseIndex: 0,
        direction: 1
    })

    const { currentLineIndex, currentCharIndex, changingPhraseIndex } = typingState

    useEffect(() => {

        let skipNext = false

        function typeChar() {
            const { currentLineIndex, currentCharIndex, changingPhraseIndex, direction } = typingState
        
            if (direction === 1 && skipNext) {
                skipNext = !skipNext
                return
            }

            let newLineIndex = currentLineIndex
            let newCharIndex = currentCharIndex
            let newPhraseIndex = changingPhraseIndex
            let newDirection = direction
        
            let currentLine = baseLines[newLineIndex]
        
            if (newLineIndex === 1 && newCharIndex < baseLines[1].length) {
                newCharIndex += 1
            } else if (newLineIndex === 1) {
                const phraseCharIndex = newCharIndex - baseLines[1].length
                const currentPhrase = changingPhrases[newPhraseIndex]
        
                if (phraseCharIndex < currentPhrase.length && newDirection === 1) {
                    newCharIndex += 1
                } else if (newDirection === -1 && phraseCharIndex > 0) {
                    newCharIndex -= 1
                } else if (newDirection === -1 && phraseCharIndex === 0 && newPhraseIndex < changingPhrases.length - 1) {
                    newPhraseIndex += 1
                    newDirection = 1
                } else if (newPhraseIndex === changingPhrases.length - 1 && phraseCharIndex === currentPhrase.length) {
                    newLineIndex += 1
                    newCharIndex = 0
                } else {
                    newDirection = -1
                    newCharIndex -= 1
                }
            } else if (newCharIndex < currentLine.length) {
                newCharIndex += 1
            } else if (newCharIndex === currentLine.length && newLineIndex < baseLines.length - 1) {
                newLineIndex += 1
                newCharIndex = 0
            }
        
            setTypingState({ currentLineIndex: newLineIndex, currentCharIndex: newCharIndex, changingPhraseIndex: newPhraseIndex, direction: newDirection });

            if (direction === 1) {
                skipNext = !skipNext
            }
        }

        const intervalDuration = typingState.direction === 1 ? 100 : 40

        const typingInterval = setInterval(() => {
            const { currentLineIndex, currentCharIndex, changingPhraseIndex, direction } = typingState;
            typeChar(currentLineIndex, currentCharIndex, changingPhraseIndex, direction);
        }, intervalDuration)

        return () => clearInterval(typingInterval)
    }, [typingState, baseLines])

    return (
        <div className='IntroAnimation'>
            <div className='animation-container'>
                {baseLines.map((line, index) => {

                    let content = line

                    if (index === currentLineIndex) {
                        if (index === 1) {
                            content = line.substring(0, currentCharIndex) + changingPhrases[changingPhraseIndex].substring(0, currentCharIndex - line.length)
                        } else {
                            content = line.substring(0, currentCharIndex)
                        }
                    } else if (index > currentLineIndex) {
                        return null
                    } else if (index === 1) {
                            content += changingPhrases[changingPhraseIndex]
                    }

                    return (
                        <div key={index}>
                            <span className="typed-text">{content}</span>
                            {index === currentLineIndex && <span className='console-underscore'>&#95;</span>}
                        </div>
                    ) 
                })}
            </div>
            <button className='skip-btn' onClick={onComplete}>Skip Intro</button>
        </div>
    )
}