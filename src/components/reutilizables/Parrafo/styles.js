import styled, {css} from "styled-components";

export const DivStyle = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: center;
    margin: 2rem;

    p{
        display: flex;
        justify-content: 'center';
        font-weight: normal;
        align-items: center;
        text-align: ${props => props.textAlign ? props.textAlign : 'center'};
        font-size:  ${props => props.fontSize ? props.fontSize : '1.4rem'};
        padding: .5rem;
        ${props => props.bold === true && css`
            font-weight: bold;
        ` }

    }

`;