import React,{useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';
import { useLocation,useHistory } from 'react-router-dom';
import qs from 'query-string';
import * as langs from '../../../constants/admincp/languages';
import {limit_pn} from '../../../constants/admincp/config';
function PaginationCustom(props) {
    const history = useHistory();
    const location = useLocation();
    const { count,total,current_page,last_page,namepage,handleSetLimitLoad } = props;
    const handleChangePage = (event,value) => {
        const queryString = qs.parseUrl(location.search);
        const {query} = queryString;
        const newQuery = {...query,page: value};
        history.push(location.pathname+'?'+qs.stringify(newQuery));
    };
    const limitdf = sessionStorage.getItem("limit_pn") !== null ? sessionStorage.getItem("limit_pn") : limit_pn;
    const [limit, setLimit] = useState(limitdf);
    const handleSetLimit = e => {
        const value = parseInt(e.target.value);
        sessionStorage.setItem('limit_pn', value);
        setLimit(value);
        handleSetLimitLoad();
    }


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
                <Grid item xs={12} sm={6}>
                    {renderPagination()}    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="paginationRight">
                        Xem <select onChange={handleSetLimit} className="input_limit" value={limit} >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={40}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select> {langs.total_number} : <strong>{total} </strong> {namepage}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default PaginationCustom;
