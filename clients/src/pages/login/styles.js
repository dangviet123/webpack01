import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    card: {
        padding: 10,
        textAlign: 'center',
        width: 500
    },
    textField:{
        width: '100%',
        marginTop: 10
    },
    loginTitle: {
        color: '#1976d2'
    },
    icon: {
        marginRight: 5
    },
    button:{
        width: '100%'
    },
    cardActions: {
        padding: 15
    },
    wapperlogin: {
        //backgroundColor: theme.palette.primary.main,
        height: "100%"
    },
    logoPn: {
        cursor: 'pointer',
        width:200
    },
    wapper_lg: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    groupTitie:{
        display: 'flex',
        alignItems: 'center'
    },
    license: {
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 12
    },
    forgotPass: {
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'underline'
        },
        cursor: 'pointer',
        textAlign: 'left',
        padding: 15,
    },
    titleLogin: {
        marginTop: 20,
        textTransform: 'uppercase'
    }
}));

export default useStyles;