import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import React from 'react';


const AlertTable = () => {

    return (
        <Box sx={{m:'auto', display:'flex', flexDirection:'column', alignItems:'center', gap:5}} >
            <Typography sx={{color:'red', textAlign:'center', mt: 5, fontSize:20}}>
                Usted no ha seleccionado ningun servicio para su combo.
                Por favor elija un sexo y luego un servicio.
            </Typography>
            <Box sx={{display:'flex', flexDirection:'row', gap: 5}}>
                <NavLink to={`/category/femenino`} >
                <Button variant="contained" sx={{color:'#f06292', fontSize: 40 }}>MUJER</Button>
                </NavLink>
                <NavLink to={`/category/masculino`} >
                <Button variant="contained" sx={{color:'#f06292', fontSize: 40 }}>HOMBRE</Button>
                </NavLink>
            </Box>
        </Box>
    );
}

export default AlertTable;