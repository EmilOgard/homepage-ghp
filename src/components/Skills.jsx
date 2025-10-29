import { Container, Badge, Card, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Skills() {

    const { t } = useTranslation();

    const categories = [
        { name: t('programming_languages'), skills: ['C/C++', 'Java', 'JavaScript/TypeScript', 'Python', 'Kotlin', 'PHP', 'Scheme'] },
        { name: t('frameworks_libraries'), skills: ['React', 'Node.js', 'Express', 'Django', 'FastAPI', 'Spring Boot'] },
        { name: t('databases'), skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'] },
        { name: t('tools_platforms'), skills: ['Git', 'GitHub', 'Docker'] },
        { name: t('embedded'), skills: ['STM32', 'AVR','USART', 'SPI', 'I2c'] },
        { name: t('system'), skills: ['GTK', 'Linux API' ] },
    ]

    return (
        <section id="skills" className="py-5 text-center">
            <Container>
                <h2 className="text-center mb-5">{t('skills')}</h2>
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