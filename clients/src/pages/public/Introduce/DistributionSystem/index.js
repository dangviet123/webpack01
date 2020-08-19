import React, { useEffect,useState } from 'react';
import SliderHome from '../../../../components/layouts/pubicLayout/Slider';
import MenuChildren from '../../../../components/public/Shares/MenuChildren';
import { useDispatch, useSelector } from 'react-redux';
import * as langs from '../../../../constants/admincp/languages';
import Breadcrumb from '../../../../components/public/Shares/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ViewMaps from '../../../../components/public/Introduce/DistributionSystem/ViewMaps';
import {ac_fetchDistributionSystem} from '../../../../actions/public/Introduce/DistributionSystem';
import introduce2 from '../../../../images/introduce/2.png';
function DistributionSystem() {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        document.title = `${langs.distribution_system} | ${langs.name_company}`;
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(ac_fetchDistributionSystem());
    }, [dispatch]);

    // Breadcrumb
    const { datas } = useSelector(state => state.Header);
    const NewData = datas.filter(d => d.Slug === '/Introduce');
    let list_prc = [];
    if (datas.length > 0) {
        const { children } = NewData[0];
        const { pathname } = location;
        const Newchildren = children.filter(d => d.Slug === pathname);
        list_prc = [
            { Name: NewData[0].MenuName, 'Slug': children[0].Slug, Active: 0 },
            { Name: Newchildren[0].MenuName, Slug: '', Active: 1 }
        ];
    }
    // end Breadcrumb

    const { DataAddress } = useSelector(state => state.DistributionSystem);

    const [anchorEl, setAnchorEl] = useState(null);
    const [idShow, setIdShow] = useState(undefined);
    const [AddressDetail,setAddressAddressDetail] = useState({});
    const handleShowDetailClick = (event,idCheck,idMap) => {
        const NewDataAddress = DataAddress.filter(d => d.idMap === idMap);
        setAddressAddressDetail(NewDataAddress[0])
        setIdShow(idCheck); 
        setAnchorEl(event.currentTarget);
    };

    const handleCloseShowDetail = () => {
        setAnchorEl(null);
    }

    return (
        <main>
            <SliderHome />
            <Breadcrumb list_prc={list_prc} />
            <section className="gioithieu2-1">
                <MenuChildren ListMenu={NewData} />
                <div className="container">
                    <div className="list-img">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="img-1">
                                    <ViewMaps 
                                        DataAddress={DataAddress}
                                        anchorEl={anchorEl}
                                        idShow={idShow}
                                        handleShowDetailClick={handleShowDetailClick}
                                        handleCloseShowDetail={handleCloseShowDetail}
                                        AddressDetail={AddressDetail}
                                    />
                                </div>
                                
                            </div>
                            <div className="col-lg-7">
                                <div className="img-2">
                                    <LazyLoadImage 
                                        src={introduce2}
                                        alt={``}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default DistributionSystem;
