
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='HomePage'>
            <div className="wrapper">
                <h1>Jon's Portfolio Homepage</h1>
                <Link to='/about'>About Me</Link>
                <Link to='/projects'>My Projects</Link>
            </div>
        </div>
    )
}