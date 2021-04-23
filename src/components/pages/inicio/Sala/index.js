import Subtitulo from "components/reutilizables/Subtitulo";
import Parrafo from "components/reutilizables/Parrafo";
import {ArticleStyle, EmojiStyle} from "./styles"

export default function Sala(props) {
    const {emoji, titulo, children} = props;

    return (
        <ArticleStyle>
            <EmojiStyle>{emoji}</EmojiStyle>
            <Subtitulo margin="1rem 2rem 0">{titulo}</Subtitulo>
            <Parrafo>{children}</Parrafo>
        </ArticleStyle>
    )
}