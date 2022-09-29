import {useState, useEffect} from "react";
import {Box, Typography, Grid } from "@mui/material";
import CountCart from "./ItemCount";
import ItemList from "./ItemList";



const ItemListContainer = ({ greeting }) => {

    
    const [infoItem, setInfoItem] = useState([]);

    const getZonas = async () => {
        const response = await fetch('/Zones.json');
        const data = await response.json();
        setInfoItem(data);
    }

    useEffect(() => {
        setTimeout(() => {
            getZonas()
        }, 2000);
    },[])


    return(
            <Box maxWidth={'100%'} sx={{ height: 300, display:'flex', flexDirection:'column', alignItems:'center', mt: 10, color: '#f06292', textAlign:'center', fontFamily: 'monospace', fontStyle:'italic' }} >
                {/* <Typography variant='h1'>
                Bienvenidos a {greeting}! 
                </Typography> */}
            <Box >
                <Grid container rowSpacing={1} columnSpacing={{ md: 5 }} >
                <ItemList items={infoItem} />
                </Grid>
            </Box>

                <CountCart stockAvailable='5' />
            </Box>
            
    );
}

export default ItemListContainer;

