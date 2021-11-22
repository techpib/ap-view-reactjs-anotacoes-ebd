import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MostrarSenha from "../utils/MostrarSenha";

import "./estilo.css";
import logo from "../../assets/logo.png";

const FormCadastro = () => {

    const [senha, setSenha] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");
    const [mostrar, setMostrar] = useState(false);

    return (
        <section className="base">
            <Card className="card-cadastro">
                <Form className="form-cadastro">
                    <div className="logo-cadastro">
                        <img src={logo} />
                    </div>
                    <div className="titulo-form">
                        <h1>Crie sua conta</h1>
                    </div>
                    <div className="inputs-cadastro">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Nome" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type={mostrar ? "text" : "password"} placeholder="Senha" value={senha} onChange={e => { setSenha(e.target.value) }} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type={mostrar ? "text" : "password"} placeholder="Confirme a senha" value={senhaConfirmada} onChange={e => { setSenhaConfirmada(e.target.value) }} />
                        </Form.Group>

                        <MostrarSenha mostrar={mostrar} funcao={setMostrar}></MostrarSenha>
                    </div>

                    <div className="buttons-cadastro">
                        <Form.Group >
                            <Link to="/login">
                                <Button variant="primary" type="submit" className="buttons-cadastro-cancelar">Cancelar</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="primary" type="submit" className="buttons-cadastro-confirmar">Confirmar</Button>
                            </Link>
                        </Form.Group>
                    </div>
                </Form>
            </Card>
        </section>
    );
}

export default FormCadastro;