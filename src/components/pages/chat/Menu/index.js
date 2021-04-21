import React from "react";
import {useHistory} from "react-router-dom";
import useFirebase from "hooks/useFirebase";
import Button from "components/reutilizables/Button";
import { BiChevronLeft } from "react-icons/bi";
import {HeaderStyle} from "./styles"

export default function Menu(){
    const history = useHistory();
    const {signOut} = useFirebase();

    const returnNavigation = () => {
        history.push("/salas");
    }

    return(
        <HeaderStyle>
            <p onClick={returnNavigation}><BiChevronLeft size={32} />Elegir otra sala</p>

            <div>
               <Button action={signOut}>Salir</Button> 
            </div>
            
        </HeaderStyle>
    )
}