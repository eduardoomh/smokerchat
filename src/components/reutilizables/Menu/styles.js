import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 4rem 1fr 8rem;
    grid-template-rows: 1fr;
    position: fixed;
    min-height: 3rem;
    max-height: 3rem;
    width: 100vw;
    background-color: var(--third);
    margin: 0;
    box-shadow: 1px 1px 1px #e0dcdc;
    z-index: 10;

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: inherit;

        a{
            color: inherit;
        }
    }

    div{
        grid-column: 3/4;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;