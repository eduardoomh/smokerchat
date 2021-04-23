import styled, {css} from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary);
    color: var(--text-alternative);
    min-width: 6rem;
    height: 2rem;
    border-radius: 3px;
    padding: .5rem;
    transition: .4s ease-in-out;


    ${props => props.size === 'big' && css`
        height: 3rem;
        padding: 1rem;
        font-size: 1.2rem;
        border-radius: 6px;

    `}

    &:hover{
        background-color: var(--fifth);
        cursor: pointer;
        transform: scale(1.1,1.1);
    }

`;