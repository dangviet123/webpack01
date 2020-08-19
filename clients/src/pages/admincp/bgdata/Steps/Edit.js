import React, { useEffect } from 'react';
import * as langs from '../../../../constants/admincp/languages';
import EditCpn from '../../../../components/admincp/bgdata/Steps/Edit';
import { Divider } from '@material-ui/core';
import {ac_getEditSteps,ac_editSteps} from '../../../../actions/admincp/bgdata/Steps';
import {useDispatch, useSelector} from 'react-redux';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';
import {useParams} from 'react-router-dom';
function Edit() {
    const params = useParams();
    const {idSteps} = params;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListCategory} = useSelector(state => state.ListMenu);
    const {edit} = useSelector(state => state.Steps);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = `${langs.recruitment_steps} - ${langs.update_new}`;
        dispatch(ac_getListCategory(2));
        dispatch(ac_getEditSteps(idSteps));
    }, [idSteps,dispatch]);
    const editSteps = value => {
        dispatch(ac_editSteps(idSteps,value));
    }
    return (
        <div className="contentTable">
            <div className="title">
                <h6 className="title_page">{langs.update_new}</h6>
            </div>
            
            <div className="table_wp">
            <Divider />
                <EditCpn 
                editSteps={editSteps} 
                edit={edit} 
                isSubmitForm={isSubmitForm} 
                ListCategory={ListCategory} />
            </div>
            
            
        </div>
    )
}
export default Edit;
