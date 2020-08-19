import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Divider, Icon, Grid } from '@material-ui/core';
import { Formik,Form,FastField } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmSwitchLabels from '../../../../helpers/FormFormik/FmSwitchLabels';
import * as Yup from 'yup';
import { EMPTY_FIELD,MIN3,MAX225,POSITIVE,INTEGER } from '../../../../constants/admincp/ValidateField';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
const validationSchema = Yup.object().shape({
    ListPermissionName: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    OrderBy: Yup.number().required(EMPTY_FIELD).positive(POSITIVE).integer(INTEGER)
});
function UpdateListPermission(props) {
    const {listEdit,editListPermission} = props;
    const {Active,OrderBy,ListPermissionName,Description,idListPermission} = listEdit;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const handleEditListPermission = value => {
        editListPermission(idListPermission,value);
    };
    return (
        <div>
            <Formik
                initialValues={{ 
                    ListPermissionName: ListPermissionName,
                    Description: Description===null ? '' : Description,
                    Icon: listEdit.Icon===null ? '' : listEdit.Icon,
                    Active: Active===1 ? true : false,
                    OrderBy: OrderBy}}
                onSubmit={(value) => handleEditListPermission(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <FastField name="ListPermissionName"  label={langs.list_premission_name} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="Description"  label={langs.description} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="Icon"  label={langs.icon} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="OrderBy"  label={langs.order_by} component={FmTextField} type="number" fullWidth margin="dense" size="small"   />
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
export default UpdateListPermission;
