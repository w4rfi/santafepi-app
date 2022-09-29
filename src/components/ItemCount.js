import {  useState } from 'react';
import swal from 'sweetalert';
import { Button, ButtonGroup, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const CountCart = ({ stockAvailable }) => {

    const ColorAlerts = (countAdd) => {
        return (
            swal("Listo!", `Usted agrego ${countAdd} productos al carrito.`, "success")
        );
    }


    const cart = [];
    const [count, setCount] = useState(0)

    const upCount = () => {
        count < stockAvailable ? setCount(count + 1) : console.log('No hay mas stock');
    }

    const restCount = () => {
        count > 0 ? setCount(count - 1) : console.log('error');
    }

    const onAdd = () => {
        ColorAlerts(count)
        cart.push(count)
        console.log(cart)
    }

    return(
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}} >
            <Box sx={{ height:'35px', width:'200px', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center' }}>
            <Badge badgeContent={count}>
                <ShoppingCartIcon sx={{ fontSize: 25 }} /> {''}
            </Badge>
            <ButtonGroup>
                <Button onClick={upCount} >
                {''} <AddIcon sx={{ color:'#f06292' }} />
                </Button>
                <Button onClick ={restCount} >
                {''} <RemoveIcon sx={{ color:'#f06292' }} />
                </Button>
            </ButtonGroup>
            </Box>
            <Button onClick={onAdd} sx={{ height:'35px', width:'200px', color:'#f06292', border:'solid 0.5px #f06292' }}>
                Agregar al carrito
            </Button>
        </Box>
    );
}

export default CountCart;