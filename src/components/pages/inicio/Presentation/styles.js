import styled from "styled-components";

export const DivStyle = styled.div`
    .logo-container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 7rem;
        background-color: #f6f6f6;

        .logo-image{
            border-radius: 50%;
        }

        .logo-name{
            margin-left: -2rem;
        }

        @media (min-width: 800px){
            justify-content: flex-start;
            min-height: 10rem;
            margin-left: 2rem;
        }
    }
`;