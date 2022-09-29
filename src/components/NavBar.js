import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CartWidget from "./CartWidget";
import NavBarList from "./NavBarList";



const NavBar = () => {
    return (
    <Box>
    <AppBar position="fixed" sx={{ width:'100%' }}>
        <Toolbar
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                bgcolor: "#f06292",
                color: "#ffffff",
            }}
        >
        <Typography
            variant="h5"
            sx={{
                fontFamily: "Monospace",
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: 35,    
            }}
        >
            SantaDepi App
        </Typography>
        <NavBarList />
        <CartWidget />
        </Toolbar>
    </AppBar>
    </Box>
    );
}


export default NavBar;

