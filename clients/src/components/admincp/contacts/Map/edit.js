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
    Map: Yup.string().required(EMPTY_FIELD).min(3,MIN3).max(225,MAX225),
    Address: Yup.string().required(EMPTY_FIELD).min(3,MIN3),
    OrderBy: Yup.number().required(EMPTY_FIELD).positive(POSITIVE).integer(INTEGER)
});
function UpdateMap(props) {
    const {listEdit,editMap} = props;
    const {Active,OrderBy,Map,Description,idMap,Address,Phone,Link_ifarme,Latitude,Longitude,position_x,position_y,AreaCoords} = listEdit;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const handleEditMap = value => {
        if (isSubmitForm === false) {
            editMap(idMap,value);
        }
    };

    const initialValues = {
        Map: Map ? Map :'',
        Description: Description ? Description : '',
        Address: Address ? Address : '',
        Phone: Phone ? Phone : '',
        Link_ifarme: Link_ifarme ? Link_ifarme : '',
        Latitude: Latitude ? Latitude : '',
        Longitude: Longitude ? Longitude : '',
        position_x: position_x ? position_x : '',
        position_y: position_y ? position_y : '',
        AreaCoords: AreaCoords ? AreaCoords : '',
        Active: Active ===1 ? true : false,
        OrderBy: OrderBy ? OrderBy : 0 
    };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => handleEditMap(value)}
                validationSchema={validationSchema}
            >
                {({values,handleSubmit
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <DialogContent style={{overflow: 'hiden'}}>
                            <Grid container spacing={2} >
                            <Grid item xs={12}>
                                    <FastField name="Map"  label={langs.title} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="Address"  label={langs.address} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Phone"  label={langs.phone} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="AreaCoords"  label={langs.areas} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField name="Link_ifarme"  label={langs.link_ifarme} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Latitude"  label={langs.latitudes} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="Longitude"  label={langs.longitudes} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="position_x"  label={`${langs.position} X`} component={FmTextField} fullWidth margin="dense" size="small"  />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FastField name="position_y"  label={`${langs.position} Y`} component={FmTextField} fullWidth margin="dense" size="small"  />
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
export default UpdateMap;
