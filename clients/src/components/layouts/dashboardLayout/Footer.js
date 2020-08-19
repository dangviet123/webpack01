import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Footer(props) {
    const {open} = props;
    const useStyles = makeStyles((theme) => ({
        footer: {
            borderTop: '1px solid #464646',
            color: 'white',
            position: 'fixed',
            zIndex: 99999999999,
            width: 240,
            marginLeft: !open ? -240 : 0,
            bottom: 0,
            textAlign: 'left',
            padding: 10,
            backgroundColor: '#011b2d'
        },
        textFt:{
            fontSize: 13
        }
    }));
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            Thiết kế & Lập trình hệ thống <br />TEAM IT SOFTWARE © {new Date().getFullYear()}
        </footer>
    )
}
export default Footer;
