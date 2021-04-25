import styled from "styled-components";

export const Main = styled.main`
    background-color: #f6f6f6;
    padding-bottom: 4rem;
    border-bottom: 1px solid #e0e0e0;

    @media (min-width: 800px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 19rem 3rem 5rem;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 800px){
        justify-content: flex-start;
        margin-left: 2.5rem;
    }

`;