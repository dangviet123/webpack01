import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: 48,
    backgroundColor: "#011b2d",
    height: `calc(100% - ${105}px)`
  },
 drawerHeader: {
    position: 'fixed',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    zIndex:  10,
    top: 0,
    width: drawerWidth,
    textAlign: "right",
    backgroundColor: "#1b5698",
    minHeight: 48,
  },
  icon_parent: {
    minWidth: 30,
    color: "white"
  },
  menuLink: {
    "&:hover":{
      textDecoration: 'none',
      color: "white",
      backgroundColor: "#022844"
    },
    color: "#b8c7ce"
  },
  children_menu: {
    marginLeft: theme.spacing(2)
  },
  menuLinkActive: {
    color: "white"
    
  },
  parent_icon: {
    display: 'flex',
    alignItems: 'center',
    color: '#e0dfdf'
  },
  title_text: {
    marginLeft: 15
  }
}));
export default styles;