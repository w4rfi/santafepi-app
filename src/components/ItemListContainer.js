import {Box, Typography } from "@mui/material";



export default function ItemListContainer(greeting) {
    return(
            <Box maxWidth={'100%'} sx={{ height: 300, mt: 4, color: '#f06292', textAlign:'center', fontFamily: 'monospace', fontStyle:'italic' }} >
                <Typography variant='h1'>
                Bienvenidos a {greeting.name}! 
                </Typography>
            </Box>
    );
}


