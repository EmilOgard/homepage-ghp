import { Container, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();

    return (
        <section id="contact" className="py-2 text-center">
            <Container>
                <div className="d-flex justify-content-center flex-wrap mt-3">
                    {/* Email */}
                    <a href="mailto:emilogard@gmail.com" className="m-2">
                        <Button variant="primary"><FaEnvelope />{t('email')}</Button>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/EmilOgard" target="_blank" rel="noreferrer" className="m-2">
                        <Button variant="dark"><FaGithub />GitHub</Button>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/emil-øgård-63a828266/" target="_blank" rel="noreferrer" className="m-2">
                        <Button variant="info"><FaLinkedin />LinkedIn</Button>
                    </a>
                </div>
            </Container>
        </section>
    );
}

export default Contact;