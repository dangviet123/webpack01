import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import Header from './Header/index';
import SideBar from './SideBar/index';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LoadingBar from 'react-redux-loading-bar';
import BackdropLoading from '../../admincp/Shared/BackdropLoading';
import SimpleReactLightbox from "simple-react-lightbox";
function DashboardLayoutComponent(props) {
    const { children } = props;
    const matches = useMediaQuery('(max-width:952px)');
    const [open,setOpen] = useState(true);
    const classes = useStyles();
    const openMenuDrawer = () => {
        setOpen(!open);
    }
    useEffect(() => {
        setOpen(!matches);
    },[matches]);
    return (
            <div className={`${classes.dashboard} admincp`}>
                <Header openMenuDrawer={openMenuDrawer} open={open} />
                <LoadingBar className={classes.loadingbar} updateTime={100}  maxProgress={90} progressIncrease={10} />
                <BackdropLoading />
                <SimpleReactLightbox>
                    <div className={classes.wapper}>
                        <SideBar open={open} openMenuDrawer={openMenuDrawer} />
                            <main className={clsx(classes.content, {
                                [classes.contentShift]: matches ? false : open,
                            })}>
                                { children }
                            </main>
                    </div>
                </SimpleReactLightbox>
            
        </div>
        
    )
}
export default DashboardLayoutComponent;