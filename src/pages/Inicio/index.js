import React, { useEffect } from "react";
import useFirebase from "hooks/useFirebase";
import Presentation from "components/pages/inicio/Presentation";
import ChatAnimation from "components/reutilizables/ChatAnimation";
import Parrafo from "components/reutilizables/Parrafo";
import Button from "components/reutilizables/Button";
import SalaContainer from "components/pages/inicio/SalaContainer";
import useMovil from "hooks/useMovil";
import { Main, ButtonDiv} from "./styles";

export default function Inicio() {
    const { signIn } = useFirebase();
    const {movil} = useMovil();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Main>
                <Presentation textAlign='start' />
                <ChatAnimation 
                    row={!movil ? '1/span 3' : false} 
                    column={!movil ? '1/2' : false} 
                />
                <Parrafo 
                    justify={!movil ? "flex-start" : "center"}
                    fontSize={!movil && '1.2rem'}
                    bold
                >
                    ingresa y comienza  la conversacion
                </Parrafo>

                <ButtonDiv >
                    <Button size='big' action={signIn}>Ingresar con Google</Button>
                </ButtonDiv>
            </Main>
            <SalaContainer />
        </>

    )
}