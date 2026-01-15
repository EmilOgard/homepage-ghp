import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Projects() {

    const { t } = useTranslation();

    const projects = [
        {
            name: t('project_title_homepage'),
            description: t('project_description_homepage'),
            link: "https://github.com/EmilOgard/homepage-ghp"
        },
        {
            name: t('project_title_organizer'),
            description: t('project_description_organizer'),
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
                    {projects.map((project, index) => (
                        <div className="col-md-6 mb-4" key={index}>
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