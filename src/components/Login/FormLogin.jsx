import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleLoginComponent from "../GoogleLoginComponent";

import MostrarSenha from "../utils/MostrarSenha";

import "./estilo.css";
import logo from "../../assets/logo.png";

const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrar, setMostrar] = useState(false);

    return (
        <section className="base">
            <Card className="card-login">
                <Form className="form-login">
                    <div className="logo-login">
                        <img src={logo} />
                    </div>
                    <div className="login-google">
                        <GoogleLoginComponent />
                        <p>ou</p>
                    </div>
                    <div className="inputs-login">
                        <Form.Group>
                            <Form.Control type="email" placeholder="E-mail cadastrado" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type={mostrar ? "text" : "password"} placeholder="Digite sua senha..." value={senha} onChange={e => { setSenha(e.target.value) }} />
                        </Form.Group>
                        <MostrarSenha mostrar={mostrar} funcao={setMostrar}></MostrarSenha>
                    </div>

                    <div className="buttons-login">
                        <Form.Group >
                            <Link to="/cadastro">
                                <Button variant="primary" type="submit" className="buttons-login-criar-conta">
                                    Criar Conta
                                </Button>
                            </Link>
                            <Button variant="primary" type="submit" className="buttons-login-entrar">
                                Entrar
                            </Button>
                        </Form.Group>
                    </div>
                </Form>
            </Card>
        </section>
    );
}

export default FormLogin;