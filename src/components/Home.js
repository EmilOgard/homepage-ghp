import React from 'react'
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <section id="home" className="py-2 pt-5 mt-5 text-center d-flex align-items-center">
            <Container>
                <div>
                    <h1>Emil Øgård</h1>
                    <h4>{t('software_developer')}</h4>

                </div>
            </Container>
        </section>
    )
}

export default Home;