/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";
import {Box, Grid } from "@mui/material";
import ItemList from "../presentation/ItemList";
// import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"



const ItemListContainer = () => {

    const {sexo} = useParams()

    const [infoItem, setInfoItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const q = query(collection(db, "zonas"), where("categoryId", "==", sexo));
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No hay resultados");
            }
            setInfoItem(snapshot.docs.map((zonas) => ({id: zonas.id, ...zonas.data()})));
        })
    },[infoItem]);

    return(
            <Box sx={{ height: 300, 
                        display:'flex', 
                        flexDirection:'column', 
                        alignItems:'center', 
                        mt: 10, 
                        color: '#f06292', 
                        textAlign:'center', 
                        fontFamily: 'monospace', 
                        fontStyle:'italic' 
                    }}
                maxWidth={'100%'} >
            <Box >
                <Grid container gap={4}>
                <ItemList items={infoItem} />
                </Grid>
            </Box>
            </Box>
    );
}

export default ItemListContainer;

