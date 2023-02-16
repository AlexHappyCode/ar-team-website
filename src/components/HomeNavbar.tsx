import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap'

const HomeNavbar = () => {
  return (
    /* bootstrap example navbar */
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Game Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/SRC_Website_React">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SRC_Website_React/InstructionsPage">
              <Nav.Link href="#Instructions">Link</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar
