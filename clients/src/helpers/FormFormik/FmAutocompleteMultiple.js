import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
function FmAutocompleteMultiple(props) {
    const {field,form,variant,label,options,...reProps} = props;
    const { name,value } = field;
    const selectedOption =  options.filter(x => value.includes(x.value) === true);
    const handleChangeSelect =(ev,value) => {
        const listValue = [];
        value.forEach(element => {
            listValue.push(element.value);
        });
        form.setFieldValue(name, listValue);
    }
    
    const {errors,touched} = form;
    const showError = errors[name] && touched[name] ? true : false;
    const showTextEror = errors[name] && touched[name] ? errors[name]: null;
    return (
        <Autocomplete
            multiple               
            {...field}
            {...reProps}
            value={selectedOption}
            options={options}
            getOptionLabel={option => (option.title ? option.title : "")}
            renderInput={(params) => (
                <TextField {...params} variant={variant} label={label} error={showError} helperText={showTextEror} />
            )}
            onChange={handleChangeSelect}
        />
    )
}
FmAutocompleteMultiple.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}
export default FmAutocompleteMultiple;
