import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--third);
    min-height: 10rem;

    p{
        font-size: 1.2rem;
        font-weight: bold;
        padding: .5rem;

        a{
            text-decoration: underline;
            color: inherit;
        }
    }
`;