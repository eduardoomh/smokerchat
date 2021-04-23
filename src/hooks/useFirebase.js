import 'firebase/auth'
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firebase, auth, firestore} from "../firebase/firebaseConfig";


export default function useFirebase(){
    const [user] = useAuthState(auth);
    const history = useHistory();

    function signIn() {
        console.log("esta entrando")
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

        if(user) history.push("/salas");

    }

    function signOut(){
        auth.signOut()
         history.push("/");
    }

    return{signIn, signOut, user, firestore, useCollectionData, auth, firebase}
          

}