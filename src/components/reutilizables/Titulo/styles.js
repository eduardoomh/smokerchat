import styled from "styled-components";

export const H1Style = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    color: var(--secondary);
    margin: ${props => props.margin || '6rem 2rem'};
`;