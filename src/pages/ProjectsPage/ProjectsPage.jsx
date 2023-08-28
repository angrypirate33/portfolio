
import TechChip from '../../components/TechChip/TechChip'
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
                                <h2>{project.title}</h2>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="card-back">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="tech-chips">
                                    {project.technologies.map((tech, techIndex) => (
                                        <TechChip key={techIndex} tech={tech}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}