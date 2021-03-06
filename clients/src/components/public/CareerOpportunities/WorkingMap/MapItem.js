import React from 'react';
import { Tooltip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    map_item: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        position: 'relative',
        border: '4px solid #006ab6',
        transition: '.5s all ease-in-out',
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)',
        '&:hover': {
            border: '4px solid green',
        }
    },
    image: {
        marginLeft: 1,
        marginTop: 1
    }
}));
function MapItem(props) {
    const classes = useStyles();
    return (
        <div>
            <Tooltip title={props.text} placement="top"   arrow>
                <div className={classes.map_item}>
                    <img className={classes.image} width={22} src={`asset/img/logo192.png`} alt={`phanam`} />
                </div>
            </Tooltip>
            
        </div>
    )
}
export default MapItem;
