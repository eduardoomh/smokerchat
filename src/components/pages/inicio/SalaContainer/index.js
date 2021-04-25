import React from "react";
import Titulo from "components/reutilizables/Titulo";
import Sala from "components/pages/inicio/Sala";
import {DivContainer, DivStyle} from "./styles";

export default function SalaContainer(){
    return(
        <DivContainer>
            <Titulo>NUESTRAS SMOKER SALAS</Titulo>
            <DivStyle>
                <Sala emoji="👩‍💻" titulo="Programación">
                    Java, Python, Javascript, C++, Ruby, PHP .... muchas opiniones divididas, todos en una misma sala 😈
                </Sala>
                <Sala emoji="⚽️" titulo="Futbol">
                    Real Madrid, Barcelona, Chelsea, PSG, Juventus, River Plate... Mala idea mezclarlos a todos 😅
                </Sala>
                <Sala emoji="🎬" titulo="Series y Peliculas">
                    Avengers, Dragon ball, Spider man, Game of thrones, Los simpsons ..... habra una guerra aqui dentro!!😲
                </Sala>
            </DivStyle>
    </DivContainer>
    )
}