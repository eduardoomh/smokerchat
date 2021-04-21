import React from "react";
import Parrafo from "components/reutilizables/Parrafo";
import Logo from "Images/smokerchat.svg";
import {DivStyle} from "./styles";

export default function Presentation() {
    return (
        <DivStyle>
            <div className="logo-container">
                <img alt="logo smokerchat" src={Logo} width={400} height={64} />
            </div>

            <Parrafo>Salas de chat simples, para platicas simples y rapidas.</Parrafo>
        </DivStyle>
    )
}