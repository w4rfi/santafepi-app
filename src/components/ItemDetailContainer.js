import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";


const ItemDetailContainer = () => {

    const [state, setState] = useState();

    const {id} = useParams()

    const getZonas = async () => {
        const response = await fetch('/Zones.json') ;
        const data = await response.json();
        const dataid = data.find(value => value.id == id)
        setState(dataid)
    }

    useEffect(() => {
        setTimeout(() => {
            getZonas()
        }, 2000);
    },[])

    console.log(state)

    return(
        <Grid>
            <ItemDetail key={state} {...state} />
        </Grid>
    );
}

export default ItemDetailContainer;

// const quitarLocal = eleccionParseado.filter(nombre =>  nombre.zona !== nombreZona);

