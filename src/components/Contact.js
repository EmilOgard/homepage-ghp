import { Container, Button } from 'react-bootstrap';

function Contact() {
    return (
        <section id="contact" className="py-2 text-center">
            <Container>
                <div className="d-flex justify-content-center flex-wrap mt-3">
                    {/* Email */}
                    <a href="mailto:emilogard@gmail.com" className="m-2">
                        <Button variant="primary">Email</Button>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/EmilOgard" target="_blank" rel="noreferrer" className="m-2">
                        <Button variant="dark">GitHub</Button>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/emil-øgård-63a828266/" target="_blank" rel="noreferrer" className="m-2">
                        <Button variant="info">LinkedIn</Button>
                    </a>
                </div>
            </Container>
        </section>
    );
}

export default Contact;