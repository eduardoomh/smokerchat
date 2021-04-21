import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: grid;
    grid-template-columns: 15rem 1fr 8rem;
    grid-template-rows: 1fr;
    min-height: 4rem;

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
`;