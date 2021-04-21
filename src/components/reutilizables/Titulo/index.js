import React from "react";
import {H1Style} from "./styles";

export default function Titulo(props){
    const { children, margin } = props;
    return(
        <H1Style margin={margin}>
            {children}
        </H1Style>
    )
}