import React from "react";
import {H2Style} from "./styles";

export default function Titulo(props){
    const { children, margin } = props;
    return(
        <H2Style margin={margin}>
            {children}
        </H2Style>
    )
}