import styled from "styled-components";

export const LiStyle = styled.li`
    display: flex;
    flex-direction: ${props => props.status === 'received' ? 'row' : 'row-reverse'};
    justify-content: flex-start;
    background-color: transparent;
    margin: 0;
    padding: 1rem 0;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;

        img{
            border: 1px solid black;
            border-radius: 50%;
        }
    }

    p{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: ${props => props.status === 'received' ? 'var(--third)' : 'var(--fourth)'} ;
        padding: .5rem 1rem;
        border-radius: 16px;
        min-height: 1rem;
    }

`;