import styled from "styled-components";

export const ArticleStyle = styled.article`
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    margin: 3rem 2rem;
    padding: .5rem;
    border-radius: 10px;
    box-shadow: 2px 2px 2px #eaeaea;

    @media (min-width: 800px){
        min-width: 20rem;
        max-width: 20rem;
        min-height: 24rem;
        max-height: 24rem;
    }
    
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