import {useState, useEffect} from "react";
import {Box, Typography } from "@mui/material";
import CountCart from "./ItemCount";
import ItemList from "./ItemList";
import RouteZones from "./Utils/RouteZones";


const ItemListContainer = ({ greeting }) => {

    const [infoItem, setInfoItem] = useState({});

    useEffect(() => {
        RouteZones(true).then((res) => {
            setInfoItem(res.json());
            
        })
    },[])


    return(
            <Box maxWidth={'100%'} sx={{ height: 300, display:'flex', flexDirection:'column', alignItems:'center', mt: 10, color: '#f06292', textAlign:'center', fontFamily: 'monospace', fontStyle:'italic' }} >
                <Typography variant='h1'>
                Bienvenidos a {greeting}! 
                </Typography>
                <ItemList items={infoItem} />
                <CountCart stockAvailable='5' />
            </Box>
    );
}

export default ItemListContainer;

