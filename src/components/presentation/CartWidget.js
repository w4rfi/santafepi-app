import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../context/CartContext';


const CartWidget = () => {

    const { cart } = useCartContext();

    const totalQuantity = cart.reduce((acc, my) => acc + my.quantity,0);

    console.log(totalQuantity)

    return(
        <IconButton size="large" edge="start" color="inherit" aria-label="menu"> 
        <Badge badgeContent={totalQuantity}>
        <ShoppingCartIcon sx={{ fontSize: 35}} /> {''}
        </Badge>
        </IconButton>
    );
}

export default CartWidget ;



