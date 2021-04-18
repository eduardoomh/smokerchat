import React from "react";

export default function MessageChat(props){
    const {text, uid, photoURL, auth} = props.message;
    const messageClass = uid === auth?.currentUser?.uid ? 'sent' : 'received';
  
    return(
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="userpicture" />
        <p>{text}</p>
      </div>
    )
  }