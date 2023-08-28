
import './TechChip.css'

export default function TechChip({ tech }) {
    return (
        <div className="TechChip">
            <span className="tech-chip">
                {tech}
            </span>
        </div>
    )
}