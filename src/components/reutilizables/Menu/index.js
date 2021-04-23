import React from "react";
import useFirebase from "hooks/useFirebase";
import Button from "../Button";
import { DiGithubBadge } from "react-icons/di";
import {Header} from "./styles"

export default function Menu(){
    const {signIn} = useFirebase();
    return(
        <Header>
            <p><a href="https://github.com/eduardoomh/smokerchat" target="blank"><DiGithubBadge size={32} /></a></p>
            <div>
                <Button action={signIn}>Ingresar</Button>
            </div>
            
        </Header>
    )
}