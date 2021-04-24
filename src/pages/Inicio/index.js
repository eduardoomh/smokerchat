import React, { useEffect } from "react";
import useFirebase from "hooks/useFirebase";
import Presentation from "components/pages/inicio/Presentation";
import ChatAnimation from "components/reutilizables/ChatAnimation";
import Parrafo from "components/reutilizables/Parrafo";
import Button from "components/reutilizables/Button";
import Titulo from "components/reutilizables/Titulo";
import Sala from "components/pages/inicio/Sala";
import useWindowSize from "hooks/useWindowSize";
import { Main, ButtonDiv} from "./styles";

export default function Inicio() {
    const { signIn } = useFirebase();
    const {width} = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Main>
                <Presentation textAlign='start' />
                <ChatAnimation 
                    row={width >= 800 ? '1/span 3' : false} 
                    column={width >= 800 ? '1/2' : false} 
                />
                <Parrafo 
                    justify={width >= 800 ? "flex-start" : "center"}
                    fontSize={width >= 800 && '1.2rem'}
                    bold
                >
                    ingresa y comienza  la conversacion
                </Parrafo>

                <ButtonDiv >
                    <Button size='big' action={signIn}>Ingresar con Google</Button>
                </ButtonDiv>
            </Main>
            <>
                <Titulo>NUESTRAS SMOKER SALAS</Titulo>

                <Sala emoji="👩‍💻" titulo="Programación">
                    Java, Python, Javascript, C++, Ruby, PHP .... muchas opiniones divididas, todos en una misma sala 😈
                </Sala>
                <Sala emoji="⚽️" titulo="Futbol">
                    Real Madrid, Barcelona, Chelsea, PSG, Juventus, River Plate... Mala idea mezclarlos a todos 😅
                </Sala>
                <Sala emoji="🎬" titulo="Series y Peliculas">
                    Avengers, Dragon ball, Spider man, Game of thrones, Los simpsons ..... habra una guerra aqui dentro!!😲
                </Sala>
            </>
        </>

    )
}