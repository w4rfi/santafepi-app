import { Button, ButtonGroup, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { NavLink } from 'react-router-dom';



const EndCountCart = () => {


    return(
        <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}} >
            <Box sx={{ height:'35px', width:'200px', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center' }}>
            <Badge sx={{ color:'#f06292' }}>
                <ShoppingCartIcon sx={{ fontSize: 25, color:'#f06292' }} /> {''}
            </Badge>
            <ButtonGroup>
                <Button>
                {''} <AddIcon sx={{ color:'#f06292' }} />
                </Button>
                <Button>
                {''} <RemoveIcon sx={{ color:'#f06292' }} />
                </Button>
            </ButtonGroup>
            </Box>
            <NavLink to={'/cart'}>
            <Button sx={{ height:'35px', width:'200px', color:'#f06292', border:'solid 0.5px #f06292' }}>
                Finalizar compra
            </Button>
            </NavLink>
        </Box>
    );
}

export default EndCountCart;