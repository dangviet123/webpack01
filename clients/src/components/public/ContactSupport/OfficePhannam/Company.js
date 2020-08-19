import React from 'react';
import * as langs from '../../../../constants/admincp/languages';
function Company(props) {
    const { ListOffice,getMap } = props;

    const handleLoadMap = (index) => {
        const ListMaps = ListOffice[index];
        getMap(ListMaps);
    }

    const renderCompany = () => {
        let xhtml = null;
        xhtml = ListOffice.map((company,index) => {
            return (
                <div className="item" key={index} onClick={() => handleLoadMap(index)} >
                    <div className="name">
                        <p> <span>{company.Map}</span><br />{company.Address}</p>
                    </div>
                    <div className="phone"><em className="material-icons">phone</em><span>{langs.phone}: </span>{company.Phone}</div>
                </div>
            )
        });
        return xhtml;
    }

    return (
        <div className="col-lg-4">
            <div className="location-wrapper">
                <div className="logo"><img src={`${process.env.PUBLIC_URL}/asset/img/logo.png`} alt="" /></div>
                <div className="list-item">
                    {ListOffice.length > 0 ? renderCompany() : ''}
                </div>
            </div>
        </div>
    )
}

export default Company;
