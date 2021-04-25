import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: grid;
    grid-template-columns: 15rem 1fr 8rem;
    grid-template-rows: 1fr;
    position: fixed;
    top: 0;
    height: 10vh;
    min-height: 50px;
    min-width: 100vw;
    max-width: 100vw;
    background-color: white;


    p{
        display: flex;
        align-items: center;
        font-size: 1.4rem;

        &:hover{
            cursor: pointer;
        }
    }

    div{
        grid-column:3/4;
        grid-row: 1/2;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 4rem;
    }

    @media (min-width: 800px){
        min-width: 800px;
        max-width: 800px;
    }
`;