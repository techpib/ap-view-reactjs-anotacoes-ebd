import React, { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";

import CardNota from "../CardNota";
import NavBar from "../NavBar";

import "./estilo.css";

const TelaInicial = () => {

    const [listCard, setListCard] = useState([
        {id: 1, titulo: "teste1", texto: "texto1", salvar: false},
        {id: 2, titulo: "teste2", texto: "texto2", salvar: false},
        {id: 3, titulo: "teste3", texto: "texto3", salvar: false},
        {id: 4, titulo: "teste4", texto: "texto4", salvar: false}
    ]);

    const validaString = (string) => {
        return string.replaceAll("</br>", "\n");
    }

    const atualizarConteudoObj = (obj) => {
        let listCardNew = listCard.map(e => {
            if(e.id == obj.id){
                e.titulo = obj.novoTitulo;
                e.texto = obj.novoTexto;
            }
            console.log(e.texto);
            return e;
        });
        setListCard(listCardNew);
    }

    const excluirCard = (id) => {
        console.log(listCard)
        setListCard([...listCard].filter(card => card.id !== id));
    }

    const handleClick = (evento) => {
        evento.preventDefault();
        addCard();
    }

    const addCard = () => {
        let novoId = listCard.length > 0 ? listCard.map(card => card.id).reverse()[0] +1 : 1;
        let listCardNew = [...listCard];
        listCardNew.push({
            id: novoId,
            titulo: "",
            texto: ""
        })
        setListCard(listCardNew);
        console.log(listCardNew);
    }

    return (
        <section className="base-tela-inicial">
            <NavBar nomeUsuario={"Augusto"}/>
            <div className="area-cards">
                {listCard.map(card => <CardNota id={card.id} titulo={validaString(card.titulo)} texto={validaString(card.texto)} salvar={card.salvar} excluirCard={excluirCard} atualizarConteudoObj={atualizarConteudoObj}/>)}
            </div>

            <div className="add-card" onClick={handleClick}>
                <MdOutlineAdd />
            </div>
        </section>
    );

}

export default TelaInicial;