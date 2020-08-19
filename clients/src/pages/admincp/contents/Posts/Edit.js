import React,{useEffect, useState} from 'react';
import * as langs from '../../../../constants/admincp/languages';
import EditCpn from '../../../../components/admincp/contents/Posts/Edit';
import { Divider } from '@material-ui/core';
import {ac_editPosts,ac_getListTitleGroup, ac_getEditPosts} from '../../../../actions/admincp/contents/Posts';
import {ac_getListCategory}  from '../../../../actions/admincp/bgdata/MenuType';
import {useDispatch} from 'react-redux';
import EditSlide from '../../../../components/admincp/contents/Posts/EditSlide';
import { showModalDialogs } from '../../../../actions/admincp/ModalDialogs';
import ModalDialogs from '../../../../components/admincp/Shared/ModalDialogs';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
function Edit() {
    const params = useParams();
    const {idPosts} = params;
    const [dataImage,setDataImage] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ac_getListCategory(2));
        dispatch(ac_getListTitleGroup());
        dispatch(ac_getEditPosts(idPosts));
        document.title = `${langs.posts} - ${langs.update_new}`;
    }, [dispatch,idPosts]);

    

    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const {ListCategory} = useSelector(state => state.ListMenu);
    const {ListGroupTitle} = useSelector(state => state.Posts);
    const {edit,ImageSlide} = useSelector(state => state.Posts);
    useEffect(() => {
        setDataImage(ImageSlide);
    }, [ImageSlide]);
    const editPosts = value => {
        const newValue = {...value,ImageSlide: dataImage};
        dispatch(ac_editPosts(idPosts,newValue));
    }

    const handleShowAddSlide = () => { // mở form thêm mới image
        dispatch(showModalDialogs(
            true,
            'md',
            langs.add_image_slide,
            <EditSlide  handlePushImageSlide={handlePushImageSlide} dataImage={dataImage} />));
    }
    const handlePushImageSlide = datas => {
        setDataImage(datas);
    }

    return (
        <div className="contentTable">
            <ModalDialogs />
            <div className="title">
                <h6 className="title_page">{langs.update_new}</h6>

            </div>
            
            <div className="table_wp">
            <Divider />
                <EditCpn 
                    editPosts={editPosts}
                    edit={edit}
                    handleShowAddSlide={handleShowAddSlide} 
                    dataImage={dataImage}  
                    ListCategory={ListCategory}
                    isSubmitForm={isSubmitForm}
                    ListGroupTitle={ListGroupTitle}
                />
            </div>
            
            
        </div>
    )
}
export default Edit;
