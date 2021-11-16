import React from "react";

import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

import "./estilo.css";

const MostrarSenha = ({mostrar, funcao}) => {

    const handleClick = (evento) => {
        evento.preventDefault();
        funcao(!mostrar);
    }

    return (
        <div className="mostrar-senha">
            <div className="check-senha">
                {
                    mostrar ? (
                        <MdCheckBox
                            size={20}
                            onClick={handleClick}
                        />
                    ) :
                        (
                            <MdCheckBoxOutlineBlank
                                size={20}
                                onClick={handleClick}
                            />
                        )}
            </div>
            <p>Mostrar Senha</p>
        </div>
    );
}

export default MostrarSenha;