import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <section id="home" className="py-5 pt-5 mt-5 text-light text-center d-flex align-items-center">
            <Container>
                <div>
                    <h1>Emil Øgård</h1>
                    <h4>Programvareutvikler</h4>

                </div>
            </Container>
        </section>
    )
}

export default Home;