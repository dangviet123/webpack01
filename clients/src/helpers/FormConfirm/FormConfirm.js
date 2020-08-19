import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import WarningIcon from '@material-ui/icons/Warning';
import { Icon } from '@material-ui/core';

function FormConfirm(props) {
const {Title,Text,handleConfirm,handleClose,isConfirm,isOpen} = props;
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">{Title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} startIcon={isConfirm ? <Icon color="inherit" size={18} className="fa fa-circle-o-notch fa-spin" /> : ''} color="primary">
           ĐỒNG Ý
          </Button>
          <Button onClick={handleClose} color="secondary">
            HỦY BỎ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormConfirm;