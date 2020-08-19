import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Divider, Icon, Grid } from '@material-ui/core';
import { Formik,Form,FastField,Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225 } from '../../../../constants/admincp/ValidateField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
const validationSchema = Yup.object().shape({
    GroupTitle: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    idMenu: Yup.string().required(EMPTY_FIELD)
});

function UpdateGroupTitle(props) {
    const {listEdit,editGroupTitle} = props;
    const {ListCategory} = useSelector(state => state.ListMenu);
    const {Active,GroupTitle,Description,idGroupTitle,LinkRequest,idMenu} = listEdit;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const handleEditGroupTitle = value => {
        editGroupTitle(idGroupTitle,value);
    };
    const initialValues = { 
        GroupTitle: GroupTitle ? GroupTitle: '',
        Description: Description ? Description : '',
        LinkRequest: LinkRequest ? LinkRequest : '',
        Active: Active===1 ? true : false,
        idMenu: idMenu ? idMenu : ''

    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => handleEditGroupTitle(value)}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <FastField name="GroupTitle"  label={langs.group_title} component={FmTextField} fullWidth margin="dense" size="small"  />
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
                                    <FastField name="LinkRequest"  label={langs.link_redirect} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="Description"  label={langs.description} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
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
export default UpdateGroupTitle;
