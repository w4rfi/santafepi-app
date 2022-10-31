import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'

function Order(id) {
    return (
    <div>
        <Dialog
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
        <DialogContent>
                <DialogContentText id="alert-dialog-description">
                {id}
                </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button >Disagree</Button>
            <Button autoFocus>
                Agree
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}

export default Order;