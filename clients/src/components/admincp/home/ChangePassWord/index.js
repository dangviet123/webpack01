import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Icon, Grid } from '@material-ui/core';
import { Formik,Form,Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225,CONFIRM_PASS } from '../../../../constants/admincp/ValidateField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
const validationSchema = Yup.object().shape({
    password_ol: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    password_new: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    password_new_confirm: Yup.string()
    .oneOf([Yup.ref("password_new")], CONFIRM_PASS)
    .required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225)
});
function ChangePassWord(props) {
    const {changePassWord} = props;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);

    const initialValues = { 
        password_ol: '',
        password_new: '',
        password_new_confirm: ''
    };

    const handlecChangePassWord = value => {
        if (isSubmitForm === false) {
            changePassWord(value);
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => handlecChangePassWord(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <Field name="password_ol" type="password" disabled={isSubmitForm}  label={langs.password_ol} component={FmTextField} fullWidth  size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="password_new" type="password" disabled={isSubmitForm}  label={langs.password_new} component={FmTextField} fullWidth  size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="password_new_confirm" type="password" disabled={isSubmitForm} label={langs.password_new_confirm} component={FmTextField} fullWidth  size="small"  />
                                </Grid>
                            </Grid>
                        </DialogContent>

                        <DialogActions style={{padding: 20}}>
                            <Button color="primary" style={{backgroundColor: '#43a047'}} fullWidth type="submit" variant="contained" startIcon={!isSubmitForm ?<CheckIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disableElevation={isSubmitForm}>
                                {langs.SAVES}
                            </Button>
                            <Button  color="secondary" fullWidth type="reset" variant="contained" startIcon={<CloseIcon />} disabled={isSubmitForm}>
                                {langs.REFRESH}
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangePassWord;