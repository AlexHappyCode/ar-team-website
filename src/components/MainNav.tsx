import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap'

const MainNav = () => {
  return (
    /* bootstrap example navbar */
    <Navbar bg="dark" variant="dark" expand="sm" className="m-4">
      <Container className="m-0 p-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer
              to="/ar-team-website"
              className="rounded-0 ml-4 border border-4"
            >
              <Nav.Link className="bg-dark">
                <h1>Home</h1>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/ar-team-website/InstructionsPage"
              className="rounded-0 border border-4"
            >
              <Nav.Link className="bg-dark">
                <h1>Setup Instructions</h1>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNav
