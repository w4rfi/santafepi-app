import { AppBar, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavBarList from "./NavBarList";
import LogoSantaDepi from "../assets/logosantadepi.png"



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
        <NavLink to={'/'} >
            <img src={LogoSantaDepi} alt="logo empresa" style={{height: 80, }}/>
        </NavLink>
        <NavBarList />
        <CartWidget />
        </Toolbar>
    </AppBar>
    </Box>
    );
}


export default NavBar;

