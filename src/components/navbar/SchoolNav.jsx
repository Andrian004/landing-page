import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

import "./navbar.css";

export const SchoolNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2">
      <Container>
        <Navbar.Brand href="/school" className="fs-3 fw-semibold text-blue-400">
          Skuy University
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="/school" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="/school">News</Nav.Link>
            <Nav.Link href="/school">Plan</Nav.Link>
            <NavDropdown title="Staff" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school">Action</NavDropdown.Item>
              <NavDropdown.Item href="/school">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/school">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/school">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="basic-nav-dropdown2">
              <NavDropdown.Item href="/school">Action</NavDropdown.Item>
              <NavDropdown.Item href="/school">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/school">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/school">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Button variant="link" className="text-dark">
              <i className="bi bi-search"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
