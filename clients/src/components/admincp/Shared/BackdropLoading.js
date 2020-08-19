import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'fixed',
    backgroundColor: '#f8f9fa',
    zIndex: 2000,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    textAlign: 'center',
  },
  icon_backdrop: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    marginTop: '-20px',
    fontSize:30,
    opacity: 1
  },
  active: {
    display: 'block'
  },
  disable:{
    display: 'none'
  }
}));

function BackdropLoading() {
  const classes = useStyles();
  const { isSubmit } = useSelector(state => state.showSubmit);
  return (

      <div className={`${classes.backdrop} ${isSubmit === true ? classes.active : classes.disable}`} >
        <i className={`fa fa-circle-o-notch fa-spin ${classes.icon_backdrop}` } ></i>
      </div>
  );
}

export default BackdropLoading;