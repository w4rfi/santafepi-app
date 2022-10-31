import ItemDetail from "../presentation/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [state, setState] = useState();

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();

        const q = doc(db, "zonas", id);
        getDoc(q).then((snapshot) => {
            setState({id: snapshot.id, ...snapshot.data()});
        })
    },[id])

console.log(state)

    return(
        <Grid>
            <ItemDetail key={state} item={{...state}} />
        </Grid>
    );
}

export default ItemDetailContainer;


