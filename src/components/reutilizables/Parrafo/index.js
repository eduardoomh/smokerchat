import React from "react";
import {DivStyle} from "./styles";

export default function Parrafo(props){
    const {children} = props;

    return(
        <DivStyle>
            <p>{children}</p>
        </DivStyle>
    )
}