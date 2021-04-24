import React from "react";
import { messages } from "./messages";
import { DivStyle, ArticleStyle } from "./styles";

export default function ChatAnimation(props) {
    const {column = false, row = false} = props;

    return (
        <DivStyle row={row} column={column}>
            {
                messages.map(msg => (
                    <ArticleStyle background={msg.user.background} color={msg.user.color} key={msg.id} inverted={msg.inverted}>
                        <div>{msg.user.word}</div>
                        <section>{msg.text}</section>
                    </ArticleStyle>
                ))
            }

        </DivStyle>

    )
}