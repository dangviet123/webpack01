import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { makeStyles } from '@material-ui/core/styles';
import ShowDetail from './ShowDetail';
import introduce1 from '../../../../images/introduce/1.png';
const useStyles = makeStyles({
    max_image: {
        position: 'relative'

    },
    icon_c: {
        width: 26,
        height: 26,
        borderRadius: 13,
        position: 'absolute',
        cursor: 'pointer'
    }
});
function ViewMaps(props) {
    const classes = useStyles();
    const {DataAddress,anchorEl,idShow,handleCloseShowDetail,handleShowDetailClick,AddressDetail} = props;

    const renderCompany  = () => {
        let xhtml = null;
        xhtml = DataAddress.map((company,index) => {
            const {position_x,position_y,idMap} = company;
            const idCheck = `popover-${idMap}`;
            return (
                <div 
                    id={idCheck}
                    key={index}
                    className={classes.icon_c}
                    style={{top:position_x,left:position_y}}
                    onClick={(event) => handleShowDetailClick(event, idCheck,idMap)}
                ></div>
            )   
        });
        return xhtml;
    }

    return (
        <div className={classes.max_image}>
            <ShowDetail anchorEl={anchorEl} idShow={idShow} handleCloseShowDetail={handleCloseShowDetail} AddressDetail={AddressDetail} />
            <LazyLoadImage 
                src={introduce1}
                alt={``}

            />
            <div className={classes.pstCompany}>
                {renderCompany()}
            </div>
        </div>
    )
}

export default ViewMaps;
