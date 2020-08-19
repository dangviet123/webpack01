import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Divider, Icon, Grid } from '@material-ui/core';
import { Formik,Form,FastField, Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmTextFieldCheckApi from '../../../../helpers/FormFormik/FmTextFieldCheckApi';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225,TYPEEMAIL,USERNAMEUNIQUE,EMAILUNIQUE } from '../../../../constants/admincp/ValidateField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector,useDispatch } from 'react-redux';
import { ac_checkUserName, 
        ac_checkEmail, 
        ac_checkUserNameSuccess, 
        ac_checkEmailSuccess,
        ac_fetchListGroup
} from '../../../../actions/admincp/dataUsers/Users';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import * as langs from '../../../../constants/admincp/languages';
import FmAutocompleteMultiple from '../../../../helpers/FormFormik/FmAutocompleteMultiple';
function Add(props) {
    const dispath = useDispatch();
    const {checkUserName,checkEmail,ListGroupPermission} = useSelector(state => state.Users);
    useEffect(() => {
        dispath(ac_checkUserNameSuccess(true));
        dispath(ac_checkEmailSuccess(true));
        dispath(ac_fetchListGroup());
    },[dispath]);
    const LitsGender = [
        { title: langs.male, value: 1 },
        { title: langs.female, value: 2 }
    ];
    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
        username: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
        password: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
        email: Yup.string().email(TYPEEMAIL).required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
        gender: Yup.string().required(EMPTY_FIELD).nullable()
    });
    const initialValues = {
        full_name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        gender: 1,
        idGroups: [],
        Active: true,
    }
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => {
                    if(checkUserName === true && checkEmail === true){
                        props.addUsers(value);
                    }
                }}

                validationSchema={validationSchema}
            >
                {({values,handleSubmit,handleBlur,handleChange
                    }) => (
                    <Form onSubmit={handleSubmit} onBlur={handleBlur} onChange={handleChange} >
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <FastField  name="full_name"  label={langs.user_name} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField error={['Users', 'checkUserName']} message={USERNAMEUNIQUE}  name="username"
                                        label={langs.account} 
                                        onBlur={e => {
                                            dispath(ac_checkUserName(e.target.value,0));
                                        }}
                                        component={FmTextFieldCheckApi} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="password"  label={langs.password} type="password"  component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="email"  label={langs.email_address}  error={['Users', 'checkEmail']} message={EMAILUNIQUE}
                                        onBlur={e => {
                                            dispath(ac_checkEmail(e.target.value,0));
                                        }}
                                        
                                    component={FmTextFieldCheckApi} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="phone"  label={langs.phone} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField  
                                        component={FmAutocomplete}
                                        name="gender"
                                        options={LitsGender}
                                        
                                        label={langs.sex}
                                        fullWidth  size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={FmAutocompleteMultiple}
                                        name="idGroups"
                                        options={ListGroupPermission}
                                        
                                        label={langs.group_permission}
                                        fullWidth  size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="Active"  label={langs.activate} component={FmSwitchLabels} color="primary" checked={values.Active}  />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <Divider />
                        <DialogActions>
                            <Button color="primary" type="submit" variant="contained" startIcon={!isSubmitForm ?<CheckIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disableElevation={isSubmitForm}>
                                {langs.SAVES}
                            </Button>
                            <Button  color="secondary" type="reset" variant="contained" startIcon={<CloseIcon />} disabled={isSubmitForm}>
                                {langs.REFRESH}
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Add;
