
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
                            <div className="card-front" onClick={() => toggleFlip(index)}>
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
                                <button className="close-button" onClick={() => toggleFlip(index)}>X</button>
                                <h2 className='project-card-title'>{project.title}</h2>
                                <p className='project-description' dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                <button className='details-button' onClick={() => toggleFlip(index)}>Hide Details</button>
                                <div className="project-links">
                                    <div className="links-container">
                                        <div className="project-link">
                                            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                                                <button className="deploy-url">Deployed</button>
                                            </a>
                                        </div>
                                        <div className="project-link">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <button className="github-url">GitHub</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}