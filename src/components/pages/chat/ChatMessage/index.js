import React from "react";
import {LiStyle} from "./styles";

export default function ChatMessage(props){
    const {data, auth} = props;
    const status = data.uid === auth.uid ? 'sent' : 'received';

    return(
        <LiStyle status={status}>
            <div>
                <img src={data?.photoURL} alt="avatar" width={48} height={48}/>
            </div>
            <p>{data?.text}</p>
        </LiStyle>
    )
}