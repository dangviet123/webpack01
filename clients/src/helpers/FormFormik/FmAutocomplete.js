import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
function FmAutocomplete(props) {
    const {field,form,variant,label,options,...reProps} = props;
    const { setFieldValue } = form;
    const { name,value } = field;
    const selectedOption = options.find(x => x.value === value);
    const handleChangeSelect = (ev,selectedOption) => {
        const setValue = selectedOption !== null ? selectedOption.value : null;
        setFieldValue(name, setValue);
    }
    
    const {errors,touched} = form;
    const showError = errors[name] && touched[name] ? true : false;
    const showTextEror = errors[name] && touched[name] ? errors[name]: null;
    return (
        <Autocomplete               
            {...field}
            {...reProps}
            value={selectedOption || null}
            options={options}
            getOptionLabel={option => (option.title ? option.title : "")}
            renderInput={(params) => (
                <TextField {...params} variant={variant} label={label} error={showError} helperText={showTextEror} />
            )}
            onChange={handleChangeSelect}
        />
    )
}
FmAutocomplete.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}
export default FmAutocomplete;
