import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        backgroundColor: 'white'
    },
    card_title: {
        fontSize: 15,
        fontWeight: 400,
        color: '#43a047'
    }
}));

export default useStyles;