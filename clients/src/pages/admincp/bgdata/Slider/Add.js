import React,{useEffect} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import AddCpn from '../../../../components/admincp/bgdata/Slider/Add';
import { Divider } from '@material-ui/core';
import {ac_addSlider} from '../../../../actions/admincp/bgdata/Slider';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';
import {useDispatch} from 'react-redux';
function Add() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ac_getListCategory(2));
        document.title = `${langs.banner_image} - ${langs.add_new}`;
    }, [dispatch]);
    const addSlider = value => {
        dispatch(ac_addSlider(value));
    }
    return (
        <div className="contentTable">
            <div className="title">
                <h6 className="title_page">{langs.add_new}</h6>
            </div>
            
            <div className="table_wp">
            <Divider />
                <AddCpn addSlider={addSlider} />
            </div>
            
            
        </div>
    )
}
export default Add;
