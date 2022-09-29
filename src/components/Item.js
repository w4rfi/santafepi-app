import { Card, CardMedia, CardContent, Typography } from '@mui/material'


const Item = (zona, precio, img) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Typography variant="body2" color="text.secondary">
            {precio}
        </Typography>
        </CardContent>
    </Card>
    );
};


export default Item;
