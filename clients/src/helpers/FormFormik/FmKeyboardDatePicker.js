import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
function FmKeyboardDatePicker(props) {
    const {field,form,...reProps} = props;
    const { name } = field;
    const {errors,touched} = form;
    const showError = errors[name] && touched[name] ? true : false;
    const showTextEror = errors[name] && touched[name] ? errors[name]: null;
    return (
        <KeyboardDatePicker
            {...field}
            {...reProps}
            error={showError}
            helperText={showTextEror}
            onChange={val => form.setFieldValue(name, val)}
        />
    )
}
FmKeyboardDatePicker.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}
export default FmKeyboardDatePicker;

