import React,{useEffect, useState} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import AddCpn from '../../../../components/admincp/contents/Posts/Add';
import { Divider } from '@material-ui/core';
import {ac_addPosts,ac_getListTitleGroup} from '../../../../actions/admincp/contents/Posts';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';
import {useDispatch} from 'react-redux';
import AddSlide from '../../../../components/admincp/contents/Posts/AddSlide';
import { showModalDialogs } from '../../../../actions/admincp/ModalDialogs';
import ModalDialogs from '../../../../components/admincp/Shared/ModalDialogs';
import { useSelector } from 'react-redux';
function Add() {
    const [dataImage,setDataImage] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ac_getListCategory(2));
        dispatch(ac_getListTitleGroup());
        document.title = `${langs.posts} - ${langs.add_new}`;
    }, [dispatch]);
    const addPosts = value => {
        const newValue = {...value,ImageSlide: dataImage};
        dispatch(ac_addPosts(newValue));
    }

    const handleShowAddSlide = () => { // mở form thêm mới image
        dispatch(showModalDialogs(true,'md',langs.add_image_slide,<AddSlide  handlePushImageSlide={handlePushImageSlide} dataImage={dataImage} />));
    }
    const handlePushImageSlide = datas => {
        setDataImage(datas);
    }

    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListCategory} = useSelector(state => state.ListMenu);
    const {ListGroupTitle} = useSelector(state => state.Posts);

    
 
    return (
        <div className="contentTable">
            <ModalDialogs />
            <div className="title">
                <h6 className="title_page">{langs.add_new}</h6>

            </div>
            
            <div className="table_wp">
            <Divider />
                <AddCpn 
                isSubmitForm={isSubmitForm}
                ListCategory={ListCategory}
                ListGroupTitle={ListGroupTitle}
                addPosts={addPosts} 
                handleShowAddSlide={handleShowAddSlide} 
                dataImage={dataImage}  />
            </div>
            
            
        </div>
    )
}
export default Add;
