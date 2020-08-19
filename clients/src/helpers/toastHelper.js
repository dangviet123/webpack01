import React from 'react';
import { toast } from 'react-toastify';
import Backspace from '@material-ui/icons/Block';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Warning from '@material-ui/icons/Warning';
export const toastErrorNetWork = error => { // lỗi mạng
    let message = null;
    if (typeof error === 'object' && error.message) {
        ({message} = error);
    }
    if (message !== null && typeof message !== 'undefined' && message !== '' ) {
        toast.error(<div><Backspace /> {message}</div>);
    }
};

export  const toastSuccess = message => {
    toast.success(<div><CheckCircleOutlineIcon /> {message}</div>);
}

export  const toastError = message => {
    toast.error(<div><Backspace /> {message}</div>);
}

export  const toastWarning = message => {
    toast.warning(<div><Warning /> {message}</div>);
}