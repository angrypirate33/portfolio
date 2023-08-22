
import './IntroAnimation.css'

export default function IntroAnimation({ onComplete }) {
    return (
        <div className="IntroAnimation">
            <h1>Intro Animation!</h1>
            <button onClick={onComplete}>Skip Intro</button>
        </div>
    )
}