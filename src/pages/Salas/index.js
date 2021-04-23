import React from "react";
import Titulo from "components/reutilizables/Titulo";
import CardSala from "components/pages/salas/CardSala";
import {DivStyle} from "./styles";

export default function Salas(){
    return(
        <main>
            <Titulo margin='2rem'>SELECCIONA UNA SALA PARA CONVERSAR</Titulo>
            <DivStyle>
                <CardSala emoji="👩‍💻" texto="Programación" ruta="programacion" />
                <CardSala emoji="⚽️" texto="Futbol" ruta="futbol" />
                <CardSala emoji="🎬" texto="Series y Peliculas" ruta="series_peliculas" />
            </DivStyle>
            
        </main> 
    )
}