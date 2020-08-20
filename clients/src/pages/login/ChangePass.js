import React,{ useEffect } from 'react';
import { Card, CardContent, Button, CardActions, Divider, Grid, Icon } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Block from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
import useStyles from './styles';
import { useHistory } from "react-router-dom";
import FmTextField from './../../helpers/FormFormik/FmTextField';
import { Formik,Form,Field } from 'formik'; // thư viện quản lý form
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225 } from '../../constants/admincp/ValidateField';
import { checkChangePass,checkTokenChangePasss } from '../../actions/login/login';
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import * as langs from '../../constants/admincp/languages';
import logo from '../../images/logo.png';
const validationSchema = Yup.object().shape({
    password: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    password_confirmation: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225).oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không đúng')
});
function ChangePass() {
    const { token } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const {isSubmit} = useSelector(state => state.showSubmit);
    useEffect(() => {
        document.title = langs.change_the_password;
    });

    useEffect(() => {
        dispatch(checkTokenChangePasss(token));
    },[dispatch,token]);
    
    const locationHomePage = () => {
        history.push("/");
    }
    const locationLogin = () => {
        history.push("/admincp/login");
    }
    const submitForm = value => {
        dispatch(checkChangePass({...value,token}));
    }

    return (
        <div className={classes.wapperlogin} style={{backgroundColor: '#0b6aaf'}}>
            <div className={classes.wapper_lg}>
                <Card className={classes.card} variant="outlined">
                <Formik
                    initialValues={{ password: '',password_confirmation: ''}}
                    onSubmit={(value) => submitForm(value)}
                    validationSchema={validationSchema}
                >
                    {({values,handleSubmit
                        }) => (
                        <Form onSubmit={handleSubmit}>
                            <CardContent>
                                <img className={classes.logoPn} onClick={locationHomePage} src={logo} alt="logo phanam" />
                                <div className={classes.titleLogin}><h5 >{langs.change_the_password}</h5></div>
                                <Grid container spacing={3} >
                                    <Grid item xs={12}>
                                        <Field name="password" disabled={isSubmit}   label={langs.new_password} component={FmTextField} fullWidth margin="dense" type="password" autoComplete='off'  
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field name="password_confirmation" disabled={isSubmit}   label={langs.confirm_password} component={FmTextField} fullWidth margin="dense" type="password" autoComplete='off'
                                        />
                                    </Grid>
                                </Grid>
                                
                                
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="contained" color="primary" startIcon={!isSubmit ?<Check /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} fullWidth type="submit" >{langs.change}</Button>
                                <Button variant="contained" endIcon={<Block />} disabled={isSubmit} fullWidth type="reset">{langs.REFRESH}</Button>
                            </CardActions>
                        </Form>
                        )}
                    </Formik>
                    <div className={classes.forgotPass}>
                        <ArrowForward /> <span onClick={locationLogin}>{langs.return_to_the_login_page} ?</span>
                    </div>
                    <Divider />
                    <div className={classes.license}>
                        <div>Bản Quyền Thuộc Về © <strong>PHA NAM</strong> 2020</div>
                        <div>Lập Trình Hệ Thống <strong>TEAM IT SOFTWARE</strong></div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default ChangePass;

