import React from "react";
import {ButtonStyle} from "./styles";

export default function Button(props){
    const {children, size='small', action=false} = props;

    return(
        <ButtonStyle size={size} onClick={action ? action : ''}>
            {children}
        </ButtonStyle>
    )
}