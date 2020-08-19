import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import logo from '../../../../images/logo.png';
const useStyles = makeStyles((theme) => ({
    content_detail: {
      padding: theme.spacing(2),
      width: 400,
      height: 230,
    },
    typography: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    '&>strong': {
      fontWeight: 400
    },
    text_load: {
      display: 'flex'
    },
    
    title: {
        color: '#6cade3',
        fontSize: 20
    },
    icon: {
        color: '#6cade3',
        marginRight: 15
    },
    txt: {
        textTransform: 'uppercase'
    }
  }));
function ShowDetail(props) {
    const {anchorEl,idShow,handleCloseShowDetail,AddressDetail} = props;
    const open = Boolean(anchorEl);
    const classes = useStyles();
    return (
        <div>
            <Popover
                id={idShow}
                open={open}
                onClose={handleCloseShowDetail}
                disableRestoreFocus
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
                }}
            >
                <div className={classes.content_detail}>
                    <Typography className={classes.typography}>
                        <img width={200} src={logo} alt={`PHANAM`} />
                    </Typography>
                    <Typography className={classes.typography}>
                        <strong className={classes.title}>{AddressDetail.Map}</strong>
                    </Typography>

                    <Typography className={classes.typography}>
                        <strong ><LocationOnIcon className={classes.icon} /></strong>
                        <span className={classes.txt}>{AddressDetail.Address}</span>
                    </Typography>

                    <Typography className={classes.typography}>
                        <strong ><AddIcCallIcon className={classes.icon} /></strong> 
                        <span className={classes.txt}>{AddressDetail.Phone}</span>
                    </Typography>
                </div>
            </Popover>
    </div>
    )
}
export default ShowDetail;
