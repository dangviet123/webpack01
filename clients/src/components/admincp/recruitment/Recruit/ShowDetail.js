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
    width: 350,
    padding: theme.spacing(2)
  }
}));

function SimplePopover(props) {
  const {anchorEl,idShow,handleCloseShowDetail} = props;
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const {ListDetail} = useSelector(state => state.Recruit);

  const FullNameEdit = ListDetail.idUserUpdate > 0 ? (<Typography className={classes.typography}>
    <strong>{langs.user_update}</strong> : <span>{ListDetail.FullNameAdd}</span>
  </Typography>) : '';

  const updated_at = ListDetail.idUserUpdate > 0 ? (<Typography className={classes.typography}>
  <strong>{langs.date_update}</strong> : <span> <Moment format="DD-MM-YYYY">{ListDetail.updated_at}</Moment></span>
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

        <Typography className={classes.text_load}>
          <Skeleton width={120} height={25} style={{marginRight: 10}} />
          <Skeleton width={150} height={25}  />
        </Typography>
        
        <Typography className={classes.text_load}>
          <Skeleton width={70} height={25} style={{marginRight: 10}} />
          <Skeleton width={120} height={25}  />
        </Typography>

        <Typography className={classes.text_load}>
          <Skeleton width={60} height={25} style={{marginRight: 10}} />
          <Skeleton width={100} height={25}  />
        </Typography>

        <Typography className={classes.text_load}>
          <Skeleton width={120} height={25} style={{marginRight: 10}} />
          <Skeleton width={120} height={25}  />
        </Typography>

        <Typography className={classes.text_load}>
          <Skeleton width={110} height={25} style={{marginRight: 10}} />
          <Skeleton width={120} height={25}  />
        </Typography>
      </div>
    )
  }

  const rederDetail = () => {
    return (
      <div className={classes.content_detail}>
          <Typography className={classes.typography}>
            <strong>{langs.title}</strong> : <span>{ListDetail.Recruit}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.company}</strong> : <span style={{textTransform: 'uppercase'}}>{ListDetail.DescriptionArea}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.vacancies}</strong> : <span>{ListDetail.Vacancies}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.user_create}</strong> : <span>{ListDetail.FullNameAdd}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.date_create}</strong> : <span> <Moment format="DD-MM-YYYY">{ListDetail.created_at}</Moment></span>
          </Typography>
          {FullNameEdit}
          {updated_at}
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
          ListDetail.Recruit === undefined ? renderLoading() : rederDetail()
        }
      </Popover>
    </div>
  );
}

export default SimplePopover;