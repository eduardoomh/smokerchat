import React from "react";
import ChatView from "components/pages/chat/ChatView";
import {MainContainer} from "../styles";

export default function Series_Peliculas(){
    return(
        <MainContainer>
            <ChatView type="series_peliculas" />
        </MainContainer>
    )
}