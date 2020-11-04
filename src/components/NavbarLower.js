import React from 'react'

import {
    Link
} from "react-router-dom";


import { Navbar, NavDropdown, Nav } from 'react-bootstrap'


import EmailLogin from './EmailLogin';


export default function NavbarLower() {




    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to="/" >Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/" >Home</Link>
                        </Nav.Link>
                        <Nav.Link><Link to="/about" >About</Link></Nav.Link>
                        <Nav.Link><Link to="/contact" >Contact</Link></Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            {/* FORM */}
                            <EmailLogin />

                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </>
    )
}
