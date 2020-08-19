import React from 'react';
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
import { IconButton } from '@material-ui/core';

function Footer() {
    const {datas} = useSelector(state => state.Header);
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



    return (
        <footer className="phanam-footer-1">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <ul className="nav">
                        {datas.length > 0 ? renderMenu() : ''}
                    </ul>
                </div>
                <div className="col-12">
                    <div className="info-wrapper">
                    <h3>Công ty Cổ Phần Dược Pha Nam</h3>
                    <p>436 Cao Thắng, Phường 12, Quận 10  -  Điện thoại: 028 6265 1638  -  Fax: 028 3863 0394 - 028 6293 4277  -  Email: info@phanam.com.vn</p>
                    
                        <p>www.phanam.com.vn</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="bot-wrapper">
                    <div className="copyright">
                        <h4>© {new Date().getFullYear()} Công Ty Cổ Phần Dược Pha Nam - Thiết Kế : CTy TNHH Tư Vấn Thiết Kế Phần Mềm Cánh Cam - Lập trình hệ thống TEAM IT SOFTWARE PHANAM</h4>
                    </div>
                    <div className="social-wrapper">
                    <IconButton style={{color: 'white'}}><i className="fa fa-facebook" /></IconButton>
                    <IconButton style={{color: 'white'}}><i className="fa fa-google" /></IconButton>
                    <IconButton style={{color: 'white'}}><i className="fa fa-youtube" /></IconButton>
                    <IconButton style={{color: 'white'}}><i className="fa fa-twitter" /></IconButton>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
