import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import Skeleton from '@material-ui/lab/Skeleton';
import Moment from 'react-moment';
import {link_file} from '../../../../constants/admincp/config';
import ArchiveIcon from '@material-ui/icons/Archive';
import { Button } from '@material-ui/core';
import { saveAs } from 'file-saver';
const useStyles = makeStyles((theme) => ({
  content_detail: {
    padding: theme.spacing(2),
    width: 450,
    height: 300,
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
    height: 300,
    padding: theme.spacing(2),
  }
}));

function SimplePopover(props) {
  const {anchorEl,idShow,handleCloseShowDetail} = props;
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const {ListDetail} = useSelector(state => state.Profile);

  const FullNameCheck = ListDetail.idCheck > 0 ? (<Typography className={classes.typography}>
    <strong>{langs.user_check}</strong> : <span>{ListDetail.FullNameCheck}</span>
  </Typography>) : '';
  const DateCheck = ListDetail.idCheck > 0 ? (<Typography className={classes.typography}>
    <strong>{langs.date_check}</strong> : <span> <Moment format="DD-MM-YYYY">{ListDetail.DateCheck}</Moment></span>
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
          <Skeleton width={300} height={25}  />
        </Typography>

        <Typography className={classes.text_load}>
          <Skeleton width={150} height={25} style={{marginRight: 10}} />
          <Skeleton width={400} height={25}  />
        </Typography>

        <Typography className={classes.text_load}>
          <Skeleton width={110} height={25} style={{marginRight: 10}} />
          <Skeleton width={200} height={25}  />
        </Typography>

        <Typography className={classes.text_load}>
          <Skeleton width={110} height={25} style={{marginRight: 10}} />
          <Skeleton width={250} height={25}  />
        </Typography>
        <Typography className={classes.text_load}>
          <Skeleton width={110} height={25} style={{marginRight: 10}} />
          <Skeleton width={400} height={25}  />
        </Typography>
        <Typography className={classes.text_load}>
          <Skeleton width={110} height={25} style={{marginRight: 10}} />
          <Skeleton width={`100%`} height={25}  />
        </Typography>
        <Typography className={classes.text_load}>
          <Skeleton width={110} height={25} style={{marginRight: 10}} />
          <Skeleton width={`100%`} height={25}  />
        </Typography>
        
      </div>
    )
  }

  const rederDetail = () => {
    return (
      <div className={classes.content_detail}>
          <Typography className={classes.typography}>
            <strong>{langs.title}</strong> : <span>{ListDetail.Profile}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.company}</strong> : <span style={{textTransform: 'uppercase'}}>{ListDetail.DescriptionArea}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.job_position}</strong> : <span>{ListDetail.Vacancies}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.birth_day}</strong> : <span><Moment format="DD-MM-YYYY">{ListDetail.DateBirthDay}</Moment></span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.place_of_birth}</strong> : <span>{ListDetail.Permanent}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.current_residence}</strong> : <span>{ListDetail.CurrentPlace}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.sex}</strong> : <span>{ListDetail.idGender ===1 ? langs.male : langs.female}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.marriage}</strong> : <span>{ListDetail.idMarriage ===1 ? langs.alone : langs.married}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.educational_level}</strong> : <span>{ListDetail.Education}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.desired_working_place}</strong> : <span>{ListDetail.DesiredWork}</span>
          </Typography>
          <Typography className={classes.typography}>
            <strong>{langs.experience}</strong> : <span>{ListDetail.YearsExperience}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.desired_salary}</strong> : <span>{ListDetail.Salary}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.recruitment_salary}</strong> : <span>{ListDetail.Wage}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.job_posting_area}</strong> : <span>{ListDetail.GroupArea}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.notes}</strong> : <span>{ListDetail.Notes}</span>
          </Typography>

          <Typography className={classes.typography}>
            <strong>{langs.attached_files}</strong> : <span>
              <Button  color="primary" onClick={() =>handleDowloadFile(ListDetail.FileName)} >
                
                  <ArchiveIcon />
                
            </Button>
            </span>
          </Typography>
          {FullNameCheck}
          {DateCheck}
        </div>
    );
  }

  const handleDowloadFile = FileName => {
    if (FileName !== null) {
      const file = `${link_file}${FileName}`;
      saveAs(file,FileName);
    }
    
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