import React from "react";
import { Doughnut } from "react-chartjs-2";
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import * as langs from '../../../../constants/admincp/languages';
import Skeleton from '@material-ui/lab/Skeleton';
function ChartUser(props) {
  const {ListUser} = props;
  
  const classes = useStyles();
  const labels = [];
  const data = [];
  ListUser.forEach(element => {
    labels.push(element.GroupsName);
    data.push(element.CountUser);
  });
  const renderLoading = () => {
    return (
      <div >
        <Skeleton  width={250} className={classes.loading} height={23} />
        <Skeleton  variant="circle" width={230} height={230} className={classes.loading} />
      </div>
      
    );
  }

  const renderUser = () => {
    return (
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: "",
              backgroundColor: [
                "#3e95cd",
                "#43a047",
              ],
              data: data
            }
          ]
        }}
        option={{
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050"
          }
        }}
      />
    )
  }
  return (
    <Card variant="outlined" className={classes.card}>
        <h5 className={classes.card_title}>{langs.USERS}</h5>
        {ListUser.length > 0 ? renderUser() :  renderLoading()}
      
    </Card>
  )
}

export default ChartUser;
