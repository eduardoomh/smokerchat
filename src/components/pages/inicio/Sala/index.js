import Subtitulo from "components/reutilizables/Subtitulo";
import Parrafo from "components/reutilizables/Parrafo";
import useMovil from "hooks/useMovil";
import {ArticleStyle, EmojiStyle} from "./styles"

export default function Sala(props) {
    const {emoji, titulo, children} = props;
    const {movil} = useMovil();

    return (
        <ArticleStyle>
            <EmojiStyle>{emoji}</EmojiStyle>
            <Subtitulo margin="1rem 2rem 0" color='white'>{titulo}</Subtitulo>
            <Parrafo fontSize={movil ? '1.1rem' : '1.4rem'} background='#3c3744' color='white'>{children}</Parrafo>
        </ArticleStyle>
    )
} 