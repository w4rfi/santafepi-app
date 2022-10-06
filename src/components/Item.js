import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Item = ({zona, precio, img, id}) => {
    return (
    <Card sx={{ maxWidth: 240, maxHeight: 240, minHeight: 240, mt: 10, color:'#f06292', borderColor:'#f06292' }}>
        <CardMedia
        component="img"
        alt={zona}
        height="140"
        image={img}
    />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {zona}
        </Typography>
        <NavLink to={`/item/${id}`}>
        <Button variant="outlined" sx={{color:'#f06292', borderColor:'#f06292'}}>Más info</Button>
        </NavLink>
        </CardContent>
    </Card>
    );
};


export default Item;
