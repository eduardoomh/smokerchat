import React from "react";
import useFirebase from "hooks/useFirebase";
import Button from "components/reutilizables/Button";
import {DivStyle} from "./styles";

export default function LayoutSala(props){
    const {children} = props;
    const {signOut} = useFirebase();

    return(
        <div>
            <main>
                {children}
            </main>
            <DivStyle>
                <Button size='big' action={signOut}>Salir</Button>
            </DivStyle>
        </div>
    )
}