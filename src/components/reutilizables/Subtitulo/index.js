import React from "react";
import {H2Style} from "./styles";

export default function Titulo(props){
    const { children, margin, color = 'default'} = props;
    return(
        <H2Style margin={margin} color={color}>
            {children}
        </H2Style>
    )
}