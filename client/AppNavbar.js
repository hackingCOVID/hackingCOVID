import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown'


function AppNavbar() {
    return (
        <div>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="justify-center" >
                <Navbar.Brand href="#home">HackingCOVID</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Map</Nav.Link>
                        <Nav.Link href="#pricing">Vaccine Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div>
            <Navbar bg="primary" variant="dark">
                  <Navbar.Brand href="#home">HackingCOVID</Navbar.Brand>
                  <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#features">Map</Nav.Link>
                      <NavDropdown title="Vaccine Info" id="collasible-nav-dropdown" className="mr-auto" >
                            <NavDropdown.Item href="#action/3.1">Different vaccines</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Phase</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Locations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                  </Nav>
                  <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-light">Search</Button>
                  </Form>
              </Navbar>
            </div>
    </div>
    )
}

export default AppNavbar;