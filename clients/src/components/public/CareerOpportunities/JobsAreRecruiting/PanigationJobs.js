import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';
import { useLocation,useHistory } from 'react-router-dom';
import qs from 'query-string';
function PanigationJobs(props) {
    const history = useHistory();
    const location = useLocation();
    const { count,current_page,last_page} = props;
    const handleChangePage = (event,value) => {
        const queryString = qs.parseUrl(location.search);
        const {query} = queryString;
        const newQuery = {...query,page: value};
        history.push(location.pathname+'?'+qs.stringify(newQuery));
    };


    const renderPagination = () => {
        let pagin = "";
        if (last_page > 1) {
            pagin = (
                <Pagination count={count}
                    page={current_page}
                    onChange={handleChangePage}
                    size="small"
                    color="primary"
                />
            );
        }
        return pagin;
    }
    return (
        <div className="pagination">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    {renderPagination()}    
                </Grid>
            </Grid>
        </div>
    )
}
export default PanigationJobs;
