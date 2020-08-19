import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    listController: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 3
    },
    button_icon: {
        marginRight: 10
    },
    table: {
        marginTop: 25
    },
    tr_table: {
        marginBottom: 4
    },
    pagination: {
        marginTop: 15,
        display: 'flex',
        marginBottom: 40
    },
    center_pg: {
        flexGrow: 1
    },
    loadin_contentpos: {
        position: 'fixed',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 99
        
    }
}));

function LoadingContetnt() {
    const classes = useStyles();
    const isLoading = useSelector(state => state.showLoading.isLoading);

    return (
        <div className={`${isLoading ? `loading_contain_active` : `loading_contain_hide` } ${classes.loadin_contentpos}`}>
            <Skeleton variant="rect" height={45} />
            <div className={classes.listController}>
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
                <Skeleton variant="text" height={53} width={43} className={classes.button_icon} />
            </div>

            <div>
                <Skeleton variant="rect" height={20} width={200} />
                <div className={classes.table}>
                    <Skeleton variant="rect" height={48} className={classes.tr_table} />
                    <Skeleton variant="rect" height={48} className={classes.tr_table} />
                    <Skeleton variant="rect" height={48} className={classes.tr_table} />
                    <Skeleton variant="rect" height={48} className={classes.tr_table} />
                    <Skeleton variant="rect" height={48} className={classes.tr_table} />
                    <Skeleton variant="rect" height={48} className={classes.tr_table} />
                </div>
                <div className={classes.pagination}>
                    <Skeleton variant="rect" height={25} width={200} />
                    <div className={classes.center_pg}></div>
                    <Skeleton variant="rect" height={25} width={200} />
                </div>
            </div>
            
        </div>
    )
}

export default LoadingContetnt;
