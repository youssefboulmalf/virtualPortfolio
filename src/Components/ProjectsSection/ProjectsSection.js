import css from './ProjectsSection.module.css'
import Project from '../Project/Project'
import { projects } from '../../ProjectData/projectData';


const ProjectSection = (props) => {
    return (
        <div className={css.projectSection}>
            <div className={css.projectTitleText}>
                <p>Projects</p>
            </div>
            <div className={css.projects}>
                {projects.map((project, index) =>
                    <div key={`${projects}+${index}`} className={css.project}>
                        <Project
                            projectName={project.name}
                            projectDescription={project.description}
                            projectLink={project.link}
                            projectImage={project.imageName}
                            projectLanguages={project.language}
                        />
                    </div>
                )}  
            </div>
        </div>
    )
}
export default ProjectSection
