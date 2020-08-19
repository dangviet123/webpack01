import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { ac_editRecruit,ac_getEditRecruit } from '../../../../actions/admincp/recruitment/Recruit';
import * as langs from '../../../../constants/admincp/languages';
import EditCpn from '../../../../components/admincp/recruitment/Recruit/Edit';
import { Divider } from '@material-ui/core';
import {useParams} from 'react-router-dom';
function Edit() {
    const params = useParams();
    const dispatch = useDispatch();
    const {idRecruit} = params;
    useEffect(() => {
       document.title = `${langs.recruit} - ${langs.update_new}`;
       dispatch(ac_getEditRecruit(idRecruit));
    },[dispatch,idRecruit]);
    

    const editRecruit = (value) => {
        dispatch(ac_editRecruit(idRecruit,value));
    };
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListArea,ListVacancies,edit} = useSelector(state => state.Recruit);
    return (
        <div className="contentTable">
            <div className="title">
                <h6 className="title_page">{langs.update_new}</h6>

            </div>
            
            <div className="table_wp">
            <Divider />
                <EditCpn
                    isSubmitForm={isSubmitForm}
                    editRecruit={editRecruit}
                    ListArea={ListArea}
                    ListVacancies={ListVacancies}
                    edit={edit}
                />
            </div>
            
            
        </div>
    )
}
export default Edit;
