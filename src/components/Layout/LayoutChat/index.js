import React from "react";
import {useHistory} from "react-router-dom";
import Menu from "components/pages/chat/Menu";
import Form from "components/pages/chat/Form";
import {DivContainer} from "./styles";

export default function LayoutChat(props){
    const {children} = props;
    const history = useHistory();

    return(
        <DivContainer>
            <Menu path={history.location.pathname} />
            <div>
                {children}
            </div>
            <Form path={history.location.pathname} />  
        </DivContainer>
    )
}