import styled from "styled-components";

export const DivContainer = styled.div`
display: flex;
    min-height: inherit;
    max-height: inherit;
    overflow-y: scroll;
    background-color: var(--sixth);
    flex-direction: column-reverse;
    scroll-behavior: smooth;
    overflow:auto;

    ul{
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;

        @media (min-width: 800px){
            padding-bottom: 1rem;
        }
        
    }
`;