import React, {useState} from "react";

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
                    <Button variant="primary" type="submit" className="buttons-cadastro-cancelar">
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" className="buttons-cadastro-confirmar">
                        Confirmar
                    </Button>
                </Form.Group>
            </div>
        </Form>
    );
}

export default FormCadastro;