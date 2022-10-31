import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import CountCart from "./ItemCount";
import EndCountCart from "./EndCountCart";



const ItemDetail = ({item}) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCartContext();
    
    const onAdd = (amount) => {
        setQuantity(amount)
        addItem(amount, item)
    }

    return(
        <Card sx={{ width: 675, 
                    height: 445, 
                    display: 'flex', 
                    flexDirection:'column', 
                    justifyContent:'space-between', 
                    alignItems:'center', 
                    m:'auto', 
                    mt: 20, 
                    textAlign:'center' }}>
        <CardMedia
            component="img"
            height="140"
            image={item.img}
            alt={item.zona}
        />
        <CardContent>
            <Typography gutterBottom variant="h3" component="div">
            {item.zona}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            {item.sexo}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            ${item.precio}
            </Typography>
        </CardContent>
        <CardActions>
        {quantity > 0 ? <EndCountCart /> : <CountCart onAdd={onAdd} stock={item.stock} />}
        </CardActions>
        </Card>
    );
}


export default ItemDetail; 