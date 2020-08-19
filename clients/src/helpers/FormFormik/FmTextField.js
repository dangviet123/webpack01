import React from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
function FmTextField(props) {
    const {field,form,...reProps} = props;
    const { name } = field;
    const {errors,touched} = form;
    const showError = errors[name] && touched[name] ? true : false;
    const showTextEror = errors[name] && touched[name] ? errors[name]: null;
    return (
        <TextField
            {...field}
            {...reProps}
            error={showError}
            helperText={showTextEror}
        />
    )
}

FmTextField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}

export default FmTextField;





