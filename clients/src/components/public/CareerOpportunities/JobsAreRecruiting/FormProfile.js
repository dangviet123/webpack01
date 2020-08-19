import React from 'react';
import { Card, CardContent, Grid, Typography,  Button, CardActions, Icon } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AutorenewIcon from '@material-ui/icons/Close';
import * as langs from '../../../../constants/admincp/languages';
import * as Yup from 'yup';
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import { Formik,Form,Field } from 'formik'; // thư viện quản lý form
import { EMPTY_FIELD,MIN3,MAX225,TYPEEMAIL } from '../../../../constants/admincp/ValidateField';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import FmKeyboardDatePicker from '../../../../helpers/FormFormik/FmKeyboardDatePicker';
import FmUploadProfile from '../../../../helpers/FormFormik/FmUploadProfile';
import { useSelector } from 'react-redux';
const validationSchema = Yup.object().shape({
    Profile: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    FullName: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Email: Yup.string().email(TYPEEMAIL).required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    DateBirthDay: Yup.date().nullable().required(EMPTY_FIELD).typeError('Không đúng định dạng'),
    idGender: Yup.string().nullable().required(EMPTY_FIELD),
    idMarriage: Yup.string().nullable().required(EMPTY_FIELD),
    Permanent: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    CurrentPlace: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Education: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Phone: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    DesiredWork: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    YearsExperience: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Salary: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    FileName: Yup.string().required(EMPTY_FIELD)
});


function FormProfile(props) {
    const {handleAddProfile,idRecruit} = props;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const LitsSex = [
        { title: langs.male, value: 1 },
        { title: langs.female, value: 2 }
    ];

    const LitsMarriage = [
        { title: langs.alone, value: 1 },
        { title: langs.married, value: 2 }
    ];
    const initialValues = {
        Profile: '',
        FullName: '',
        Email: '',
        DateBirthDay: null,
        idGender: 1,
        idMarriage: 1,
        Permanent: '',
        CurrentPlace: '',
        Education: '',
        idRecruit: idRecruit,
        Phone: '',
        DesiredWork: '',
        YearsExperience: '',
        Salary: '',
        Notes: '',
        FileName: ''
    };

    const addProfile = value => {
        if (isSubmitForm === false) {
            handleAddProfile(value);
        }
    }
    return (
        <div className="form_profile">
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => addProfile(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <Card >
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid  item xs={12} sm={6} >
                                        <Typography variant="h5" component="h3" style={{color: '#dc3545',textAlign: 'center',background: '#e9ecef',padding: 5}}>
                                            THÔNG TIN CƠ BẢN
                                        </Typography>

                                        <div className="textFieldInput" >
                                            <Field name="FullName" disabled={isSubmitForm} label={`Họ Và Tên`}  component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput" >
                                            <Field name="Email" disabled={isSubmitForm} label={`Email`}  component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field  
                                                component={FmKeyboardDatePicker}
                                                autoOk
                                                name="DateBirthDay"
                                                disableToolbar
                                                inputVariant="standard"
                                                variant="inline"
                                                format="DD-MM-YYYY"
                                                label={`Ngày sinh`}
                                                fullWidth
                                                
                                            />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field  
                                                component={FmAutocomplete}
                                                name="idGender"
                                                options={LitsSex}
                                                variant="standard"
                                                label={langs.sex}
                                                fullWidth 
                                                
                                            />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field
                                                component={FmAutocomplete}
                                                name="idMarriage"
                                                options={LitsMarriage}
                                                variant="standard"
                                                label={langs.marriage}
                                                fullWidth
                                                
                                            />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field name="Permanent" disabled={isSubmitForm} label={`Hộ khẩu thường trú`} component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field name="Phone" disabled={isSubmitForm} label={`Điện thoại liên hệ`}  component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field name="CurrentPlace" disabled={isSubmitForm} label={`Nơi ở hiện tại`}  component={FmTextField} fullWidth   />
                                        </div>
                                        
                                    </Grid>

                                    <Grid  item xs={12} sm={6}>
                                        <Typography variant="h5" component="h3" style={{color: '#006ab6',textAlign: 'center',background: '#e9ecef',padding: 5}} >
                                            THÔNG TIN CHUNG
                                        </Typography>
                                        <div className="textFieldInput">
                                            <Field name="Profile" disabled={isSubmitForm} label={`Tiêu đề hồ sơ`}  component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field name="DesiredWork" disabled={isSubmitForm} label={`Địa điểm làm việc mong muốn`}  component={FmTextField} fullWidth   />
                                        </div>
                                        
                                        <div className="textFieldInput">
                                            <Field name="Education" disabled={isSubmitForm} label={`Trình độ cao nhất`}  component={FmTextField} fullWidth   />
                                        </div>
                                        
                                        <div className="textFieldInput">
                                            <Field name="YearsExperience" disabled={isSubmitForm} label={`Số năm kinh nghiệm`}  component={FmTextField} fullWidth   />
                                            
                                        </div>
                                        <div className="textFieldInput">
                                            <Field name="Salary" disabled={isSubmitForm} label={`Mức lương mong muốn`}  component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput">
                                            <Field name="Notes" multiline rows={4} disabled={isSubmitForm} label={`Ghi chú`}  component={FmTextField} fullWidth   />
                                        </div>
                                        <div className="textFieldInput">
                                            <div>Chỉ chấp nhận file với định dạng (docx,pdf)</div>
                                            <div className="file-upload-result">
                                                <Field name="FileName" label={`CV đính kèm`} type="file" component={FmUploadProfile}   />
                                                <span style={{
                                                    marginLeft: 10,
                                                    color: '#0b6aaf',
                                                    cursor:'pointer'}}>
                                                    {values.FileName !== '' ? values.FileName.name : ''}</span>
                                            </div>
                                            
                                        </div>
                                        
                                    </Grid>
                                </Grid>
                                
                            </CardContent>
                            <CardActions style={{padding: 15}}>
                                
                                <Button type="submit" variant="contained" color="primary" 
                                endIcon={!isSubmitForm ?<SendIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disableElevation={isSubmitForm}  
                                >GỬI THÔNG TIN</Button>
                                <Button type="reset" variant="contained" startIcon={<AutorenewIcon />} disableElevation={isSubmitForm} >LÀM MỚI</Button>
                            </CardActions>
                        </Card>
                    </Form>
                    )}
                </Formik>
        </div>
    )
}

export default FormProfile;


