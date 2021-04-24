import React from "react";
import {DivStyle} from "./styles";

export default function Parrafo(props){
    const {children, textAlign = 'center', justify = 'center', fontSize='1.4rem', bold = false} = props;

    return(
        <DivStyle textAlign={textAlign} justify={justify} fontSize={fontSize} bold={bold}>
            <p>{children}</p>
        </DivStyle>
    )
}