import React,{useState, useEffect} from 'react';
import ControlPanelbutton from './../../../../components/admincp/Shared/ControlPanelbutton';
import ListTable from '../../../../components/admincp/recruitment/Profile/ListTable';
import Search from './../../../../components/admincp/recruitment/Profile/Search';
import ModalDialogs from '../../../../components/admincp/Shared/ModalDialogs';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchProfile,
    ac_deleteAllProfile, 
    ac_checkedOne, 
    ac_checkedAll, 
    ac_checkProcessOne,
    ac_checkProcessAll,
    ac_showDetailProfile,
    ac_exportExcelProfile} from '../../../../actions/admincp/recruitment/Profile';
import { useLocation } from 'react-router-dom';
import PaginationCustom from '../../../../components/admincp/Shared/PaginationCustom';
import { toastWarning } from '../../../../helpers/toastHelper';
import ConfirmAlert from '../../../../helpers/FormConfirm/ConfirmAlert';
import {showConfirmAlert, showModalDialogs} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';
import qs from 'query-string';
import Print from '../../../../components/admincp/recruitment/Profile/Print';
function Profile() {
    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    useEffect(() => {
        document.title = langs.application_profile;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchProfile());
    },[search,dispatch]);


    const {datas,current_page,last_page,total,ListVacancies,ListArea} = useSelector(state => state.Profile);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchProfile());
    }

    


    const handleSetLimitLoad = () => {
        dispatch(ac_fetchProfile());
    }





    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const checkProcessOne = (idProfile,active) => {
        if (active === 0) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm_profile
            },() => {
                dispatch(ac_checkProcessOne(idProfile));
            }));
        }
        
    }

    const checkProcessAll = () => {
        
        const listcheck =  datas.filter(data => data.checked);
        let list_id = [];
        let list_id_check = [];
        listcheck.forEach((element,index) => {
            if (listcheck[index].Check === 0) {
                list_id[index] = element.idProfile;
            }else {
                list_id_check[index] = element.idProfile;
            }
        });
        const data = {list_id: list_id};
        if (list_id_check.length === 0) {
            if (listcheck.length >= 1) {
                dispatch(showConfirmAlert(true,{
                    Title: langs.NOTIFICATION,
                    Text: langs.do_you_want_to_confirm_profile
                },() => {
                    dispatch(ac_checkProcessAll(data));
                }));
            } else {
                toastWarning(langs.select_at_least_line);
            }
        }else{
            toastWarning(langs.only_approved_applications_will_not_be_processed);
        }
        
    }


    const deleteAll = () => {
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.data_will_be_deleted
            },() => {
                dispatch(ac_deleteAllProfile(listcheck));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [idShow, setIdShow] = useState(undefined);
    const handleShowDetailClick = (event,idCheck,idProfile) => {
        dispatch(ac_showDetailProfile(idProfile));
        setIdShow(idCheck); 
        setAnchorEl(event.currentTarget);
    };

    const handleCloseShowDetail = () => {
        setAnchorEl(null);
    }

    const exportExcel = () => {
        const queryString = qs.parseUrl(search);
        const {query} = queryString;
        dispatch(ac_exportExcelProfile(query));
        
    }

    const showPrint = () => {
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const {idProfile} = listcheck[0];
            dispatch(ac_showDetailProfile(idProfile));
            dispatch(showModalDialogs(true,'md',langs.printed_votes,<Print   />));
        } else if(listcheck.length === 0) {
            toastWarning(langs.select_at_least_line);
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        }
    }

    return (
        <div className="fix-relative">
            <ConfirmAlert />
            <ControlPanelbutton 
                filterSerach={filterSerach} 
                reloadPage={reloadPage}
                deleteAll={deleteAll}
                checkProcessAll={checkProcessAll}
                exportExcel={exportExcel}
                showPrint={showPrint}
            />
            <Search handleCloseSearch={handleCloseSearch} ListVacancies={ListVacancies} ListArea={ListArea} />
            <ModalDialogs />
            <div className="contentTable">
                <div className="title">
                    <h6 className="title_page">{langs.application_profile}</h6>
                </div>
                
                <ListTable 
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    checkProcessOne={checkProcessOne}
                    anchorEl={anchorEl}
                    idShow={idShow}
                    handleShowDetailClick={handleShowDetailClick}
                    handleCloseShowDetail={handleCloseShowDetail}

                />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.application_profile} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default Profile;