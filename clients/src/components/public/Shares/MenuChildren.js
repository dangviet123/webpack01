import React from 'react';
import { NavLink } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
function MenuChildren(props) {
    const {ListMenu} = props;
    
    const renderMenu = () =>{
        const {children} = ListMenu[0];
        let xhtml = null;
        xhtml =children.map((menu,index) => {
            const { MenuName,Slug } = menu;
            return (
                <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={Slug} exact={true}  activeClassName={'active'} >
                        {MenuName}
                    </NavLink>
                </li>
            );
        });
        return xhtml;
    }

    const renderMenuLoading = () => {
        let xhtml = [];
        for (let i = 0; i < 3; i++) {
            xhtml.push((
                <li className="nav-item" key={i}>
                    <Skeleton width={200} height={70} variant="text" />
                </li>
            ));
        }
        return xhtml;
    }

    return (
        <article className="phanam-nav">
            <div className="container">
                <div className="row">
                <div className="col">
                    <ul className="nav">
                        {ListMenu.length > 0 ? renderMenu() : renderMenuLoading()}
                    </ul>
                </div>
                </div>
            </div>
        </article>
    )
}

export default MenuChildren;
