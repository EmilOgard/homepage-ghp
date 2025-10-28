import { Container, Badge } from 'react-bootstrap';

function Skills() {

    const skills = [
        'C', 'Java', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'HTML', 'CSS', 'Bootstrap',
        'Python', 'Django', 'SQL', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Kotlin', 'Android', 'Linux', 'STM32', 'AVR',
    ];

    return (
        <section id="skills" className="py-5 text-center">
            <Container>
                <h2 className="text-center mb-5">Skills</h2>
                <div>
                    {skills.map((skill) => (
                        <Badge bg="secondary" pill className="m-2 p-3 fs-6" key={skill}>
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Skills;