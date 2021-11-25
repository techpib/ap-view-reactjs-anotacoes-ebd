import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdClose, MdShare } from "react-icons/md";

import "./estilo.css";

const CardNota = () => {

    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const [podeSalvar, setPodeSalvar] = useState(false);

    return (
        <Card className="card-nota">
            <Card.Body>
                <div className="card-nota-titulo">
                    <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>
                    <MdClose />
                </div>
                <Card.Text>
                    <span className="span-textarea-cardnota" role="textbox" contentEditable></span>
                </Card.Text>
                <div className="rodape-card">
                    <Card.Link href="#">Salvar</Card.Link>
                    <MdShare />
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardNota;