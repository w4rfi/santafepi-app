import {useState, useEffect} from "react";
import {Box, Grid } from "@mui/material";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const {sexo} = useParams()

    const [infoItem, setInfoItem] = useState([]);

    const getZonas = async () => {
        const response = await fetch('/Zones.json');
        const data = await response.json();
        const dataSex = data.filter(value => value.sexo == sexo);
        setInfoItem(dataSex)
    }

    useEffect(() => {
        setTimeout(() => {
            getZonas()
        }, 2000);
    },[infoItem])


    return(
            <Box maxWidth={'100%'} sx={{ height: 300, display:'flex', flexDirection:'column', alignItems:'center', mt: 10, color: '#f06292', textAlign:'center', fontFamily: 'monospace', fontStyle:'italic' }} >
            <Box >
                <Grid container gap={4}>
                <ItemList items={infoItem} />
                </Grid>
            </Box>
            </Box>
            
    );
}

export default ItemListContainer;

