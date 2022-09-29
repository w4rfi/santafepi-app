import { Box, Button } from '@mui/material';

const NavBarList = () => {

    const navItems = ['Productos', 'Quienes somos', 'Contacto'];


    return(
        <Box sx={{ mr: 9, display: { xs: 'none', sm: 'block'} }}>
            {navItems.map((item) => (
        <Button key={item} sx={{ color: '#ffffff', fontSize: 15 }}>
        {item}
        </Button>
))}
        </Box>

    );
}

export default NavBarList; 


