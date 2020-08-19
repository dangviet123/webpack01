import React from 'react';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import AnimatedNumber from 'animated-number-react';
import * as langs from '../../../../constants/admincp/languages';
import { useHistory } from "react-router-dom";
function ChartBoxTop(props) {
    const {ListBlock} = props;
    const classes = useStyles();
    const history = useHistory();
    const formatValue = (value) => value.toFixed(0);
    const duration = 600;

    const handleSupport = () => {
        history.push("/admincp/contacts/support");
    }

    const handleRecruit = () => {
        history.push("/admincp/recruitment/recruit");
    }

    const handleProfile = () => {
        history.push("/admincp/recruitment/profile");
    }

    const handlePosts = () => {
        history.push("/admincp/contents/posts");
    }
    return (
        <Grid 
            container 
            direction="row"
            justify="center"
            alignItems="center"  
            spacing={2}
            >
            <Grid item xs={12} md={3} sm={6}>
                <Card className={classes.cartTop} variant="outlined">
                    <div className={classes.flex_title}>
                        <Card  variant="outlined" className={classes.small_box_1}>
                            <Icon className={classes.icon_small_box}>content_copy</Icon>
                        </Card>
                        <div className={classes.flex_title_ac}>
                            <p className={classes.titleTop}>{langs.RECRUITMENT}</p>
                            <h3 className={classes.totalTop}>
                                <AnimatedNumber
                                    value={ListBlock.CountRecruit ? ListBlock.CountRecruit : 0}
                                    formatValue={formatValue}
                                    duration={duration}
                                />
                            </h3>
                        </div>
                    </div>
                    
                    <Divider />
                    <div className={classes.xt} onClick={handleRecruit} >
                        <Icon fontSize="small">content_copy</Icon> 
                        <span>{langs.view_all}</span> 
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className={classes.cartTop} variant="outlined">
                    <div className={classes.flex_title}>
                        <Card  variant="outlined" className={classes.small_box_2}>
                            <Icon className={classes.icon_small_box}>send</Icon>
                        </Card>
                        <div className={classes.flex_title_ac}>
                            <p className={classes.titleTop}>{langs.US_SUBMIT}</p>
                            <h3 className={classes.totalTop}>
                                <AnimatedNumber
                                    value={ListBlock.CountProfile ? ListBlock.CountProfile : 0}
                                    formatValue={formatValue}
                                    duration={duration}
                                />
                            </h3>
                        </div>
                    </div>
                    
                    <Divider />
                    <div className={classes.xt} onClick={handleProfile}>
                        <Icon fontSize="small">send</Icon> 
                        <span>{langs.view_all}</span> 
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
                <Card className={classes.cartTop} variant="outlined">
                    <div className={classes.flex_title}>
                        <Card  variant="outlined" className={classes.small_box_3}>
                            <Icon className={classes.icon_small_box}>directions_boat</Icon>
                        </Card>
                        <div className={classes.flex_title_ac}>
                            <p className={classes.titleTop}>{langs.POSTS}</p>
                            <h3 className={classes.totalTop}>
                                <AnimatedNumber
                                    value={ListBlock.CountPosts ? ListBlock.CountPosts : 0}
                                    formatValue={formatValue}
                                    duration={duration}
                                />
                            </h3>
                        </div>
                    </div>
                    <Divider />
                    <div className={classes.xt} onClick={handlePosts}>
                        <Icon fontSize="small">directions_boat</Icon> 
                        <span>{langs.view_all}</span> 
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6} >
                <Card className={classes.cartTop} variant="outlined">
                    <div className={classes.flex_title}>
                        <Card  variant="outlined" className={classes.small_box_4}>
                            <Icon className={classes.icon_small_box}>comment</Icon>
                        </Card>
                        <div className={classes.flex_title_ac}>
                            <p className={classes.titleTop}>{langs.CONTACTS}</p>
                            <h3 className={classes.totalTop}>
                                <AnimatedNumber
                                    value={ListBlock.CountSupport ? ListBlock.CountSupport : 0}
                                    formatValue={formatValue}
                                    duration={duration}
                                />
                            </h3>
                        </div>
                    </div>
                    <Divider />
                    <div className={classes.xt} onClick={handleSupport}>
                        <Icon fontSize="small">comment</Icon> 
                        <span>{langs.view_all}</span> 
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}
export default ChartBoxTop;
