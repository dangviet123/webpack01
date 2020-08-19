import React from 'react';
import {link_breadcrumb} from '../../../../constants/admincp/config';
import { DialogContent } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    box_img: {
        border: '1px solid #c4c4c4',
        padding: 4,
        marginBottom: 15
    },
    
}));
function ViewImage(props) {
    const classes = useStyles();
    const {Image} = props;
    return (
        <div>
            <DialogContent>
                <div className={classes.box_img}>
                    <img src={`${link_breadcrumb}${Image}`} alt={``} style={{width: '100%'}} />
                </div>
            </DialogContent>
            
        </div>
    )
}

export default ViewImage;
