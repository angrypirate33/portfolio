
import { projects } from '../../utility/projectsData'
import './ProjectsPage.css'

export default function ProjectsPage() {
    return (
        <div className="ProjectsPage">
            <h1 className='page-title'>Projects</h1>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="card-front">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="card-back">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}