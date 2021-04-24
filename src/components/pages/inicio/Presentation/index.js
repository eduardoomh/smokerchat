import React from "react";
import Parrafo from "components/reutilizables/Parrafo";
import Logo from "Images/smokerchat.svg";
import {DivStyle} from "./styles";
import useWindowSize from "hooks/useWindowSize";

export default function Presentation() {
    const {width} = useWindowSize();

    return (
        <DivStyle>
            <div className="logo-container">
                <img 
                    alt="logo smokerchat" 
                    src={Logo} 
                    width={width <= 800 ? 400 : 450} 
                    height={width <= 800 ? 64 : 80} 
                />
            </div>

            <Parrafo 
                textAlign={width <= 800 ? 'center' : 'start'}
                fontSize={width >= 800 && '1.6rem'}
            >
                Salas de chat simples, para platicas simples y rapidas.
            </Parrafo>
        </DivStyle>
    )
}