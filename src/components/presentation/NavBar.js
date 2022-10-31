import { AppBar, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavBarList from "./NavBarList";
import LogoSantaDepi from "../../assets/logosantadepi.png"



const NavBar = () => {
    return (
    <Box>
    <AppBar className="appBar">
        <Toolbar className="toolBar">
        <NavLink to={'/'} >
            <img src={LogoSantaDepi} alt="logo empresa" className="logoAppBar"/>
        </NavLink>
        <NavBarList />
        <NavLink to={'/Cart'} className="cartWidget">
        <CartWidget />
        </NavLink>
        </Toolbar>
    </AppBar>
    </Box>
    );
}


export default NavBar;

