
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import CountCart from "./ItemCount";



const ItemDetail = ({zona, precio, img, sexo, stock}) => {

    const [quantity, setQuantity] = useState()

    // let navigate = useNavigate()

    const onAdd = (push) => {
        setQuantity(push)
        console.log(quantity)
        // navigate(`/cart`)
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
            image={img}
            alt={zona}
        />
        <CardContent>
            <Typography gutterBottom variant="h3" component="div">
            {zona}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            {sexo}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            ${precio}
            </Typography>
        </CardContent>
        <CardActions>
        <CountCart onClick={onAdd} stock={stock} />
        </CardActions>
        </Card>
    );
}


export default ItemDetail; 