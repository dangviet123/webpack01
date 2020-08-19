import React,{useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchSupport,
    ac_deleteAllSupport, 
    ac_checkedOne, 
    ac_checkedAll, 
    ac_checkProcessOne,
    ac_checkProcessAll,
    ac_showDetailSupport
} from '../../../../actions/admincp/contacts/Support';
import { useLocation } from 'react-router-dom';
import { toastWarning } from '../../../../helpers/toastHelper';
import {showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';

const ModalDialogs = loadable(() => import('../../../../components/admincp/Shared/ModalDialogs'));
const Search = loadable(() => import('./../../../../components/admincp/contacts/Support/Search'));
const ListTable = loadable(() => import('./../../../../components/admincp/contacts/Support/ListTable'));
const ControlPanelbutton = loadable(() => import('./../../../../components/admincp/Shared/ControlPanelbutton'));
const PaginationCustom = loadable(() => import('../../../../components/admincp/Shared/PaginationCustom'));
const ConfirmAlert = loadable(() => import('../../../../helpers/FormConfirm/ConfirmAlert'));

function Support() {
    const [checkAll,setCheckAll] = useState(false); 
    const dispatch = useDispatch();
    const {search} = useLocation();
    useEffect(() => {
        document.title = langs.receive_information;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchSupport());
    },[search,dispatch]);


    const {datas,current_page,last_page,total} = useSelector(state => state.Support);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchSupport());
    }

    


    const handleSetLimitLoad = () => {
        dispatch(ac_fetchSupport());
    }





    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const checkProcessOne = (idSupport,active) => {
        if (active === 0) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm_support
            },() => {
                dispatch(ac_checkProcessOne(idSupport));
            }));
        }
        
    }

    const checkProcessAll = () => {
        
        const listcheck =  datas.filter(data => data.checked);
        let list_id = [];
        let list_id_check = [];
        listcheck.forEach((element,index) => {
            if (listcheck[index].Active === 0) {
                list_id[index] = element.idSupport;
            }else {
                list_id_check[index] = element.idSupport;
            }
        });
        const data = {list_id: list_id};
        if (list_id_check.length === 0) {
            if (listcheck.length >= 1) {
                dispatch(showConfirmAlert(true,{
                    Title: langs.NOTIFICATION,
                    Text: langs.do_you_want_to_confirm_support
                },() => {
                    dispatch(ac_checkProcessAll(data));
                }));
            } else {
                toastWarning(langs.select_at_least_line);
            }
        }else{
            toastWarning(langs.only_check_check_support);
        }
        
    }


    const deleteAll = () => {
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.data_will_be_deleted
            },() => {
                dispatch(ac_deleteAllSupport(listcheck));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [idShow, setIdShow] = useState(undefined);
    const handleShowDetailClick = (event,idCheck,idSupport) => {
        dispatch(ac_showDetailSupport(idSupport));
        setIdShow(idCheck); 
        setAnchorEl(event.currentTarget);
    };

    const handleCloseShowDetail = () => {
        setAnchorEl(null);
    }


    return (
        <div className="fix-relative">
            <ConfirmAlert />
            <ControlPanelbutton 
                filterSerach={filterSerach} 
                reloadPage={reloadPage}
                deleteAll={deleteAll}
                checkProcessAll={checkProcessAll}
                
            />
            <Search handleCloseSearch={handleCloseSearch} />
            <ModalDialogs />
            <div className="contentTable">
                <div className="title">
                    <h6 className="title_page">{langs.receive_information}</h6>
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
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.receive_information} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default Support;