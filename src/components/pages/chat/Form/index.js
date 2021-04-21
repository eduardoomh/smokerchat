import React, {useState, useEffect} from "react";
import useFirebase from "hooks/useFirebase";
import Button from "components/reutilizables/Button";
import {FormStyle} from "./styles";

export default function Form(props){
    const {path} = props;
    const [message, setMessage] = useState('');
    const [collectionName, setCollectionName] = useState('');
    const {firestore, firebase, auth} = useFirebase();

    useEffect(() => {
        switch(path){
            case '/programacion': 
                setCollectionName('programacion');
            break;
            case '/futbol':
                setCollectionName('futbol');
            break;
            case '/series_peliculas':
                setCollectionName('series_peliculas')
            break;
            default:
                setCollectionName('')
            break;
        }
       
        return () => {
            setMessage('')
            setCollectionName('')
        }
    }, [path])

    const sendMessage = async (e) => {
        e.preventDefault()
        const collectionRef = firestore.collection(collectionName);
        const {uid, photoURL} = auth.currentUser;

        await collectionRef.add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
          });

        setMessage('');
    }

    return(
        <FormStyle>
            <input 
                type="text" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                placeholder="Escriba algo ..." 
            />
            <div>
                <Button action={(e) => sendMessage(e)} disabled={message.length === 0}>Enviar</Button>
            </div>
            
        </FormStyle>
    )
}