import React, { useState } from 'react';
import { Box, FormControl, FormHelperText, Input, InputLabel, Button } from '@mui/material';
import { useCartContext } from '../context/CartContext';
import { AddOrder } from '../utils/Firebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';



const Form = ({iva, total}) => {

    const MySwal = withReactContent(Swal)

    let navigate = useNavigate()

    const {cart, clear } = useCartContext();


    const [datos, setDatos] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos, 
            [e.target.name] : e.target.value,
        })
    }

    const today = new Date();
    const date = today.toLocaleDateString()


    const hanldeClick = () => {
        AddOrder({Buyer:{...datos}, Sleccionado:{...cart}, Iva: iva, Total: total, date})
        MySwal.fire({
            title: <strong>Excelente!</strong>,
            html: <i>Su orden ya fue registrada!</i>,
            icon: 'success'
        })
        clear()
        navigate('/santafepi-app')
    }

    



    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap: 5, mt: 5}}>
        <Box sx={{display:'flex', flexDirection:'row', gap: 3}} >
            <FormControl>
                <InputLabel htmlFor='name'>Nombre</InputLabel>
                <Input name='name' type='text' aria-describedby='name-helper' onChange={handleInputChange} required />
                <FormHelperText id='name-helper' >Tu nombre</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='lastName'>Apellido</InputLabel>
                <Input name='lastName' type='text' aria-describedby='lastName-helper' onChange={handleInputChange} required />
                <FormHelperText id='lastName-helper' >Tu apellido</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='phone'>Num. Celular</InputLabel>
                <Input name='phone' type='number' aria-describedby='phone-helper' onChange={handleInputChange} required />
                <FormHelperText id='phone-helper' >Tu telefono personal</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input name='email' type='text' aria-describedby='email-helper' onChange={handleInputChange} required />
                <FormHelperText id='email-helper' >Tu email personal</FormHelperText>
            </FormControl>
        </Box>
        <Button onClick={hanldeClick} sx={{ height:'35px', width:'200px', color:'#f06292', border:'solid 0.5px #f06292' }}>
                Finalizar compra
        </Button>
        </Box>
    );
};

export default Form;