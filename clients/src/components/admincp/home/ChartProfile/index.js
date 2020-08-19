import React from "react";
import { Bar } from "react-chartjs-2";
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import * as langs from '../../../../constants/admincp/languages';
import Skeleton from '@material-ui/lab/Skeleton';
function ChartProfile(props) {
    const {ListProfile} = props;
    const classes = useStyles();
    const labels = [];
    const data = [];
    ListProfile.forEach(element => {
        labels.push(element.IDCode);
        data.push(element.CountProfile);
    });
    const renderProfile = () => {
        return (
            <Bar
                data={
                    {
                        labels: labels,
                        datasets: [
                            {
                            label: langs.total,
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#1b5698",
                                "#43a047",
                                "#ef5350",
                                "#26c6da",
                                "#ffa726"
                            ],
                            data: data
                            }
                        ]
                    }
                }
                    options={{
                    legend: { display: false },
                    title: {
                        display: true,
                        text: ""
                    }
                }}
            />
        )
    }
    const renderLoading = () => {
        return (
            <div>
                <Skeleton height={205} variant="rect" style={{marginTop: 24}} />
                <div style={{display: 'flex',justifyContent: 'space-between',marginTop: 7}}>
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                    <Skeleton width={`10%`} />
                </div>
                
            </div>
        )
    }
    return (
        <Card variant="outlined" className={classes.card}>
            <h5 className={classes.card_title}>{langs.US_SUBMIT}</h5>
            {ListProfile.length > 0 ? renderProfile() : renderLoading()}
        </Card>
    )
}

export default ChartProfile;
