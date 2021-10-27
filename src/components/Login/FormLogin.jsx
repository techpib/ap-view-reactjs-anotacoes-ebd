import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleLoginComponent from "../GoogleLoginComponent";

import "./estilo.css";
import logo from "../../assets/logo.png";

class FormLogin extends Component {

    render() {
        return (
            <Form className="form-login">
                <img src={logo}/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <GoogleLoginComponent />
                </Form.Group>
                <p>ou</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="E-mail cadastrado" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Digite sua senha..."/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mostrar senha" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicButtons">
                    <Button variant="primary" type="submit">
                        Criar Conta
                    </Button>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form.Group>
            </Form>
        );
    }

}

export default FormLogin;