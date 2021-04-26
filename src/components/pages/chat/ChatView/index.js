import React from "react";
import useFirebase from "hooks/useFirebase";
import ChatMessage from "components/pages/chat/ChatMessage";
import {DivContainer} from "./styles";

export default function ChatView(props){
    const {type} = props;
    const {firestore, useCollectionData, auth} = useFirebase();

    const collectionRef = firestore.collection(type);
    const query = collectionRef.orderBy('createdAt', "desc").limit(30);
    const [messages] = useCollectionData(query, {idField: 'id'});
    messages?.reverse();

    return(
        <DivContainer>
            <ul>
                {
                    messages?.map(msg => (
                        <ChatMessage key={msg.id} data={msg} auth={auth.currentUser} />
                    ))
                }
            </ul>
        </DivContainer>
    )
}