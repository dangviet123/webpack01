import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchDashboard } from '../../../actions/admincp/home/Dashboard';

const ModalDialogs = loadable(() => import('../../../components/admincp/Shared/ModalDialogs'));
const ChartProfile = loadable(() => import('../../../components/admincp/home/ChartProfile/index'));
const ChartBoxTop = loadable(() => import('../../../components/admincp/home/ChartBoxTop'));
const ChartRecruit = loadable(() => import('../../../components/admincp/home/ChartRecruit'));
const ChartPosts = loadable(() => import('../../../components/admincp/home/ChartPosts'));
const ChartCompany = loadable(() => import('../../../components/admincp/home/ChartCompany'));
const ChartUser = loadable(() => import('../../../components/admincp/home/ChartUser'));

function Home() {
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Dashboard';
    });

    useEffect(() => {
        dispatch(ac_fetchDashboard());
        const intervalId = setInterval(() => {
            dispatch(ac_fetchDashboard());
          }, 20000);
        return () => clearInterval(intervalId);
    },[dispatch]);

    const { ListBlock,ListRecruit,ListProfile,ListUser,ListPosts,LitstCompany } = useSelector(state => state.Dashboard);
    return (
        <div className="main_content">
            <ModalDialogs />
            <div className={classes.box_top}>
                <ChartBoxTop ListBlock={ListBlock} />
            </div>

            <div className={classes.box_top}>
                <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center"  
                spacing={2}
                >
                    <Grid item xs={12} md={4} >
                        <ChartRecruit ListRecruit={ListRecruit} />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <ChartProfile ListProfile={ListProfile} />
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <ChartUser ListUser={ListUser} />
                    </Grid>

                    <Grid item sm={12} md={7}  >
                        <ChartPosts ListPosts={ListPosts} />
                    </Grid>
                    <Grid item sm={12} md={5} >
                        <ChartCompany LitstCompany={LitstCompany}  />
                    </Grid>
                </Grid>
                
            </div>
        </div>
    );
}

export default Home;
