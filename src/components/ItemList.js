import { Box } from "@mui/material";
import Item from './Item'



const ItemList = (items) => {
    return(

        <Box>
            {items.map(({zona, id, precio, img}) => { 
                return (
                    <Item key={id} zona={zona} precio={precio} img={img} />
                );
            })}
        </Box>

    );
}

export default ItemList;

