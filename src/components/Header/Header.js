import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="logo">
          <img src={logo} alt="Dream course logo" />
          Dream Course
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="special">
              <a href="/home">Home</a>
            </Nav.Link>
            <Nav.Link href="#pricing" className="special">
              <a href="/business">Business</a>
            </Nav.Link>
            <NavDropdown title="Catagories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <a href="/web-development">Web Development</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <a href="/graphic-design">Graphic Design</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <a href="/2d-3d-design">2d/3d Design</a>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <a href="/dream-course">Dream Course</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
