import React from "react";
import ChatView from "components/pages/chat/ChatView";
import {MainContainer} from "../styles";

export default function Futbol(){
    return(
        <MainContainer>
            <ChatView type="futbol" />
        </MainContainer>
    )
}