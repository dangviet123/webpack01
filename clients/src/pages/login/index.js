import React,{ useEffect } from 'react';
import { Card, CardContent, Button, CardActions, Divider, Grid, Icon } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Block from '@material-ui/icons/Close';
import ArrowForward from '@material-ui/icons/ArrowForward';
import useStyles from './styles';
import { useHistory } from "react-router-dom";
import FmTextField from './../../helpers/FormFormik/FmTextField';
import { Formik,Form, Field } from 'formik'; // thư viện quản lý form
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225 } from '../../constants/admincp/ValidateField';
import { checkLogin } from '../../actions/login/login';
import { useDispatch,useSelector } from 'react-redux';
import * as langs from '../../constants/admincp/languages';
import logo from '../../images/logo.png';
const validationSchema = Yup.object().shape({
    username: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    password: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225)
});
function Login() {
    const {isSubmit} = useSelector(state => state.showSubmit);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    useEffect(() => {
        document.title = langs.login;
    });
    const locationHomePage = () => {
        history.push("/");
    }
    const locationResetPass = () => {
        history.push("/admincp/reset-password");
    }
    const submitForm = value => {
        if(isSubmit === false){
            dispatch(checkLogin(value));
        }
    }


    return (
        <div className={classes.wapperlogin} style={{backgroundColor: '#0b6aaf'}}>
            <div className={classes.wapper_lg}>
                <Card className={classes.card} variant="outlined">
                <Formik
                    initialValues={{ username: '', password: ''}}
                    onSubmit={(value) => submitForm(value)}
                    validationSchema={validationSchema}
                >
                    {({values,handleSubmit
                        }) => (
                        <Form onSubmit={handleSubmit}>
                            <CardContent>
                                <img className={classes.logoPn} onClick={locationHomePage} src={logo} alt="logo phanam" />
                                <div className={classes.titleLogin}><h5 >{langs.login}</h5></div>
                                <Grid container spacing={3} >
                                    <Grid item xs={12}>
                                        <Field name="username" disabled={isSubmit}   label={langs.account} component={FmTextField} fullWidth margin="dense"  
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field name="password" disabled={isSubmit}   label={langs.password} component={FmTextField} fullWidth margin="dense" type="password" autoComplete='off' 
                                        />
                                    </Grid>
                                </Grid>
                                
                                
                                
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="contained" color="primary" startIcon={!isSubmit ?<AccountCircle /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} fullWidth type="submit" >{langs.login}</Button>
                                <Button variant="contained"  endIcon={<Block />} fullWidth type="reset" disabled={isSubmit}>{langs.REFRESH}</Button>
                            </CardActions>
                        </Form>
                        )}
                    </Formik>
                    <div className={classes.forgotPass}>
                        <ArrowForward /> <span onClick={locationResetPass}>{langs.forgot_password} ?</span>
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

export default Login;
