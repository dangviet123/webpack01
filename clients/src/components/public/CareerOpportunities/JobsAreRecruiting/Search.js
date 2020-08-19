import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Icon } from '@material-ui/core';
import { Formik,Form,Field } from 'formik'; // thư viện quản lý form
import FmTextField from '../../../../helpers/FormFormik/FmTextField';
import FmAutocomplete from '../../../../helpers/FormFormik/FmAutocomplete';
import { useLocation,useHistory } from 'react-router-dom';
import * as langs from '../../../../constants/admincp/languages';
import qs from 'query-string';
import SearchIcon from '@material-ui/icons/Search';
function Search(props) {
    const {ListArea,ListVacancies} = props;
    const history = useHistory();
    const location = useLocation();

    const queryString = qs.parseUrl(location.search);
    const {query} = queryString;
    const initialValues = {
        idArea: query.idArea ? parseInt(query.idArea) : null,
        idVacancies: query.idVacancies ? parseInt(query.idVacancies) : null,
        Recruit: query.Recruit ? query.Recruit : "",
    }
    const handleGetvalue = values => {
        const ojSearch = {...values};
        Object.keys(ojSearch).forEach(key => {
            if (ojSearch[key] === null || ojSearch[key] === "") {
                delete ojSearch[key];
            }
        });
        history.push(location.pathname+'?'+qs.stringify(ojSearch));
    }


    return (
            <div className="panel_serach" style={{paddingBottom: 25}}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values,{ setSubmitting }) => {
                        handleGetvalue(values);
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({values,handleSubmit,isSubmitting
                        }) => (
                        <Form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Field  
                                            component={FmAutocomplete}
                                            name="idArea"
                                            options={ListArea}
                                            variant="standard"
                                            label={`Địa Điểm`}
                                            fullWidth 
                                            disabled={isSubmitting}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Field  
                                            component={FmAutocomplete}
                                            name="idVacancies"
                                            options={ListVacancies}
                                            variant="standard"
                                            label={`Cấp Bậc`}
                                            fullWidth
                                            disabled={isSubmitting}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Field name="Recruit" disabled={isSubmitting}  label={langs.title} component={FmTextField} fullWidth  variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2}>
                                        <Button 
                                            type="submit"
                                            startIcon={!isSubmitting ?<SearchIcon /> : <Icon color="inherit" className="fa fa-circle-o-notch fa-spin" />} disableElevation={isSubmitting}
                                            style={{marginTop: 10}} 
                                            variant="contained" 
                                            color="primary" fullWidth>
                                            TÌM KIẾM
                                        </Button>
                                    </Grid>
                                </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
    )
}

export default Search;

