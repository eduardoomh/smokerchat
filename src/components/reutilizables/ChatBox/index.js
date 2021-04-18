import React, {useState, useRef} from "react";
import MessageChat from "components/reutilizables/MessageChat";

export default function ChatBox(props) {
    const {firestore, auth, useCollectionData, firebase} = props;

    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('')
    
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL} = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
      dummy.current.scrollIntoView({behavior: 'smooth'});
    }
  
    return(
      <>
      <main>
        {messages && messages.map(msg => <MessageChat key={msg.id} message={msg} auth={auth}/>)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>ok</button>
      </form>
      </>
    )
  }