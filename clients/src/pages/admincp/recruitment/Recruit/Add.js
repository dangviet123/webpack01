import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { ac_addRecruit,ac_getAddRecruit } from '../../../../actions/admincp/recruitment/Recruit';
import * as langs from '../../../../constants/admincp/languages';
import AddCpn from '../../../../components/admincp/recruitment/Recruit/Add';
import { Divider } from '@material-ui/core';
function Add() {
    const dispatch = useDispatch();
    useEffect(() => {
       document.title = `${langs.recruit} - ${langs.add_new}`;
       dispatch(ac_getAddRecruit());
    },[dispatch]);
    
    const addRecruit = value => { // THÊM MỚI => SAGA
        dispatch(ac_addRecruit(value));
    };
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListArea,ListVacancies} = useSelector(state => state.Recruit);
    return (
        <div className="contentTable">
            <div className="title">
                <h6 className="title_page">{langs.add_new}</h6>

            </div>
            
            <div className="table_wp">
            <Divider />
                <AddCpn 
                isSubmitForm={isSubmitForm}
                addRecruit={addRecruit}
                ListArea={ListArea}
                ListVacancies={ListVacancies}
                />
            </div>
            
            
        </div>
    )
}
export default Add;
