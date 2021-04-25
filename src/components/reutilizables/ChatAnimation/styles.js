import styled, {css} from "styled-components";

export const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 15rem;
    padding: 1rem;
    margin-left: .5rem;
    overflow: hidden;
    max-height: 15rem;

    ${props => props.row !== false && css`
        grid-row: ${props => props.row};
    `}

    ${props => props.column !== false && css`
        grid-column: ${props => props.column};
    `}

    @media (min-width: 800px){
        max-height: 27rem;
        width: 37rem;
        margin-left: 4rem;
    }
`;

export const ArticleStyle = styled.article`
    display: flex;
    flex-direction: ${props => props.inverted === true ? 'row-reverse' : 'row'};
    justify-content: flex-start;
    margin: .5rem 0;
    min-width: 19rem;
    animation-name: articulo;
    animation-duration: 4.2s;
    animation-delay: .5s;
    animation-iteration-count: infinite;

    @media (min-width: 800px){
        min-width: 35rem;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.3rem;
        width: 3rem;
        height: 3rem;
        border: 1px solid black;
        border-radius: 50%;
        margin: 0 1rem;
        background-color: var(--secondary);
        color: white;
        
    }

    section{
        display: flex;
        align-items: center;
        padding: .5rem .7rem;
        border-radius: 8px;
        background-color: ${props => props.inverted === true ? 'var(--fourth)' : 'var(--third)' };
    }

    
    @keyframes articulo {
        0%{
            transform: translateY(0);
        }
        20%{
            transform: translateY(-80px);
        }
        30%{
            transform: translateY(-140px)
        }
        50%{
            transform: translateY(-210px)
        }
        70%{
            transform: translateY(-280px)
        }
        86%{
            transform: translateY(-340px)
        }
        100%{
            transform: translateY(-410px)
        }
    }
`;