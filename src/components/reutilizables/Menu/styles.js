import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 4rem 1fr 8rem;
    grid-template-rows: 1fr;
    min-height: 3rem;
    width: 100vw;
    background-color: var(--third);
    margin: 0;
    position: fixed;

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: inherit;
    }

    div{
        grid-column: 3/4;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;