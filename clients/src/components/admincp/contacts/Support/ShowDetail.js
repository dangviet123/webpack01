import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import Skeleton from '@material-ui/lab/Skeleton';
import Moment from 'react-moment';
const useStyles = makeStyles((theme) => ({
  content_detail: {
    padding: theme.spacing(2),
    width: 450,
  },
  typography: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  },
  '&>strong': {
    fontWeight: 400
  },
  text_load: {
    display: 'flex'
  },
  content_load: {
    width: 450,
    padding: theme.spacing(2),
  }
}));

function SimplePopover(props) {
  const {anchorEl,idShow,handleCloseShowDetail} = props;
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const {ListDetail} = useSelector(state => state.Support);

  const FullNameCheck = ListDetail.idUserSupport > 0 ? (<Typography className={classes.typography}>
    <strong>{langs.user_check}</strong> : <span>{ListDetail.FullNameCheck}</span>
  </Typography>) : '';
  const DateCheck = ListDetail.idUserSupport > 0 ? (<Typography className={classes.typography}>
    <strong>{langs.date_check}</strong> : <span> <Moment format="DD-MM-YYYY">{ListDetail.DateSupport}</Moment></span>
  </Typography>) : '';

  const renderLoading = () => {
    return (
      <div className={classes.content_load}>
        <Typography className={classes.text_load}>
          <Skeleton width={50} height={25} style={{marginRight: 10}} />
          <Skeleton width={200} height={25}  />
        </Typography>
        <Typography className={classes.text_load}>
          <Skeleton width={50} height={25} style={{marginRight: 10}} />
          <Skeleton width={`100%`} height={25}  />
        </Typography>    
      </div>
    )
  }

  const rederDetail = () => {
    return (
      <div className={classes.content_detail}>
          <Typography className={classes.typography}>
            <strong>{langs.title}</strong> : <span>{ListDetail.Support}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.notes}</strong> : <span>{ListDetail.Content}</span>
          </Typography>
          {FullNameCheck}
          {DateCheck}
        </div>
    );
  }

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
        {
          ListDetail.Support === undefined ? renderLoading() : rederDetail()
        }
      </Popover>
    </div>
  );
}

export default SimplePopover;