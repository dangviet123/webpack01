import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  root: {
    "&>header": {
      boxShadow: "none",
      borderBottom: "1px solid #e8e8e8"
    }
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
  },
  drawerHeader: {
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  toolbar: {
    minHeight: 48,
    backgroundColor: theme.palette.primary.main,
    width: '100%'
  },
  tool_icon: {
    display: 'flex',
    alignItems: 'center'
  },
  grow_x: {
    flexGrow: 1
  }
}));
export default styles;