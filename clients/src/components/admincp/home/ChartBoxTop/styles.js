import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    cartTop: {
        padding: theme.spacing(2),
        position: 'relative',
        overflow: 'inherit',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: 'white'
    },
    small_box_1: {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)',
        border: 'none',
        padding: theme.spacing(2),
        width: 75,
        textAlign: 'center'
    },
    small_box_2: {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)',
        border: 'none',
        padding: theme.spacing(2),
        width: 75,
        textAlign: 'center'
    },
    small_box_3: {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4)',
        border: 'none',
        padding: theme.spacing(2),
        width: 75,
        textAlign: 'center'
    },
    small_box_4: {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)',
        border: 'none',
        padding: theme.spacing(2),
        width: 75,
        textAlign: 'center'
    },
    icon_small_box: {
        color: 'white'
    },
    flex_title: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15
    },
    flex_title_ac: {
        width: '100%'
    },
    titleTop: {
        textAlign: "right",
        color: '#999'
    },
    totalTop: {
        textAlign: "right",
        fontSize: 40
    },
    xt: {
        color: '#999',
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12,
        cursor: 'pointer'
    },
}));

export default useStyles;