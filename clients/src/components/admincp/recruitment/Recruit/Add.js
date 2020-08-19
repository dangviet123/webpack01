import React from 'react';
import Button from '@material-ui/core/Button';
import { Divider, Icon, Grid } from '@material-ui/core';
import { Formik,Form,FastField, Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225 } from '../../../../constants/admincp/ValidateField';
import * as langs from '../../../../constants/admincp/languages';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import CKEditor from 'ckeditor4-react';
import FmKeyboardDatePicker from '../../../../helpers/FormFormik/FmKeyboardDatePicker';
const validationSchema = Yup.object().shape({
    Recruit: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    GroupArea: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Wage: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    idArea: Yup.string().nullable().required(EMPTY_FIELD),
    idVacancies: Yup.string().nullable().required(EMPTY_FIELD),
    Startday: Yup.date().required(EMPTY_FIELD),
    DateFinish: Yup.date().required(EMPTY_FIELD)
});
function Add(props) {
    const {addRecruit,isSubmitForm,ListArea,ListVacancies} = props;

    const initialValues = {
        Recruit: '',
        Wage: '',
        idArea: '',
        idVacancies: '',
        Content: '',
        GroupArea: '',
        Startday: new Date(),
        DateFinish: new Date(),
        Active: true,
    };

    const handleAddRecruit =(value) => {
        if (isSubmitForm === false) {
            addRecruit(value);
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => handleAddRecruit(value)}
                validationSchema={validationSchema}
                
                
            >
                {({values,handleSubmit,setFieldValue
                    }) => (
                    <Form onSubmit={handleSubmit} >
                            <div className="content_add_new">
                                <Grid container spacing={3} >
                                    <Grid item xs={12} md={6}>
                                        <FastField name="Recruit"  label={langs.title} component={FmTextField} fullWidth   size="small"  />
                                    </Grid>
                                    
                                    <Grid item xs={12} md={6}>
                                        <FastField name="GroupArea"  label={langs.job_posting_area} component={FmTextField} fullWidth  size="small"  />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField name="Wage"  label={langs.wage} component={FmTextField} fullWidth  size="small"  />
                                    </Grid>
                                    
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            component={FmAutocomplete}
                                            name="idVacancies"
                                            options={ListVacancies}
                                            label={langs.vacancies}
                                            fullWidth 
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField  
                                            component={FmKeyboardDatePicker}
                                            autoOk
                                            name="Startday"
                                            disableToolbar
                                            inputVariant="standard"
                                            variant="inline"
                                            format="DD-MM-YYYY"
                                            label={langs.date_from_recruit}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField  
                                            component={FmKeyboardDatePicker}
                                            autoOk
                                            name="DateFinish"
                                            disableToolbar
                                            inputVariant="standard"
                                            variant="inline"
                                            format="DD-MM-YYYY"
                                            label={langs.date_to_recruit}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            component={FmAutocomplete}
                                            name="idArea"
                                            options={ListArea}
                                            label={langs.company}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField  
                                            component={FmKeyboardDatePicker}
                                            autoOk
                                            name="DateAdd"
                                            disabled
                                            disableToolbar
                                            inputVariant="standard"
                                            variant="inline"
                                            format="DD-MM-YYYY"
                                            label={langs.date_create}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={12} md={6}>
                                        <FastField name="Active"  label={langs.status} component={FmSwitchLabels} color="primary" checked={values.Active}  />
                                    </Grid>

                                    <Grid item xs={12} md={12}>
                                        <div className={`ckeditor`}>
                                            {langs.content}
                                            <CKEditor
                                                config={{
                                                    removeButtons: 'Subscript,Superscript',
                                                    allowedContent : true
                                                }}
                                                data={values.Content}
                                                onChange={evt => setFieldValue('Content',evt.editor.getData())}
                                                onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                                            />
                                        </div>
                                        
                                    </Grid>
                                </Grid>
                            </div>
                        <Divider />
                        <div className="content_add_button">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button color="primary" type="submit" className="mr-15" variant="contained" startIcon={!isSubmitForm ?<CheckIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disableElevation={isSubmitForm}>
                                        {langs.SAVES}
                                    </Button>
                                    <Button  color="secondary" type="reset" variant="contained" startIcon={<CloseIcon />} disabled={isSubmitForm}>
                                        {langs.REFRESH}
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                        
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Add;
