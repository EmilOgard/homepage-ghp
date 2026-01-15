import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();

    const projects = [
        {
            name: "Homepage",
            description: "This website. Built with React and Bootstrap.",
            link: "https://github.com/EmilOgard/homepage-ghp"
        },
        {
            name: "Organizer App",
            description: "Organizer app for personal use. Android native with Kotlin and local database.",
            link: "https://github.com/EmilOgard/Organizer"
        },
        {
            name: "TODO",
            description: "TODO",
            link: "#"
        },
        {
            name: "TODO",
            description: "TODO",
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