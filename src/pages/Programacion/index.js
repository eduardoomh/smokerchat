import React from "react";
import ChatView from "components/pages/chat/ChatView";
import {MainContainer} from "../styles";

export default function Programacion(){
    return(
        <MainContainer>
            <ChatView type="programacion" />
        </MainContainer>
    )
}