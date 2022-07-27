import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoNav from '../Assets/img/navlogo.webp';
import './navbar.css';

const NavbarApp = () => {
    return (
        <Navbar bg='black' expand="lg" variant="dark" className="p-2">
            <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center" style={{color:"palevioletred"}}>
                <img src={logoNav}
                width="40px"
                className='img'
                ></img>
                Videojuegos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"400px"}}>
                <Nav className="me-auto">
                    <Nav.Link  className='links' href="#home">INICIO</Nav.Link>
                    <Nav.Link  className='links' href="#link">CAPITULO</Nav.Link>
                    <Nav.Link className='links' href="#link">PERSONAJES</Nav.Link>
                    <Nav.Link className='links' href="#link">PLANETAS</Nav.Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarApp
