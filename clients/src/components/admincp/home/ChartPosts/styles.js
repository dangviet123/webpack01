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
        color: '#e63d39',
        marginBottom: theme.spacing(2)
    },
    posts_title: {

    },
    table_post: {
        border: '0px !important',
        '& th': {
            border: 'inherit !important',
            padding: '10px !important',
            color: 'white',
            fontWeight: 400,
            fontSize: '13px !important'
        },
        '& td': {
            border: 'inherit !important'
        },

        '& tr': {
            borderBottom: '1px solid #e9ecef'
        },
        '& thead': {
            background: 'linear-gradient(60deg, #ef5350, #e53935) !important',
            boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4) !important'
        }
    }
}));

export default useStyles;