import React from 'react'

import {
    Link
} from "react-router-dom";


import { Navbar, NavDropdown, Nav } from 'react-bootstrap'


import SignUpModal from './SignUpModal'

// import { ModelComp } from "./Model";

// const [modalShow, setModalShow] = React.useState(false);

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
                        <NavDropdown title="Dropdown1" id="basic-nav-dropdown1">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
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
                            <NavDropdown.Item as="button">My Orders</NavDropdown.Item>
                            <NavDropdown.Item as="button">Wishlist</NavDropdown.Item>
                            <NavDropdown.Item as="button">Coupons & Wallet</NavDropdown.Item>
                            <NavDropdown.Item as="button">My Mesurement</NavDropdown.Item>
                            <NavDropdown.Item as="button">
                                {/*<Button variant="primary" onClick={() => setModalShow(true)}>
                                    Launch vertically centered modal
                                </Button>

                                <ModelComp
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />*/}
                            </NavDropdown.Item>
                            {/* FORM */}
                            {/* <EmailLogin /> */}
                                <SignUpModal></SignUpModal>

                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </>
    )
}
