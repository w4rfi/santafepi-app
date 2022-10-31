import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Tooltip, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '../context/CartContext';
import Form from '../Form';




const CartTable = () => {
    
    const { cart, removeItem} = useCartContext();
    
    const amount = cart.reduce((acc, zonas) => acc + zonas.precio,0);
    
    const iva = 0.21;
    
    const addIva = amount * iva;
    
    const totalAmount = amount + addIva;


    
    return (
        <Box sx={{color:'#f06292'}}>
        <TableContainer >
            <Table sx={{ minWidth: 500 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell >Nombre</TableCell>
                        <TableCell align="right" >Sexo</TableCell>
                        <TableCell align="right" >Cantidad</TableCell>
                        <TableCell align="right" >Precio</TableCell>
                        <TableCell align="right" >Quitar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {cart.map((zonas) => (
                        <TableRow key={zonas.id} >
                            <TableCell >{zonas.zona}</TableCell>
                            <TableCell align="right" >{zonas.categoryId}</TableCell>
                            <TableCell align="right" >{zonas.quantity}</TableCell>
                            <TableCell align="right" >{zonas.precio}</TableCell>
                            <TableCell align='right' >
                                <Tooltip title="Delete">
                                <IconButton>
                                <DeleteIcon onClick={() => removeItem(zonas.id)} />
                                </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{amount}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Iva</TableCell>
                        <TableCell align="right">{`${(iva * 100).toFixed(0)} %`}
                        </TableCell>
                        <TableCell align="right">{addIva}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{totalAmount}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Form iva={addIva} total={totalAmount} />
        </Box>

    );
}

export default CartTable;
