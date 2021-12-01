import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdClose, MdShare } from "react-icons/md";

import "./estilo.css";

const CardNota = ({id, titulo, texto, salvar, excluirCard, atualizarConteudoObj}) => {

    const ID_TITULO = "span-titulo";
    const ID_TEXTO = "span-texto";

    const [novoTitulo, setNovoTitulo] = useState(titulo);
    const [novoTexto, setNovoTexto] = useState(texto);
    const [podeSalvar, setPodeSalvar] = useState(salvar);

    const handleClick = (evento) => {
        evento.preventDefault();
        atualizarConteudoObj({id, novoTitulo, novoTexto});
        if(podeSalvar){
            if(!window.confirm("Deseja mesmo exluir a nota?")){
                return;
            }
        }
        excluirCard(id);
    }

    const habilitarSalvar = (evento) => {
        let conteudo = evento.target.innerHTML.replaceAll("<div>", "</br>").replaceAll("</div>", "").replaceAll("&nbsp;", " ");
        
        if(evento.target.id == ID_TITULO)
            setNovoTitulo(conteudo); 

        if(evento.target.id == ID_TEXTO)
            setNovoTexto(conteudo);    
        
        //atualizarConteudoObj({id, novoTitulo, novoTexto});
        //evento.text.selectionStart = evento.text.value.length;
        //evento.text.selectionEnd = evento.text.value.length;
        setPodeSalvar(true);
    }

    const handleClickSalvar = (evento) => {
        evento.preventDefault();
        atualizarConteudoObj({id, novoTitulo, novoTexto});
        setPodeSalvar(false);
    }

    return (
        <Card className="card-nota" id={id}>
            <Card.Body>
                <div className="card-nota-titulo">
                    <span className="span-textarea-cardnota-titulo" role="textbox" id={ID_TITULO} contentEditable onInput={habilitarSalvar}>{titulo}</span>
                    <MdClose onClick={handleClick}/>
                </div>
                <Card.Text>
                    <span className="span-textarea-cardnota" role="textbox" id={ID_TEXTO} contentEditable onInput={habilitarSalvar}>{texto}</span>
                </Card.Text>
                <div className="rodape-card">
                    {podeSalvar ? (<Card.Link href="#" onClick={handleClickSalvar}>Salvar</Card.Link>): <p/>}
                    <MdShare />
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardNota;