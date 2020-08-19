import React from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
function FmTextFieldCheckApi(props) {
    const flagCheck = useSelector(state => state);
    const {field,form,error,message,...reProps} = props;
    const checkapi =  flagCheck[error[0]][error[1]];
    const { name } = field;
    const {errors,touched} = form;
    const showError = errors[name] && touched[name] ? true : false;
    
    let showTextEror = errors[name] && touched[name] ? errors[name]: ''; 
    const validaunq = !checkapi ? message : '';
    showTextEror = `${showTextEror}${validaunq}`;
    return (
        <TextField
            {...field}
            {...reProps}
            error={showError || !checkapi}
            helperText={showTextEror}
        />
    )
}

FmTextFieldCheckApi.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}

export default FmTextFieldCheckApi;