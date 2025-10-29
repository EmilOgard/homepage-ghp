import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-5 text-center">
            <Container>
                <p>{t('age_info')}</p>
                <p>{t('place_info')}</p>
                <p>{t('education')}</p>
            </Container>
        </section>
    );
}

export default About;