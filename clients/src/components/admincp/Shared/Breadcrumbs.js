import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";
function Renderbreadcrumbs(props) {
    const {listBrc} =  props;
    const renderBread = () => {
        let xhtml = null;
        xhtml = listBrc.map((list,index) => {
            if (list.link === '') {
                if (index === (listBrc.length-1)) {
                    return (<Typography color="textPrimary"  key={index}>{list.name}</Typography>);
                }else{
                    return (<Typography color="inherit" key={index}>{list.name}</Typography>);
                }
            }else{
                return (<Link to={list.link} key={index}>{list.name}</Link>);
            }
        });
        return xhtml;
    }
    return (
        <div className="breadcrumb">
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/admincp" style={{color: 'rgba(0, 0, 0, 0.54)'}} >
                    <HomeIcon />
                    Trang chủ
                </Link>
                {renderBread()}
            </Breadcrumbs>
        </div>
    );
}
export default Renderbreadcrumbs;