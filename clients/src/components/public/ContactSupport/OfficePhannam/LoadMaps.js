import React,{Fragment} from 'react';
import renderHTML from 'react-render-html';
import GoogleMapReact from 'google-map-react';
import MapItem from './MapItem';
import {key_map_api} from '../../../../constants/admincp/config';
function LoadMaps(props) {
    const {listMap} = props;
    const { Link_ifarme,Longitude,Latitude,Map} = listMap;
    const center = {
        lat: Latitude !== undefined ? parseFloat(Latitude) : 18.690417,
        lng: Longitude !== undefined ? parseFloat(Longitude) : 105.698898
    }
    const renderMaps = () => {
        if (Link_ifarme !== '') {
            return (
                <Fragment>
                    {Link_ifarme !== undefined ? renderHTML(Link_ifarme) : ''}
                </Fragment>
                
            )
        }else {
            return (
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key_map_api}}
                    center={center}
                    defaultZoom={11}
                >
                    <MapItem
                        lat={Latitude}
                        lng={Longitude}
                        text={Map}
                    />
                </GoogleMapReact>
            )
        }  
    }
    return (
        <div className="col-lg-8">
            <div className="map-wrapper">
                {renderMaps()}
            </div>
        </div>
    )
}

export default LoadMaps;