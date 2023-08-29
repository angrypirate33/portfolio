
import { useState } from 'react'
import TechChip from '../../components/TechChip/TechChip'
import { projects } from '../../utility/projectsData'
import './ProjectsPage.css'

export default function ProjectsPage() {

    const [flippedCards, setFlippedCards] = useState([])

    function toggleFlip(index) {
        setFlippedCards({
            ...flippedCards,
            [index]: !flippedCards[index]
        })
    }

    return (
        <div className="ProjectsPage">
            <h1 className='page-title'>Projects</h1>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className={`project-card ${flippedCards[index] ? 'flipped' : ''}`} key={index}>
                            <div className="card-front">
                                <h2 className='project-card-title'>{project.title}</h2>
                                <img src={project.image} alt={project.title} />
                                <div className="tech-chips">
                                    {project.technologies.map((tech, techIndex) => (
                                        <TechChip key={techIndex} tech={tech}/>
                                        ))}
                                </div>
                                <button className='details-button' onClick={() => toggleFlip(index)}>Show Details</button>
                            </div>
                            <div className="card-back">
                                <h2>{project.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                <button className='details-button' onClick={() => toggleFlip(index)}>Hide Details</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}