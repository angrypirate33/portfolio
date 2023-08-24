
import { Link } from 'react-router-dom'
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
                    </div>
                    <div className="parallax-background"></div>
                </div>
            </div>
        </div>
    )
}