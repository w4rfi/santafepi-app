import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import CountCart from "./ItemCount";



const ItemDetail = ({zona, precio, img, sexo}) => {
    return(
        <Card sx={{ width: 675, height: 445, display: 'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', m:'auto', mt: 20, textAlign:'center' }}>
        <CardMedia
            component="img"
            height="140"
            image={img}
            alt={zona}
        />
        <CardContent sx={{}}>
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
        <CountCart stockAvailable='5' />
        </CardActions>
        </Card>
    );
}


export default ItemDetail; 