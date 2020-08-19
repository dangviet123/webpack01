import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Icon, Divider,Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Formik,Form,FastField } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmKeyboardDatePicker from '../../../../helpers/FormFormik/FmKeyboardDatePicker';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import { useLocation,useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import qs from 'query-string';
import * as Yup from 'yup';
import moment from 'moment';
function Search(props) {
    const {ListArea,ListVacancies} = props;
    const history = useHistory();
    const location = useLocation();
    const {isSearch} = useSelector(state => state.showSearch);
    var validationSchema = Yup.object().shape({
        DateAddFrom: Yup.date().nullable(),
        DateAddTo: Yup.date().nullable(),
        Startday: Yup.date().nullable(),
        DateFinish: Yup.date().nullable()
    });
    const queryString = qs.parseUrl(location.search);
    const {query} = queryString;
    const initialValues = {
        Recruit: query.Recruit ? query.Recruit : "",
        Wage: query.Wage ? query.Wage : "",
        GroupArea: query.GroupArea ? query.GroupArea : "",
        Content: query.Content ? query.Content : "",
        UserAdd: query.UserAdd ? query.UserAdd : "",
        DateAddFrom: query.DateAddFrom ? query.DateAddFrom : null,
        DateAddTo: query.DateAddTo ? query.DateAddTo : null,
        Startday: query.Startday ? query.Startday : null,
        DateFinish: query.DateFinish ? query.DateFinish : null,
        Active: query.Active ? parseInt(query.Active) : null,
        idVacancies: query.idVacancies ? parseInt(query.idVacancies) : null,
        idArea: query.idArea ? parseInt(query.idArea) : null,
    }
    const handleGetvalue = values => {
        const ojSearch = {...values};
        Object.keys(ojSearch).forEach(key => {
            if (ojSearch[key] === null || ojSearch[key] === "") {
                delete ojSearch[key];
            }else{
                if (key === 'DateAddFrom' || key === 'DateAddTo' || key === 'Startday' || key === 'DateFinish') {
                    ojSearch[key] = moment(ojSearch[key]).format('YYYY-MM-DD');
                }
            }
        });
        history.push(location.pathname+'?'+qs.stringify(ojSearch));
        props.handleCloseSearch();
    }
    const LitsActive = [
        { title: langs.activate, value: 1 },
        { title: langs.inactive, value: 0 }
    ];
    return (
        <Collapse in={isSearch} timeout="auto" unmountOnExit >
            <div className="panel_serach">
                <div className="panel_serach_title">
                    <h6>{langs.FILTER}</h6>
                    <div style={{flexGrow: 1}}></div>
                    <IconButton aria-label="close" onClick={props.handleCloseSearch} >
                    <CloseIcon />
                </IconButton>
                </div>
                
                <Divider />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => handleGetvalue(values)}
                        validationSchema={validationSchema}
                    >
                        {({values,handleSubmit
                            }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="serach_content">
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField name="Recruit"  label={langs.title} component={FmTextField} fullWidth  size="small" variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField name="Wage"  label={langs.wage} component={FmTextField} fullWidth  size="small" variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField name="GroupArea"  label={langs.job_posting_area} component={FmTextField} fullWidth  size="small" variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField name="Content"  label={langs.job_posting_area} component={FmTextField} fullWidth  size="small" variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField  
                                                component={FmAutocomplete}
                                                name="idVacancies"
                                                options={ListVacancies}
                                                variant="standard"
                                                label={langs.vacancies}
                                                fullWidth  size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField  
                                                component={FmAutocomplete}
                                                name="idArea"
                                                options={ListArea}
                                                variant="standard"
                                                label={langs.company}
                                                fullWidth  size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
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
                                        <Grid item xs={12} sm={6} lg={4}>
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
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField name="UserAdd"  label={langs.user_create} component={FmTextField} fullWidth  size="small" variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField  
                                                component={FmKeyboardDatePicker}
                                                autoOk
                                                name="DateAddFrom"
                                                disableToolbar
                                                inputVariant="standard"
                                                variant="inline"
                                                format="DD-MM-YYYY"
                                                label={langs.date_create_from}
                                                fullWidth  size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField  
                                                component={FmKeyboardDatePicker}
                                                autoOk
                                                name="DateAddTo"
                                                disableToolbar
                                                inputVariant="standard"
                                                variant="inline"
                                                format="DD-MM-YYYY"
                                                label={langs.date_create_to}
                                                fullWidth  size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={4}>
                                            <FastField  
                                                component={FmAutocomplete}
                                                name="Active"
                                                options={LitsActive}
                                                variant="standard"
                                                label={langs.status}
                                                fullWidth  size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <div className="serach_content_bottom">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="mr-10"
                                        size="small"
                                        type="submit"
                                        startIcon={<Icon fontSize="small">local_bar</Icon>}
                                    >{langs.search}</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
            </div>
        </Collapse>
    )
}

export default Search;

