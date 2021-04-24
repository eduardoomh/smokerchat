import React, {useEffect} from "react";

export default function Error(){

    useEffect(() => {
        window.scrollTo( 0, 0 );
    },[]);
   

    return(
        <main>
            <p>Esta pagina no esta disponible</p>
        </main>
    )
}