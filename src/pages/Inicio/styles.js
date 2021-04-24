import styled from "styled-components";

export const Main = styled.main`

    @media (min-width: 800px){
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 15rem 3rem 5rem;
            max-width: 1200px;
            margin: 0 auto;
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