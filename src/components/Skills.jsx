import { Container, Badge, Card, Row, Col } from 'react-bootstrap';

function Skills() {

    const skills = [
        'C', 'Java', 'JavaScript', 'TypeScript', 'React', 'Node.js',
        'Express', 'Python', 'Django', 'SQL', 'MySQL', 'PostgreSQL',
        'Git', 'GitHub', 'Kotlin', 'Android', 'Linux', 'STM32', 'AVR',
        'Docker', 'PHP', 'Scheme', 'FastAPI', 'Spring Boot', 'MongoDB'
    ];

    const categories = [
        { name: 'Programming Languages', skills: ['C/C++', 'Java', 'JavaScript/TypeScript', 'Python', 'Kotlin', 'PHP', 'Scheme'] },
        { name: 'Frameworks & Libraries', skills: ['React', 'Node.js', 'Express', 'Django', 'FastAPI', 'Spring Boot'] },
        { name: 'Databases', skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'] },
        { name: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Docker'] },
        { name: 'Embedded Systems', skills: ['STM32', 'AVR','USART', 'SPI', 'I2c'] },
        { name: 'System', skills: ['GTK', 'Linux API' ] },
    ]

    return (
        <section id="skills" className="py-5 text-center">
            <Container>
                <h2 className="text-center mb-5">Skills</h2>
                <Row>
                    {categories.map((category) => (
                        <Col md={4} className="mb-4" key={category.name}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>{category.name}</Card.Title>
                                    <div className="mb-3">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} bg="secondary" className="m-2 p-2 fs-6">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Skills;