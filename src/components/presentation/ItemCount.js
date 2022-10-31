
import { useState } from "react";
import { Button, ButtonGroup, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const CountCart = ({ onAdd, stock }) => {

    const [count, setCount] = useState(0)

    const upCount = () => {
        count < stock ? setCount(count + 1) : console.log('no hay mas stock');
    }

    const restCount = () => {
        count > 0 ? setCount(count - 1) : console.log('error');
    }

    return(
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}} >
            <Box sx={{ height:'35px', width:'200px', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center' }}>
            <Badge badgeContent={count} sx={{ color:'#f06292' }}>
                <ShoppingCartIcon sx={{ fontSize: 25, color:'#f06292' }} /> {''}
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
            {count > 0 ? <Button onClick={() => { onAdd(count) }} sx={{ height:'35px', width:'200px', color:'#f06292', border:'solid 0.5px #f06292' }}>
                Agregar a tu combo </Button> : <Button sx={{ height:'35px', width:'200px', color:'#f06292', border:'solid 0.5px #f06292', opacity: 0.5 }}>
                Agregar a tu combo
            </Button>}    
        </Box>
    );
}

export default CountCart;

