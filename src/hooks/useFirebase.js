import 'firebase/auth'
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firebase, auth, firestore} from "../firebase/firebaseConfig";


export default function useFirebase(){
    const [user] = useAuthState(auth);
    const history = useHistory();

    async function signIn() {
        console.log("esta entrando")
        const provider = new firebase.auth.GoogleAuthProvider();
        try{
            await auth.signInWithPopup(provider)
            history.push("/salas");
        }catch(error){
            console.log(error.message)
        }
  

    }

    function signOut(){
        auth.signOut()
         history.push("/");
    }

    return{signIn, signOut, user, firestore, useCollectionData, auth, firebase}
          

}