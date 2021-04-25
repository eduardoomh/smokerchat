import React from "react";
import Parrafo from "components/reutilizables/Parrafo";
import logo from "Images/logo.svg";
import { DivStyle } from "./styles";
import useMovil from "hooks/useMovil";

export default function Presentation() {
    const { movil } = useMovil();

    return (
        <DivStyle>
            <div className="logo-container">
                <img
                    alt="logo smokerchat"
                    src="https://jesusmh.s3.us-east-2.amazonaws.com/avatares/smoker.jpg"
                    width={movil ? 70 : 100}
                    height={movil ? 70 : 100}
                    className="logo-image"
                />
                <img
                    alt="logo smokerchat"
                    src={logo}
                    width={movil ? 250 : 350}
                    height={movil ? 80 : 100}
                    className="logo-name"
                />
            </div>

            <Parrafo
                textAlign={movil ? 'center' : 'start'}
                fontSize={!movil ? '1.6rem': '1.2rem'}
                bold
            >
                Salas de chat grupales, para conversar de distintos temas en comun.
            </Parrafo>
        </DivStyle>
    )
}