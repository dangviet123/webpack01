import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles} from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useHistory} from 'react-router-dom';
const useStyles = makeStyles(() => ({
    bt_home: {
        color: 'white',
        padding: 4
    },
    link_rdc: {
        cursor: 'pointer',
        '& span:hover': {
            textDecoration: 'underline'
        }
    },
    home_icon: {
        fontSize: 17
    }
}));
function Breadcrumb(props) {
    const {list_prc} = props;
    const classes = useStyles();
    const history = useHistory();
    const handleRedirect = (patch) => {
        history.push(patch);
    }

    const renderCrumb = () => {
        let xhtml = null;
        xhtml = list_prc.map((crumb,index) => {
            if (crumb.Active === 0) {
                return (
                    <li className={classes.link_rdc} key={index} onClick={() => handleRedirect(crumb.Slug)} style={{textTransform: 'uppercase'}}>
                        <NavigateNextIcon fontSize="small" />
                        <span>{crumb.Name}</span>
                    </li>
                )
            }else {
                return (
                    <li key={index} style={{textTransform: 'uppercase'}}>
                        <NavigateNextIcon fontSize="small" />
                        <span>{crumb.Name}</span>
                    </li>
                )
            }
        })
        return xhtml;
    }

    return (
        <section className="phanam-breadcrumb-1">
            <div className="main-breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className={classes.link_rdc}>
                            <IconButton className={classes.bt_home} onClick={() => handleRedirect("/")} >
                                <HomeIcon className={classes.home_icon} />
                            </IconButton>
                        </li>
                        {renderCrumb()}
                    </ol>
                </div>
            </div>
        </section>
    )
}
export default Breadcrumb;