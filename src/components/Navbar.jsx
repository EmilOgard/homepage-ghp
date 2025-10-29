import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function NavBar({toggleDarkMode, isDarkMode}) {

  const { t } = useTranslation();

  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#">Emil Øgård</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">{t('home')}</Nav.Link>
            <Nav.Link href="#about">{t('about')}</Nav.Link>
            <Nav.Link href="#skills">{t('skills')}</Nav.Link>
            <Nav.Link href="#projects">{t('projects')}</Nav.Link>
            <Nav.Link href="#contact">{t('contact')}</Nav.Link>
            <Button onClick={toggleDarkMode} variant={isDarkMode ? 'light' : 'dark'}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;