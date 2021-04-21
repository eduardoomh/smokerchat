import React from "react";
import {useHistory} from "react-router-dom";
import {ArticleStyle} from "./styles";

export default function CardSala(props){
    const {emoji, texto, ruta} = props;
    const history = useHistory();

    const navigate = () => {
        history.push(`/${ruta}`);
    }

    return(
        <ArticleStyle onClick={navigate}>
            <section>
                <p>{emoji}</p>
            </section>
            <p>{texto}</p>
        </ArticleStyle>
    )
}