import styled from "styled-components";

export const DivStyle = styled.div`
    .logo-container{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        min-height: 7rem;

        @media (min-width: 800px){
            justify-content: flex-start;
        }
    }
`;