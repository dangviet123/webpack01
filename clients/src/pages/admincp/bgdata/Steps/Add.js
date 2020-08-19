import React,{useEffect} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import AddCpn from '../../../../components/admincp/bgdata/Steps/Add';
import { Divider } from '@material-ui/core';
import {ac_addSteps} from '../../../../actions/admincp/bgdata/Steps';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';
import {useDispatch} from 'react-redux';
function Add() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ac_getListCategory(2));
        document.title = `${langs.recruitment_steps} - ${langs.add_new}`;
    }, [dispatch]);
    const addSteps = value => {
        dispatch(ac_addSteps(value));
    }
    return (
        <div className="contentTable">
            <div className="title">
                <h6 className="title_page">{langs.add_new}</h6>
            </div>
            
            <div className="table_wp">
            <Divider />
                <AddCpn addSteps={addSteps} />
            </div>
            
            
        </div>
    )
}
export default Add;
