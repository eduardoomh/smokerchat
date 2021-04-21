import React from "react";
import useFirebase from "hooks/useFirebase";
import Presentation from "components/pages/inicio/Presentation";
import ChatAnimation from "components/reutilizables/ChatAnimation";
import Parrafo from "components/reutilizables/Parrafo";
import Button from "components/reutilizables/Button";
import Titulo from "components/reutilizables/Titulo";
import {Main} from "./styles";

export default function Inicio(){
    const {signIn} = useFirebase();
    return(
        <Main>
            <Presentation />
            <ChatAnimation />
            <Parrafo>ingresa y comienza  la conversacion</Parrafo>

            <div className="button-container">
                <Button size='big' action={signIn}>Ingresar con Google</Button>
            </div>

            <Titulo>NUESTRAS SMOKER SALAS</Titulo>
            
        </Main>
    )
}