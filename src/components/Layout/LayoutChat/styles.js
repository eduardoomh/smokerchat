import styled from "styled-components";

export const DivContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem 1fr 4rem;
    max-width: 800px;
    max-height: 100vh
`;

export const ChatContainer = styled.div`
    grid-column: 1/2;
    grid-row:2/3;
`;