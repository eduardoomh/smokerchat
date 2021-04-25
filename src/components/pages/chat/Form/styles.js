import styled from "styled-components";

export const FormStyle = styled.form`
    display: grid;
    grid-template-columns: 1fr 9rem;
    grid-template-rows: 1fr;
    position: fixed;
    height: 10vh;
    min-height: 50px;
    min-width: 100vw;
    max-width: 100vw;
    background-color: var(--third);
    z-index: 10;
    bottom: 0;

    input{
        margin: .7rem;
        padding: .3rem;
        border-radius: 6px;
        font-size: 1.5rem;
        width: 15rem;

        @media (min-width: 800px){
            width: 38rem;
        }
    }

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    @media (min-width: 800px){
        min-width: 800px;
        max-width: 800px;
    }

`;