import styled from "styled-components";

export const H2Style = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.6rem;
    color: ${props => props.color === 'default' ? 'var(--secondary)' : props.color};
    margin: ${props => props.margin || '1rem 2rem'};
`;