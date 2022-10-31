import { Typography, Box } from "@mui/material";



const Home = ({greeting}) => {
    return(
        <Box className="containerHome" >
        <Typography variant='h1' className="titleHome" sx={{mt: 10}}>
        Bienvenidos a {greeting}! 
        </Typography>
        <img src="https://www.clarin.com/img/2017/08/16/H1Cchgf_W_1256x620.jpg" alt="Imagen Home" border="0" className="imgHome" />
        </Box>
    );
}

export default Home;

