import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Map from './Map'
import Home from './Home'
import VaccineInfo from './VaccineInfo'


function AppNavbar() {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="justify-center" >
                <Navbar.Brand href="#home">HackingCOVID</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/map">Map</Nav.Link>
                        <Nav.Link href="/vaccine">Vaccine Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />        
    </div>
    )
}

export default AppNavbar;