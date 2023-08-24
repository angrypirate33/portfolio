
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
        function typeChar() {
            const { currentLineIndex, currentCharIndex, changingPhraseIndex, direction } = typingState;
        
            let newLineIndex = currentLineIndex;
            let newCharIndex = currentCharIndex;
            let newPhraseIndex = changingPhraseIndex;
            let newDirection = direction;
        
            let currentLine = baseLines[newLineIndex];
        
            if (newLineIndex === 1 && newCharIndex < baseLines[1].length) {
                // Type "I am a "
                newCharIndex += 1;
            } else if (newLineIndex === 1) {
                // We're appending phrases now
                const phraseCharIndex = newCharIndex - baseLines[1].length;
                const currentPhrase = changingPhrases[newPhraseIndex];
        
                if (phraseCharIndex < currentPhrase.length && newDirection === 1) {
                    // Type the phrase
                    newCharIndex += 1;
                } else if (newDirection === -1 && phraseCharIndex > 0) {
                    // Delete the phrase
                    newCharIndex -= 1;
                } else if (newDirection === -1 && phraseCharIndex === 0 && newPhraseIndex < changingPhrases.length - 1) {
                    // Finished deleting and it's not the last phrase
                    newPhraseIndex += 1;
                    newDirection = 1;
                } else if (newPhraseIndex === changingPhrases.length - 1 && phraseCharIndex === currentPhrase.length) {
                    // Move to the next base line after the last phrase
                    newLineIndex += 1;
                    newCharIndex = 0;
                } else {
                    // Transition to deletion mode for the current phrase
                    newDirection = -1;
                    newCharIndex -= 1;
                }
            } else if (newCharIndex < currentLine.length) {
                // Other lines, just type
                newCharIndex += 1;
            } else if (newCharIndex === currentLine.length && newLineIndex < baseLines.length - 1) {
                // Move to the next line after completing the current line
                newLineIndex += 1;
                newCharIndex = 0;
            }
        
            setTypingState({ currentLineIndex: newLineIndex, currentCharIndex: newCharIndex, changingPhraseIndex: newPhraseIndex, direction: newDirection });
        }
        
        
         

        const typingInterval = setInterval(() => {
            const { currentLineIndex, currentCharIndex, changingPhraseIndex, direction } = typingState;
            typeChar(currentLineIndex, currentCharIndex, changingPhraseIndex, direction);
        }, 120)

        return () => clearInterval(typingInterval)
    }, [typingState, baseLines])

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