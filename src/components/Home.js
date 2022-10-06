import imgHome from "../index.css"
import { Typography, Box } from "@mui/material";


const Home = ({greeting}) => {
    return(
        <Box sx={{display: 'flex', flexDirection:'column'}} >
        <Typography variant='h1' sx={{ mt: 10, color:'#f06292', textAlign:'center' }}>
        Bienvenidos a {greeting}! 
        </Typography>
        <img src="https://www.clarin.com/img/2017/08/16/H1Cchgf_W_1256x620.jpg" alt="Imagen Home" border="0" className="imgHome" />
        </Box>
    );
}

export default Home;

