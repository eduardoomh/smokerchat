import React from "react";
import { messages } from "./messages";
import { DivStyle, ArticleStyle } from "./styles";

export default function ChatAnimation() {
    return (
        <DivStyle>
            {
                messages.map(msg => (
                    <ArticleStyle background={msg.user.background} color={msg.user.color} key={msg.id}>
                        <div>{msg.user.word}</div>
                        <section>{msg.text}</section>
                    </ArticleStyle>
                ))
            }

        </DivStyle>

    )
}