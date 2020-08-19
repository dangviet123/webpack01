import React from 'react';
import Button from '@material-ui/core/Button';
import { Divider, Icon, Grid, makeStyles } from '@material-ui/core';
import { Formik,Form,FastField, Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225 } from '../../../../constants/admincp/ValidateField';
import * as langs from '../../../../constants/admincp/languages';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import FmUploadFile from '../../../../helpers/FormFormik/FmUploadFile';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CKEditor from 'ckeditor4-react';
const useStyles = makeStyles(() => ({
    box_img: {
        border: '1px solid #dee2e6',
        padding: 4,
        width: 210,
        borderRadius: 5
    },
    image_s: {
        width: 200,
        height: 100,
        cursor: 'pointer',
        borderRadius: 5
    },
    listSlide: {
        display: 'flex',
        flexFlow: 'wrap',
        '&>div': {
            marginRight: 15,
            marginBottom: 15
        }
    }
    
}));
const validationSchema = Yup.object().shape({
    PostsTitle: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    idMenu: Yup.string().nullable().required(EMPTY_FIELD),
    Image: Yup.string().nullable().required(EMPTY_FIELD),
    idGroupTitle: Yup.string().nullable()
});
function Add(props) {
    const {handleShowAddSlide,addPosts,isSubmitForm,ListCategory,ListGroupTitle} = props;
    const classes = useStyles();

    const initialValues = {
        PostsTitle: '',
        Description: '',
        idMenu: '',
        idGroupTitle: '',
        Image: '',
        Content: '',
        LinkYoutube: '',
        ImageSlide: [],
        Active: true,
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => addPosts(value)}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({values,handleSubmit,setFieldValue
                    }) => (
                    <Form onSubmit={handleSubmit} >
                            <div className="content_add_new">
                                <Grid container spacing={3} >
                                    <Grid item xs={12} md={6}>
                                        <FastField name="PostsTitle"  label={langs.title} component={FmTextField} fullWidth  size="small"  />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        
                                        <Field
                                            component={FmAutocomplete}
                                            name="idMenu"
                                            options={ListCategory}
                                            margin="dense"
                                            label={langs.category}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField name="LinkYoutube"  label={`Link Youtube`} component={FmTextField} fullWidth margin="dense" size="small"  />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField name="Description"  label={langs.description} component={FmTextField} fullWidth margin="dense" size="small"  />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            component={FmAutocomplete}
                                            name="idGroupTitle"
                                            options={ListGroupTitle}
                                            margin="dense"
                                            label={langs.group_title}
                                            fullWidth  size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FastField name="Active"  label={langs.status} component={FmSwitchLabels} color="primary" checked={values.Active}  />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
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
                                        {values.Image !== '' ? <div className={classes.box_img}>
                                            <img className={classes.image_s} src={values.Image} alt={values.PostsTitle} />
                                        </div> : ''}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button 
                                            style={{textTransform: 'capitalize',backgroundColor: 'blueviolet'}}
                                            variant="contained" 
                                            color="secondary" 
                                            component="span" 
                                            startIcon={<CloudUploadIcon />}
                                            onClick={handleShowAddSlide}
                                        >
                                            {langs.add_image_slide}
                                        </Button>
                                    </Grid>

                                    <Grid item xs={12} md={12}>
                                        <div className={`ckeditor`}>

                                        </div>
                                        <CKEditor
                                            data={values.Content}
                                            onChange={evt => setFieldValue('Content',evt.editor.getData())}
                                            config={{
                                                allowedContent : true
                                            }}
                                            onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        <Divider />
                        <div className="content_add_button">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button color="primary" type="submit" className="mr-15" variant="contained" startIcon={!isSubmitForm ?<CheckIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disabled={isSubmitForm}>
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
