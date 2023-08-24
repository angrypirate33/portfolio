
import { Link } from 'react-router-dom'
import Logos from '../../components/Logos/Logos'
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='HomePage'>
            <div className="wrapper">
                <h1 className='page-title'>Jon's Portfolio Homepage</h1>
                <Link to='/about'>About Me</Link>
                <Link to='/projects'>My Projects</Link>
                <Logos />
            </div>
        </div>
    )
}