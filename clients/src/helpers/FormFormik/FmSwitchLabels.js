import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
function FmSwitchLabels(props) {
    const {field,form,label,...reProps} = props;
    return (
        <FormControlLabel
            control={
            <Switch
                {...field}
                {...reProps}
            />
            }
            label={label}
        />
    )
}

FmSwitchLabels.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool

}

export default FmSwitchLabels


