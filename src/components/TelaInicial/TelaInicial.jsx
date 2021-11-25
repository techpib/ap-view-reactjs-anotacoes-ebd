import React, { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";

import CardNota from "../CardNota";
import NavBar from "../NavBar";

import "./estilo.css";

const TelaInicial = () => {

    const [nomeUsuario, setNomeUsuario] = useState("");

    return (
        <section className="base-tela-inicial">
            <NavBar nomeUsuario={"Augusto"}/>
            <div className="area-cards">
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
                <CardNota/>
            </div>

            <div className="add-card">
                <MdOutlineAdd/>
            </div>
        </section>
    );

}

export default TelaInicial;