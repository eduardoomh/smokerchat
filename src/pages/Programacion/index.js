import React, {useEffect} from "react";
import ChatView from "components/pages/chat/ChatView";
import {MainContainer} from "../styles";

export default function Programacion(){

    useEffect(() => {
        window.scrollTo( 0, 0 );
    },[]);
   
    return(
        <MainContainer>
            <ChatView type="programacion" />
        </MainContainer>
    )
}