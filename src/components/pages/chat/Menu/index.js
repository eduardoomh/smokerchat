import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import useFirebase from "hooks/useFirebase";
import Button from "components/reutilizables/Button";
import { BiChevronLeft } from "react-icons/bi";
import {HeaderStyle} from "./styles"

export default function Menu(props){
    const {path} = props;
    const [collectionName, setCollectionName] = useState('');
    const history = useHistory();
    const {signOut} = useFirebase();

    const returnNavigation = () => {
        history.push("/salas");
    }

    useEffect(() => {
        switch(path){
            case '/programacion': 
                setCollectionName('Programación 👩‍💻');
            break;
            case '/futbol':
                setCollectionName('Futbol ⚽️');
            break;
            case '/series_peliculas':
                setCollectionName('Series y peliculas 🎬')
            break;
            default:
                setCollectionName('')
            break;
        }
       
        return () => {
            setCollectionName('')
        }
    }, [path])


    return(
        <HeaderStyle>
            <p onClick={returnNavigation}><BiChevronLeft size={32} />{collectionName}</p>

            <div>
               <Button action={signOut}>Salir</Button> 
            </div>
            
        </HeaderStyle>
    )
}