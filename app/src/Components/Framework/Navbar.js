import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


function AppNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg"  className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home" className='theme-logo'>Celebration</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Calender</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;