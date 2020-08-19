import React,{useState, useEffect} from 'react';
import ControlPanelbutton from './../../../../components/admincp/Shared/ControlPanelbutton';
import ListTable from '../../../../components/admincp/recruitment/Recruit/ListTable';
import Search from './../../../../components/admincp/recruitment/Recruit/Search';
import ModalDialogs from '../../../../components/admincp/Shared/ModalDialogs';
import { useDispatch,useSelector } from 'react-redux';
import { ac_fetchRecruit,
    ac_activeOneRecruit,
    ac_activeAllRecruit,
    ac_deleteAllRecruit, 
    ac_checkedOne, 
    ac_checkedAll, 
    ac_showDetailRecruit,
    ac_exportExcelRecruit
} from '../../../../actions/admincp/recruitment/Recruit';
import { useLocation,useHistory } from 'react-router-dom';
import PaginationCustom from '../../../../components/admincp/Shared/PaginationCustom';
import { toastWarning } from '../../../../helpers/toastHelper';
import ConfirmAlert from '../../../../helpers/FormConfirm/ConfirmAlert';
import {showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import {showSearch} from '../../../../actions/login/login';
import * as langs from '../../../../constants/admincp/languages';
//import {exportFileExcel} from  './../../../../components/admincp/Shared/exportfileExcel';
import qs from 'query-string';
function Recruit() {
    const [checkAll,setCheckAll] = useState(false); 
    const history = useHistory();
    const dispatch = useDispatch();
    const {search} = useLocation();
    useEffect(() => {
        document.title = langs.recruit;
        dispatch(showSearch(false));
    },[dispatch]);

    useEffect(() => {
        dispatch(ac_fetchRecruit());
    },[search,dispatch]);


    const {datas,current_page,last_page,total,ListVacancies,ListArea} = useSelector(state => state.Recruit);
    const filterSerach = () => {
        dispatch(showSearch(true));
    };
    const handleCloseSearch = () => {
        dispatch(showSearch(false));
    };
    const reloadPage = () => {
        dispatch(ac_fetchRecruit());
    }
    const createdNew = () => { // mở form thêm mới
        history.push('/admincp/recruitment/recruit/add');
    };
    

    

    const handleSetLimitLoad = () => {
        dispatch(ac_fetchRecruit());
    }



    const updatedNew = () => { // mở form thêm mới
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length === 1) {
            const {idRecruit} = listcheck[0];
            history.push(`/admincp/recruitment/recruit/${idRecruit}/edit`);
        }else if (listcheck.length > 1) {
            toastWarning(langs.only_line_is_allowed);
        } else {
            toastWarning(langs.select_at_least_line);
        }
    };

    

    const checkedOne = index => { // checked one row
        dispatch(ac_checkedOne(index));
    }
    const checkedAll = ev => {
        setCheckAll(!checkAll);
        dispatch(ac_checkedAll(!checkAll));
    };

    const activeOne = (idRecruit,active) => {
        dispatch(showConfirmAlert(true,{
            Title: langs.NOTIFICATION,
            Text: langs.do_you_want_to_confirm
        },() => {
            dispatch(ac_activeOneRecruit(idRecruit,!active));
        }));
        
    }

    const activeAll = value => {
        
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.do_you_want_to_confirm
            },() => {
                dispatch(ac_activeAllRecruit(listcheck,value));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }

    const deleteAll = () => {
        const listcheck =  datas.filter(data => data.checked);
        if (listcheck.length >= 1) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.data_will_be_deleted
            },() => {
                dispatch(ac_deleteAllRecruit(listcheck));
            }));
        } else {
            toastWarning(langs.select_at_least_line);
        }
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [idShow, setIdShow] = useState(undefined);
    const handleShowDetailClick = (event,idCheck,idRecruit) => {
        dispatch(ac_showDetailRecruit(idRecruit));
        setIdShow(idCheck);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseShowDetail = () => {
        setAnchorEl(null);
    }

    const exportExcel = () => {
        const queryString = qs.parseUrl(search);
        const {query} = queryString;
        dispatch(ac_exportExcelRecruit(query));
        
    }

    return (
        <div className="fix-relative">
            <ConfirmAlert />
            <ControlPanelbutton 
                filterSerach={filterSerach} 
                createdNew ={createdNew}
                updatedNew={updatedNew}
                activeAll={activeAll}
                deleteAll={deleteAll}
                reloadPage={reloadPage}
                exportExcel={exportExcel}
            />
            <Search handleCloseSearch={handleCloseSearch} ListVacancies={ListVacancies} ListArea={ListArea} />
            <ModalDialogs />
            <div className="contentTable">
                <div className="title">
                    <h6 className="title_page">{langs.recruit}</h6>
                </div>
                
                <ListTable 
                    anchorEl={anchorEl}
                    idShow={idShow}
                    handleShowDetailClick={handleShowDetailClick}
                    handleCloseShowDetail={handleCloseShowDetail}
                    datas={datas} 
                    checkedOne={checkedOne} 
                    checkedAll={checkedAll} 
                    checkAll={checkAll} 
                    activeOne={activeOne}
                    
                />
                
                <PaginationCustom count={last_page} total={total} current_page={current_page} last_page={last_page} namepage={langs.recruit} handleSetLimitLoad={handleSetLimitLoad} />
                
            </div>
        </div>
    )
}
export default Recruit;