import {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC8N4eGWQ_d_16icvdfPWDsRKgB4GQbJbY",
  authDomain: "smokerchat-d6962.firebaseapp.com",
  projectId: "smokerchat-d6962",
  storageBucket: "smokerchat-d6962.appspot.com",
  messagingSenderId: "354248883171",
  appId: "1:354248883171:web:fa6e93ccb41b1890c2fed6",
  measurementId: "G-LER3KT8WSH"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <>
      <button className="sign-in"  onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut(){
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>SIgn Out</button>
  )
}


function ChatRoom() {
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
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
      <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      <button type="submit" disabled={!formValue}>ok</button>
    </form>
    </>
  )
}

function ChatMessage(props){
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return(
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  )
}


export default App;
