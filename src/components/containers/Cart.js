import { useCartContext } from '../context/CartContext';
import { Box } from '@mui/system';
import CartTable from '../presentation/CartTable';
import AlertTable from '../presentation/AlertTable';
import { Typography } from '@mui/material';



const Cart = () => {
    const { cart } = useCartContext();
    console.log(cart)
    return (
        <Box>
        <Typography variant='h1' className="titleHome" sx={{mt: 15, mb: 10}}>
        Carrito 
        </Typography>
        <Box sx={{minWidth: 700, height: 300, border:'#f06292 solid 2px'}}  >
            {cart.length === 0 ? <AlertTable /> : <CartTable />}
        </Box>
        </Box>
    );
}

export default Cart;