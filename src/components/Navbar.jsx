import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

function NavBar({toggleDarkMode, isDarkMode}) {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#">Emil Øgård</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button onClick={toggleDarkMode} variant={isDarkMode ? 'light' : 'dark'}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;