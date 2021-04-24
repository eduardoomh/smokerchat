import styled from "styled-components";

export const FormStyle = styled.form`
    display: grid;
    grid-template-columns: 1fr 7rem;
    grid-template-rows: 1fr;
    min-height: 4rem;
    min-width: 100vw;
    max-width: 100vw;
    background-color: var(--third);
    z-index: 10;

    input{
        margin: 1rem;
        padding: .3rem;
        border-radius: 6px;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;