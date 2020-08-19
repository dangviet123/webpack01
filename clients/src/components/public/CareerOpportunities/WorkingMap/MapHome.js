import React from 'react';
import { Grid } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import {key_map_api} from '../../../../constants/admincp/config';
import MapItem from './MapItem';
const useStyles = makeStyles((theme) => ({
    text_center: {
        textAlign: 'left',
        cursor: 'pointer'
    },
    icon: {
        color: 'red',
        fontSize: 16
    },
    con: {
        color: 'red'
    }
}));
function MapHome(props) {
    const {ListWorking} = props;
    const history = useHistory();
    const classes = useStyles();
    const handleRedirect = (idArea) => {
        history.push(`/career-opportunities/jobs-are-recruiting?idArea=${idArea}`);
    }
    const renderListArea = () => {
        let xhtml = null;
        xhtml = ListWorking.map((area,index) => {
            return (
                <Grid item xs={12} md={3} sm={6} key={index} className={classes.text_center} onClick={() => handleRedirect(area.idArea)} >
                    <p><RoomIcon className={classes.icon} />{area.Area} (<span className={classes.con}>{area.CountRecruit})</span></p>
                </Grid>
            )
        });
        return xhtml;
    }

    const renderLocation = () => {
        let xhtml = null;
        xhtml = ListWorking.map((area,index) => {
            return (
                <MapItem key={index}
                    lat={area.longitude}
                    lng={area.latitude}
                    text={area.Description}
                />
            )
        });
        return  xhtml;
    }

    const center = {
        lat: 16.596649,lng: 106.402023
    }
    return (
        <div className="row jcc">
            <div className="col-lg-10">
                <div className="map-wrapper" style={{position: 'relative',height: 750}}>
                    {<GoogleMapReact
                        
                        bootstrapURLKeys={{ key: key_map_api}}
                        center={center}
                        defaultZoom={6}
                    >
                        {renderLocation()}
                    </GoogleMapReact>}
                </div>
                <div className="location-wrapper">
                    <div className="title">
                        <h4>Việc làm đang tuyển</h4>
                    </div>
                    <div className="list-item">
                    <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="center"  
                        spacing={2}
                        >
                            {ListWorking.length > 0 ? renderListArea() : ''}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MapHome;
