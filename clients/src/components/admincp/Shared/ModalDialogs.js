import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';
import * as showMD from '../../../actions/admincp/ModalDialogs';
const useStyles = makeStyles((theme) => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));
function ModalDialogs() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {open,maxWidth,Title,component} = useSelector(state => state.ModalDialogsReducer);
    const handleClose = () => {
        dispatch(showMD.showModalDialogs(false));
    };
    return (
        <div >
        <Dialog 
            open={open} 
            onClose={handleClose} 
            fullWidth
            maxWidth={maxWidth}
            disableBackdropClick
            disableEscapeKeyDown
            
            >
            <div className={classes.groupTitle}>
                <DialogTitle id="form-dialog-title" style={{textTransform: 'uppercase'}}>{Title}</DialogTitle>
                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <Divider />
            <div>
                {component}
            </div>
        </Dialog>
        </div>
    );
}
export default ModalDialogs;