import React from "react";
import Button from "../Button";
import { DiGithubBadge } from "react-icons/di";
import {Header} from "./styles"

export default function Menu(){
    return(
        <Header>
            <p><DiGithubBadge size={32} /></p>
            <div>
                <Button>Ingresar</Button>
            </div>
            
        </Header>
    )
}