import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  '../styles/styles.css';

function NavbarHeader() {
    const expand = "md";
  return (
    <>
     
        <Navbar  key={expand} expand={expand} className=" mb-3 customNavbar marginNavbar">
          <Container >
            <Navbar.Brand href="#">
              <div className="logo">
                

              </div>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='fw-bold' href="#action1">Our Services</Nav.Link>
                  <Nav.Link className='fw-bold' href="#action2">Why Us</Nav.Link>
                  <Nav.Link className='fw-bold' href="#action1">Testimonial</Nav.Link>
                  <Nav.Link className='fw-bold' href="#action2">FAQ</Nav.Link>
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavbarHeader;