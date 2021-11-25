import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../assets/logo_branco.png";

import "./estilo.css";

const NavBar = ({nomeUsuario}) => {

    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="/">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Olá, {nomeUsuario}!
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBar;