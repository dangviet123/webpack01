import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles';
import Divider from '@material-ui/core/Divider';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton, Icon } from '@material-ui/core';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useSelector,useDispatch } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import {ac_getSideBar} from '../../../../actions/admincp/SiderBar';
import Footer from '../Footer';
import Skeleton from '@material-ui/lab/Skeleton';
import 'font-awesome/css/font-awesome.min.css';
function SideBar(props) {
    //const matches = useMediaQuery('(max-width:952px)');
    const dispatch = useDispatch()
    const { open,openMenuDrawer } = props;
    useEffect(() => {
        dispatch(ac_getSideBar());
    },[dispatch]);
    const classes = useStyles();
    const {datas} = useSelector(state => state.SideBar);
    const handleonNodeToggle =(ev,value) => {
        sessionStorage.setItem('defaultExpanded', JSON.stringify(value));
    }

    const checked_menu = sessionStorage.getItem('defaultExpanded') !== null ?  JSON.parse(sessionStorage.getItem('defaultExpanded')) : [];

    const renderMenu = (data) => {
        return data.map((per,index) => {
            if (per.children.length ===0) {
                return (
                <Link to={per.Slug} className={classes.menuLink} key={index}>
                    <TreeItem 
                        nodeId={`${per.idMenu}`} 
                        label={
                        <div className={classes.parent_icon}>
                            <Icon className={per.Icon} fontSize="small"></Icon> 
                            <span className={classes.title_text}>{per.MenuName}</span>
                        </div>
                    } 
                    />
                </Link>
                )
            }else{
                return (
                        <TreeItem key={index}
                            label={
                            <div className={classes.parent_icon}>
                                <Icon className={per.Icon} fontSize="small"></Icon> 
                                <span className={classes.title_text}>{per.MenuName}</span>
                            </div>
                            } 
                            nodeId={`${per.idMenu}`} 
                            >
                            {renderMenu(per.children)}
                        </TreeItem>
                )
            }
        });
    
    }

    const renderMenuLoading = () => {
        return (
            <div>
                <Skeleton variant="text" height={40} width={`100%`} />
                <Skeleton variant="text" height={40} width={`100%`} />
                <Skeleton variant="text" height={40} width={`100%`} />
                <Skeleton variant="text" height={40} width={`100%`} />
                <Skeleton variant="text" height={40} width={`100%`} />
                <Skeleton variant="text" height={40} width={`100%`} />
            </div>
        )
    }

    const renderMenulist = ()=> {
        return (
            <TreeView
                onNodeToggle={handleonNodeToggle}
                style={{height: 240,
                flexGrow: 1,
                maxWidth: 400, position: 'relative'}}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                defaultExpanded={checked_menu}
            >
                {renderMenu(datas)}
            </TreeView>
        )
    }
    

    return (
        <div className="side_bar">
            <div className={classes.drawerHeader}>
                <IconButton onClick={openMenuDrawer} style={{color: 'white'}}>
                    {open===true ? <ClearAllIcon /> : ''}
                </IconButton>
            </div>
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <Divider />
            
            {datas.length > 0 ? renderMenulist() : renderMenuLoading()}
            
        </Drawer>
        <Footer open={open} />
      </div>
    )
}
export default SideBar;
