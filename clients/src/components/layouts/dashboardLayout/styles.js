import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    wapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    wapperContainer: {
        width: '100%',
        padding: theme.spacing(2),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: 64
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        marginTop: '48px',
        position: 'relative'
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      loadingbar: {
        position: 'fixed',
        height: 3,
        top: 0,
        backgroundColor:'red',
        zIndex: 9999
      }
}));

export default useStyles;