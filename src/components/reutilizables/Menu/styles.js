import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 4rem 1fr 8rem;
    grid-template-rows: 1fr;
    position: fixed;
    min-height: 3rem;
    max-height: 3rem;
    min-width: 100vw;
    max-width: 100vw;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    margin: 0;
    z-index: 10;

    @media (min-width: 800px){
        grid-template-columns: 6rem 1fr 14rem;
        
    }

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

        @media (min-width: 800){
            padding-right: 2rem;
        }
    }

`;
