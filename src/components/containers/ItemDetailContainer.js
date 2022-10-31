import ItemDetail from "../presentation/ItemDetail";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [state, setState] = useState();

    let navigate = useNavigate();

    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();

        const q = doc(db, "zonas", id);
        getDoc(q).then((snapshot) => {
            if (snapshot.exists()){
                setState({id: snapshot.id, ...snapshot.data()});
            } else {
                alert('No existe este producto')
                navigate('/')
            }
        })
    },[id, navigate])

console.log(state)

    return(
        <Grid>
            <ItemDetail key={state} item={{...state}}/>
        </Grid>
    );
}

export default ItemDetailContainer;


