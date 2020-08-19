import React, { useEffect } from 'react';
import * as langs from '../../../../constants/admincp/languages';
import EditCpn from '../../../../components/admincp/bgdata/Slider/Edit';
import { Divider } from '@material-ui/core';
import {ac_getEditSlider,ac_editSlider} from '../../../../actions/admincp/bgdata/Slider';
import {useDispatch, useSelector} from 'react-redux';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';
import {useParams} from 'react-router-dom';
function Edit() {
    const params = useParams();
    const {idSlider} = params;
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListCategory} = useSelector(state => state.ListMenu);
    const {edit} = useSelector(state => state.Slider);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = `${langs.banner_image} - ${langs.update_new}`;
        dispatch(ac_getListCategory(2));
        dispatch(ac_getEditSlider(idSlider));
    }, [idSlider,dispatch]);
    const editSlider = value => {
        dispatch(ac_editSlider(idSlider,value));
    }
    return (
        <div className="contentTable">
            <div className="title">
                <h6 className="title_page">{langs.update_new}</h6>
            </div>
            
            <div className="table_wp">
            <Divider />
                <EditCpn 
                editSlider={editSlider} 
                edit={edit} 
                isSubmitForm={isSubmitForm} 
                ListCategory={ListCategory} />
            </div>
            
            
        </div>
    )
}
export default Edit;
