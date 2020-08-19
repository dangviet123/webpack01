import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    table_jobs: {
        marginTop: 30
    },
    table_head: {
        background: 'linear-gradient(60deg, #006ab6, #006ab6)'
    },
    table_head_title: {
        color: 'white',
        lineHeight: 2,
        paddingRight: '15px !important',
        paddingLeft: '15px !important'
    },
    body_cell: {
        lineHeight: 2,
        paddingRight: '15px !important',
        paddingLeft: '15px !important'
    },
    title: {
        display: 'flex'
    },
    title_grow: {
        flexGrow: 1
    }
}));
export default useStyles;