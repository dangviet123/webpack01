import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AutorenewIcon from '@material-ui/icons/Close';
import * as Yup from 'yup';
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import { Formik,Form,FastField } from 'formik'; // thư viện quản lý form
import { EMPTY_FIELD,MIN3,MAX225,TYPEEMAIL } from '../../../../constants/admincp/ValidateField';
import * as langs from '../../../../constants/admincp/languages';
import { useSelector } from 'react-redux';
import { Icon } from '@material-ui/core';
const validationSchema = Yup.object().shape({
    Support: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    FullName: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Email: Yup.string().email(TYPEEMAIL).required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Phone: Yup.string().required(EMPTY_FIELD)
});

const initialValues = {
    FullName: '',
    Email: '',
    Support: '',
    Phone: '',
    Content: ''
};
function FormContact(props) {
    const {addContact} = props;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const handleAddContact = (value) => {
        if (isSubmitForm === false) {
            addContact(value);
        }
    }
    return (
        <Card  variant="outlined" style={{position: 'relative',overflow: 'inherit'}}>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => handleAddContact(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <CardContent>
                            <div className="textFieldInput" >
                                <FastField name="Support" disabled={isSubmitForm} label={langs.title} component={FmTextField} fullWidth margin="dense"   />
                            </div>
                            <div className="textFieldInput" >
                                <FastField name="FullName" disabled={isSubmitForm}  label={langs.full_name} component={FmTextField} fullWidth margin="dense"   />
                            </div>
                            <div className="textFieldInput">
                                <FastField name="Email" disabled={isSubmitForm} label={langs.email_address} component={FmTextField} fullWidth margin="dense"   />
                            </div>
                            <div className="textFieldInput">
                                <FastField name="Phone" disabled={isSubmitForm} label={langs.phone} component={FmTextField} fullWidth margin="dense"   />
                            </div>
                            <div className="textFieldInput">
                                <FastField name="Content" disabled={isSubmitForm} multiline rows={3}  label={langs.content} component={FmTextField} fullWidth margin="dense"  />
                            </div>
                        </CardContent>
                        <CardActions style={{padding: 15}}>
                            <Button variant="contained" type="submit" color="primary" endIcon={!isSubmitForm ?<SendIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disableElevation={isSubmitForm} fullWidth> GỬI LIÊN HỆ </Button>
                            <Button variant="contained" color="secondary" type="reset" startIcon={<AutorenewIcon />} fullWidth  disableElevation={isSubmitForm} >LÀM MỚI</Button>
                        </CardActions>
                    </Form>
                    )}
                </Formik>
        </Card>
    )
}
export default FormContact;
