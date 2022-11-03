import { Box, Container, Grid  } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#f06292"
        color="white"
        sx={{ width:'100%' ,height: 230, position: 'absolute', bottom: 0}}
        >
        <Container maxWidth="lg">
            <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                    <Link href="/" color="inherit">
                    Contact
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Support
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Privacy
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                    <Link href="/" color="inherit">
                    Login
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Register
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Messages</Box>
                <Box>
                    <Link href="/" color="inherit">
                    Backup
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    History
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Roll
                    </Link>
                </Box>
            </Grid>
            </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            Create by W4rfi &reg; {new Date().getFullYear()}
        </Box>
        </Container>
        </Box>
    );
}

export default Footer;

// COMENTARIO DE PRUEBA