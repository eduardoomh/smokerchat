import styled from "styled-components";

export const ArticleStyle = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .5fr;
    width: 15rem;
    height: 15rem;
    margin: 1rem;
    border-radius: 20px;
    background-color: var(--secondary);

    section{
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            font-size: 5rem;
        }
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: var(--text-alternative);
    }

    &:hover{
        cursor: pointer;
    }
`;