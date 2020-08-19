import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Divider, Icon, Grid } from '@material-ui/core';
import { Formik,Form,FastField, Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225,SLUGUNIQUE } from '../../../../constants/admincp/ValidateField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector,useDispatch } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import FmTextFieldCheckApi from '../../../../helpers/FormFormik/FmTextFieldCheckApi';
import {ac_checkSlug,ac_getListCategory, ac_checkSlugSuccess}  from '../../../../actions/admincp/bgdata/MenuType';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
const validationSchema = Yup.object().shape({
    MenuName: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Slug: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    id_parent: Yup.number().nullable()
});

function ListMenuEdit(props) {
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListCategory} = useSelector(state => state.ListMenu);
    const {idTypeMenu,editMenu,item} = props;
    const dispath = useDispatch();
    useEffect(() => {
        dispath(ac_checkSlugSuccess(true));
        dispath(ac_getListCategory(idTypeMenu));
    }, [idTypeMenu,dispath]);

    const initialValues = {
        idTypeMenu: idTypeMenu,
        idMenu: item.idMenu,
        MenuName: item.MenuName,
        id_parent: item.id_parent > 0 ? item.id_parent : '',
        Description: item.Description ? item.Description : '',
        Slug: item.Slug,
        Target: item.Target ? item.Target : '',
        Link: item.Link ? item.Link : '',
        Icon: item.Icon ? item.Icon : '',
        Active: item.Active === 1 ? true : false
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => editMenu(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit,handleBlur,handleChange
                    }) => (
                    <Form onSubmit={handleSubmit} onBlur={handleBlur} onChange={handleChange}>
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={3} >
                                <Grid item xs={12}>
                                    <FastField name="MenuName"  label={langs.name_menu} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field 
                                        component={FmAutocomplete}
                                        name="id_parent"
                                        options={ListCategory}
                                        
                                        label={langs.parent_category}
                                        fullWidth  size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                
                                <Field error={['ListMenu', 'checkSlug']} message={SLUGUNIQUE}  name="Slug"
                                    
                                    label={`Slug`}
                                    onBlur={e => {
                                        dispath(ac_checkSlug(e.target.value,item.idMenu,idTypeMenu,values.id_parent));
                                    }}
                                    component={FmTextFieldCheckApi} fullWidth margin="dense" size="small"  />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <FastField name="Description"  label={langs.description} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Target"   label="Target" component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Link"  label={langs.link} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Icon"  label={langs.icon} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Active"  label={langs.status} component={FmSwitchLabels} color="primary" checked={values.Active}  />
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

export default ListMenuEdit;
