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
    Area: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    OrderBy: Yup.number().required(EMPTY_FIELD).positive(POSITIVE).integer(INTEGER)
});
function UpdateArea(props) {
    const {listEdit,editArea} = props;
    const {Active,OrderBy,Area,Description,idArea,latitude,longitude} = listEdit;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const handleEditArea = value => {
        editArea(idArea,value);
    };
    return (
        <div>
            <Formik
                initialValues={{ 
                    Area: Area,
                    Description: Description===null ? '' : Description,
                    latitude: latitude===null ? '' : latitude,
                    longitude: longitude===null ? '' : longitude,
                    Active: Active===1 ? true : false,
                    OrderBy: OrderBy}}
                onSubmit={(value) => handleEditArea(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <FastField name="Area"  label={langs.title} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="longitude"  label={langs.longitude} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="latitude"  label={langs.latitude} component={FmTextField} fullWidth margin="dense" size="small"  />
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
                            </Grid>
                        </DialogContent>
                        <Divider />
                        <DialogActions>
                            <Button color="primary" type="submit" variant="contained" startIcon={!isSubmitForm ?<CheckIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disabled={isSubmitForm}>
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
export default UpdateArea;
