import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative'
    },
    input: {
      display: 'none',
    },
    errors: {
        left: 0,
        position: 'absolute',
        fontSize: 13,
        color: '#f44336'
    }
}));
function FmUploadFile(props) {
    const classes = useStyles();
    const {field,form,label,startIcon,...reProps} = props;
    const { name } = field;
    const {errors,touched} = form;
    const { setFieldValue } = form;
    const showError = errors[name] && touched[name] ? true : false;
    const showTextEror = errors[name] && touched[name] ? errors[name]: null;
    const rederError = () => {
        let xhtml ='';
        if (showError === true) {
            xhtml = (<p className={`${classes.errors}`} >{showTextEror}</p>);
        }
        return xhtml;
    }

    const handleChange = (ev) => {
        const files = ev.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function() {
            setFieldValue(name, reader.result);
        };
    }
    return (
        <Fragment>
            <div className={classes.root}>
                <input
                    
                    {...field}
                    {...reProps}
                    className={classes.input}
                    id="contained-button-file_1"
                    onChange={handleChange}
                    value=""
                />
                <label htmlFor="contained-button-file_1">
                    <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />} style={{backgroundColor: 'blueviolet',textTransform: 'capitalize'}}>
                        {label}
                    </Button>{rederError()}
                </label>
            </div>
        </Fragment>
    )
}

FmUploadFile.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool
}

export default FmUploadFile;