import React from 'react';
import Button from '@material-ui/core/Button';
import { Divider, Icon, Grid, makeStyles } from '@material-ui/core';
import { Formik,Form,FastField, Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225,POSITIVE,INTEGER } from '../../../../constants/admincp/ValidateField';
import * as langs from '../../../../constants/admincp/languages';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import FmUploadFile from '../../../../helpers/FormFormik/FmUploadFile';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {link_home} from '../../../../constants/admincp/config';
const useStyles = makeStyles(() => ({
    box_img: {
        border: '1px solid #c4c4c4',
        padding: 4,
        width: 60
    },
    image_s: {
        width: 50,
        height: 50
    }
    
}));
const validationSchema = Yup.object().shape({
    StepsTitle: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    idMenu: Yup.string().nullable().required(EMPTY_FIELD),
    Image: Yup.string().nullable().required(EMPTY_FIELD),
    OrderBy: Yup.number().required(EMPTY_FIELD).positive(POSITIVE).integer(INTEGER)
});

function Edit(props) {
    const classes = useStyles();
    
    const {edit,ListCategory,isSubmitForm} = props;

    
    const initialValues = {
        StepsTitle: edit.StepsTitle ? edit.StepsTitle : '',
        Description: edit.Description ? edit.Description : '',
        idMenu: edit.idMenu ? edit.idMenu : '',
        Image: edit.Image ? edit.Image : '',
        Image_ol: edit.Image,
        OrderBy: edit.OrderBy ? edit.OrderBy : '',
        Active: edit.Active===1 ? true : false,
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => props.editSteps(value)}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({values,handleSubmit,setFieldValue
                    }) => (
                    <Form onSubmit={handleSubmit} >
                            <div className="content_add_new">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <FastField name="StepsTitle"  label={langs.title} component={FmTextField} fullWidth margin="dense" size="small"  />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            component={FmAutocomplete}
                                            name="idMenu"
                                            options={ListCategory}
                                            
                                            label={langs.category}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FastField name="Description"  label={langs.description} component={FmTextField} fullWidth margin="dense" size="small"  />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FastField name="OrderBy"  label={langs.order_by} component={FmTextField} type="number" fullWidth margin="dense" size="small"   />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FastField name="Active"  label={langs.status} component={FmSwitchLabels} color="primary" checked={values.Active}  />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{position: 'relative'}}>
                                            <Field 
                                                name="Image" 
                                                accept="image/*" 
                                                type="file"  
                                                label={langs.add_image} 
                                                component={FmUploadFile} 
                                                
                                            />
                                            <Button 
                                                style={{position: 'absolute',top: 0,left: 130,textTransform: 'capitalize'}}
                                                variant="contained" 
                                                color="secondary" 
                                                component="span" 
                                                startIcon={<DeleteOutlineIcon />}
                                                onClick={() => {
                                                    setFieldValue('Image','')
                                                }}
                                            >
                                                {langs.deleted}
                                            </Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {
                                            values.Image !== '' ? <div className={classes.box_img}>
                                                <img className={classes.image_s} src={values.Image !== values.Image_ol ? values.Image : `${link_home}/thumb/${values.Image_ol}`} alt={``} />
                                            </div> : ''

                                        }
                    
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

export default Edit;
