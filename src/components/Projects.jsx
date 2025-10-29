import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();

    const projects = [
        {
            name: "Project 1",
            description: "Description for Project 1",
            link: "#"
        },
        {
            name: "Project 2",
            description: "Description for Project 2",
            link: "#"
        },
        {
            name: "Project 3",
            description: "Description for Project 3",
            link: "#"
        },
        {
            name: "Project 4",
            description: "Description for Project 4",
            link: "#"
        },
    ];

    return (
        <section id="projects" className="py-5 text-center">
            <Container>
                <h2 className="text-center mb-5">{t('projects')}</h2>
                <div className="row">
                    {projects.map((project) => (
                        <div className="col-md-6 mb-4" key={project.name}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('view_project')}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Projects;