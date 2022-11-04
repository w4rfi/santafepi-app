import { Box, Container } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
                    <Box
        px={{ xs: 5, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#f06292"
        color="white"
        sx={{height: 90}}
        >
        <Container maxWidth="lg">
        <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            Create by W4rfi &reg; {new Date().getFullYear()}
        </Box>
        </Container>
        </Box>
        </footer>
    );
}

export default Footer;

// COMENTARIO DE PRUEBA