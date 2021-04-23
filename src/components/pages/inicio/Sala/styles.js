import styled from "styled-components";

export const ArticleStyle = styled.article`
    display: flex;
    flex-direction: column;
`;

export const EmojiStyle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    animation-name: emoji;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @keyframes emoji{
        50%{
            transform: scale(1.1,1.1);

        }

        100%{
            transform: translateX(1,1);

        }
    }
`;