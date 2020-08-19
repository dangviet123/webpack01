import React,{useState} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import { ListItemIcon } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {showModalDialogs} from '../../../../actions/admincp/ModalDialogs';
import { useDispatch } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import ChangePassWord from '../../../../components/admincp/home/ChangePassWord';
import {ac_changePassWord, ac_fetchLogOut} from '../../../../actions/admincp/home/Dashboard';
function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {open,openMenuDrawer} = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const openUser = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(ac_fetchLogOut());
    handleClose();
  }

  const handleChangePass = () => {
    handleClose();
    dispatch(showModalDialogs(true,'sm',langs.change_the_password,<ChangePassWord changePassWord={changePassWord}  />));
  }

  const changePassWord = value => { // thay đổi mật khẩu
    dispatch(ac_changePassWord(value));
  }
  const {full_name} = localStorage.getItem("rememToken") !== null ? JSON.parse(localStorage.getItem('rememToken')) : {} ;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar  className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openMenuDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ClearAllIcon />
          </IconButton>
            <Typography variant="h6"  >PHANAM</Typography>
            <div className={classes.grow_x}></div>
            <span style={{textTransform: 'capitalize'}}>{full_name}</span>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
              
              <AccountCircleIcon style={{color: 'white'}} />
            </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={openUser}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleChangePass}>
            <ListItemIcon>
              <ForumIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Đổi Mật Khẩu</Typography>
          </MenuItem>

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <PowerSettingsNewIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Đăng Xuất</Typography>
          </MenuItem>
        </Menu>

    </div>
  );
}
export default Header;