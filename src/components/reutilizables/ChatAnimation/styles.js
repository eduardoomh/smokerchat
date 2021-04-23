import styled from "styled-components";

export const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 15rem;
    padding: 1rem;
    margin-left: 1.8rem;
    border: 1rem solid white;
    overflow: hidden;
    max-height: 15rem;
`;

export const ArticleStyle = styled.article`
    display: flex;
    justify-content: flex-start;
    margin: .5rem 0;
    min-width: 16rem;
    animation-name: articulo;
    animation-duration: 4.2s;
    animation-delay: .5s;
    animation-iteration-count: infinite;

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
        margin-right: 1rem;
        background-color: ${props => props.background};
        color: ${props => props.color};
        
    }

    section{
        display: flex;
        align-items: center;
        padding: .5rem .7rem;
        border-radius: 8px;
        background-color: var(--fourth);
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