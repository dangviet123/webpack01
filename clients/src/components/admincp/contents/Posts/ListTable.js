import React,{useState,forwardRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Moment from 'react-moment';
import 'moment-timezone';
import { Tooltip, FormControlLabel, Switch, IconButton, MenuItem, Menu } from '@material-ui/core';
import * as langs from '../../../../constants/admincp/languages';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkActiveOne } from '../../../../helpers/checkPermission';
import {link_event} from '../../../../constants/admincp/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LightBox from '../../../../components/admincp/Shared/LightBox';
import {useLightbox} from "simple-react-lightbox";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuIcon from '@material-ui/icons/Menu';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

export const ButtonShowImage =forwardRef((props,ref) => {
    const { openLightbox } = useLightbox()
    return <MenuItem onClick={() => props.handleShowImage(openLightbox)}> {langs.main_photo}</MenuItem>
});

export const ButtonShowImageSlide =forwardRef((props,ref) => {
    const { openLightbox } = useLightbox()
    return <MenuItem onClick={() => props.handleShowImageSlide(openLightbox)}> {langs.main_photo_slide}</MenuItem>
});
function ListTable(props) {
    const { datas,checkedOne,checkedAll,activeOne } = props;
    //check quyềm active
    const  location = useLocation();
    const {pathname} = location;
    const {ListPermision} = useSelector(state => state.SideBar);
    const arrPermission = ListPermision[pathname];
    //end check quyền active

    const [anchorEl, setAnchorEl] = useState(null);
    const [showimage,setShowImage] = useState({});
    const [images,setImages] = useState([]);
    const open = Boolean(anchorEl);
    const handleMenu = (event,data) => {
        setImages([]);
        setShowImage(data);
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShowImage = (openShow) => { // show hình ảnh
        const {Image,PostsTitle} = showimage;
        if (Image !== null && Image !== '') {
            const data_img = [{
                src: `${link_event}${Image}`,
                thumbnail: `${link_event}thumb/${Image}`,
                Description: PostsTitle
            }];
            setImages(data_img);
            setTimeout(() => {
                openShow();
            },400);
        }
        
        handleClose();
    }
    const handleShowImageSlide = (openShow) => {
        if (showimage.list_images !== null) {
            const list_images = showimage.list_images.split("||");
            let data_img = [];
            list_images.forEach(element => {
                data_img.push({
                    src: `${link_event}${element}`,
                    thumbnail: `${link_event}thumb/${element}`,
                    Description: ''
                });
            });
            setImages(data_img);
            setTimeout(() => {
                openShow();
            },400);
        }
        handleClose();
    }
    
    const renderLitsMenu = () => {
        let xhtml = null;
        xhtml = datas.map((data,index) => {
            const NameImage = (data.Image === null || data.Image === '') ? 'noimage.png' : data.Image;
            return (
                <TableRow hover key={index}>
                    
                    <TableCell align="center">
                        <Checkbox 
                        color="primary" 
                        
                        checkedIcon={<CheckBoxOutlinedIcon />}
                        checked={data.checked ? true: false} onChange={() => checkedOne(index)} />
                    </TableCell>
                    <TableCell align="center">
                        
                        <LazyLoadImage
                            src={`${link_event}thumb/${NameImage}`}
                            alt={data.PostsTitle}
                            height={35}
                            width={70}
                        />
                    </TableCell>
                    <TableCell align="left" style={{textTransform: 'lowercase'}}>{data.PostsTitle}</TableCell>
                    <TableCell align="center">{data.MenuName}</TableCell>
                    <TableCell align="center">{data.full_name}</TableCell>
                    <TableCell align="center"><Moment format="DD-MM-YYYY">{data.created_at}</Moment></TableCell>
                    <TableCell align="center">
                        <Tooltip title={langs.view_picture} placement="top"   arrow>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={(e) => handleMenu(e,data)}
                            >
                                <MoreHorizIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                    <TableCell align="center">
                        <Tooltip title={data.Active ? langs.activate : langs.inactive} placement="left" arrow>
                            <FormControlLabel className="switch_nomag"
                                control={<Switch color="primary"  checked={data.Active ? true: false}  onChange={() => activeOne(data.idPosts,data.Active)}  />}
                                disabled={checkActiveOne(arrPermission)}
                            />
                        </Tooltip>         
                    </TableCell>
                </TableRow>
            )
        });

        return xhtml;

    }
    return (
        <div className="table_wp">
            <LightBox images={images} />
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
                >
                <ButtonShowImage handleShowImage={handleShowImage} />
                <ButtonShowImageSlide handleShowImageSlide={handleShowImageSlide} />
            </Menu>
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell align="center" width={20}>
                            <Checkbox color="primary" checkedIcon={<CheckBoxOutlinedIcon />} onChange={checkedAll} />
                        </TableCell>
                        
                        <TableCell align="center" width={88}>{langs.picture}</TableCell>
                        <TableCell align="left">{langs.title}</TableCell>
                        <TableCell align="center" width={200}>{langs.category}</TableCell>
                        <TableCell align="center" width={150}>{langs.user_create}</TableCell>
                        <TableCell align="center" width={100}>{langs.date_create}</TableCell>
                        <TableCell align="center" width={20}>
                            <MenuIcon />
                        </TableCell>
                        <TableCell align="center" width={80}>{langs.status}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderLitsMenu()}
                </TableBody>
            </Table>

        </div>
    )
}
export default ListTable;
