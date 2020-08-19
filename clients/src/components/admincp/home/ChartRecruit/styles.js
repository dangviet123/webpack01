import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: 'white'
    },
    card_title: {
        fontWeight: 400,
        fontSize: 15,
        color: '#fb8c00'
    }
}));

export default useStyles;