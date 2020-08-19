import React,{useEffect,useState} from 'react';
import { NavLink,useHistory } from "react-router-dom";
import ClearAllIcon from '@material-ui/icons/ClearAll';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import { IconButton } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import { ac_fetchMenu } from '../../../actions/public/Home/Header';
import Skeleton from '@material-ui/lab/Skeleton';
function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {datas} = useSelector(state => state.Header);
    useEffect(() => {
        dispatch(ac_fetchMenu());
    }, [dispatch]);


    const renderMenu = () =>{
        let xhtml = null;
        xhtml =datas.map((menu,index) => {
            const { MenuName,Slug,children } = menu;
            let NewSlug = Slug;
            if (children.length > 0 && (Slug=== '/Introduce' || Slug=== '/contact-support')) {
                NewSlug = children[0].Slug;
            }
            return (
                <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={NewSlug} exact={true}  activeClassName={'active'} >
                        {MenuName}
                    </NavLink>
                </li>
            );
        });
        return xhtml;
    }

    function loactionHomePage(){
        history.push('/');
    }

    const [open,setOpen] = useState(0);
    const handleShowMenu = () => {
        setOpen(open === 0 ? 300 : 0);
    }

    const renderHeaderLoading = () => {
        return (
            <div className="container menu-bar">
                <div className="mainnav">
                    <div className="nav-top ml-auto">
                        <div className="hotline"><Skeleton variant="text" width={128} /></div>
                        <div className="mail"><Skeleton variant="text" width={167} /></div>
                        
                        <ul className="nav social">
                            <li className="nav-item"><Skeleton variant="text" width={20} /></li>
                            <li className="nav-item"><Skeleton variant="text" width={20} /></li>
                            <li className="nav-item"><Skeleton variant="text" width={20} /></li>
                            <li className="nav-item"><Skeleton variant="text" width={20} /></li>
                        </ul>
                        <IconButton
                            onClick={handleShowMenu}
                            className="btn-open-menu"
                            color="primary">
                            <ClearAllIcon />
                        </IconButton>
                    </div>
                    <div className="nav-bottom ml-auto">
                        <ul className="nav zonelist">
                            {renderMenu()}
                        </ul>
                        <div className="box_search"></div>
                    </div>
                </div>
            </div>
        )
    }

    const renderListMenu = () => {
        return (
            <div className="container menu-bar">
                <div className="logo" style={{cursor: 'pointer'}} onClick={loactionHomePage} >
                    <img src={`asset/img/logo.png`} alt="" />
                </div>
                <div className="mainnav">
                    <div className="nav-top ml-auto">
                        <div className="hotline"><a className="nav-link" href="./">
                            <h4> <EmailIcon style={{color: '#6cade3'}} /> 028 6265 1638 </h4></a></div>
                        <div className="mail"><a className="nav-link" href="xx"> 
                            <h4> <LocalPhoneIcon style={{color: '#6cade3'}} />info@phanam.com.vn</h4></a></div>
                        
                        <ul className="nav social">
                            <li className="nav-item"><a className="nav-link" href="./"> <span className="fa fa-facebook" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="./"> <span className="fa fa-twitter" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="./"> <span className="fa fa-google" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="./"> <span className="fa fa-youtube" /></a></li>
                        </ul>
                        <IconButton
                            onClick={handleShowMenu}
                            className="btn-open-menu"
                            color="primary">
                            <ClearAllIcon />
                        </IconButton>
                    </div>
                    <div className="nav-bottom ml-auto" style={{right: open}} >
                        <ul className="nav zonelist">
                            {renderMenu()}
                        </ul>
                        <div className="box_search"></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <header className="phanam-header-1">
            {datas.length > 0 ? renderListMenu() : renderHeaderLoading()}
        </header>
    )
}



export default Header;
