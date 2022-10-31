import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBarList = () => {

    return(
        <Box sx={{mr: 25}}>
        <NavLink to={`/category/femenino`} >
        <Button sx={{color:'#ffffff', fontSize: 15}}>
            Mujer
        </Button>
        </NavLink>
        <NavLink to={`/category/masculino`} >
        <Button sx={{color:'#ffffff', fontSize: 15}}>
            Hombre
        </Button>
        </NavLink>
        </Box>

    );
}

export default NavBarList; 



