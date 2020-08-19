import React, {useState,useEffect,Fragment } from 'react';
import { DialogContent, Divider, Tooltip, List, ListItem, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import * as langs from '../../../../constants/admincp/languages';
import DeleteIcon from '@material-ui/icons/Delete';
import { ReactSortable } from "react-sortablejs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {link_event} from '../../../../constants/admincp/config';
import Fab from '@material-ui/core/Fab';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ConfirmAlert from '../../../../helpers/FormConfirm/ConfirmAlert';
import {showConfirmAlert} from '../../../../actions/admincp/ModalDialogs';
import { useDispatch } from 'react-redux';
import {ac_deleteImageSlide} from '../../../../actions/admincp/contents/Posts';
const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
    button_upload: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    image: {
        '&>img': {
            width: 70,
            height: 35
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: 10
    },
    listItem: {
        cursor: "pointer",
        border: "1px solid #e0e0e0",
        marginBottom: 3,
        padding: 0

    },
    listAvt: {
        minWidth: 35
    }
}));
function EditSlide(props) {
    const {handlePushImageSlide,dataImage} = props;
    const [images,setImages] = useState(dataImage);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        handlePushImageSlide(images);
    },[images,handlePushImageSlide]);
    const handleChangeImageSlide = (ev) => {
        const files = ev.target.files;
        let promises = [];
        for (let i = 0; i < files.length; i++) {
            let filePromise = new Promise(resolve => {
                let reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = () => resolve({
                    name_image: reader.result,
                    idPosts: 0,
                    idPostsSlide: 0
                });
            });
            promises.push(filePromise);
            Promise.all(promises).then(fileContents => {
                setImages(images.concat(fileContents));
            });
        }
    }

    const handleDelete = index => {
        const newimages = images.filter((img,idx) => idx !==index);
        const {idPosts,idPostsSlide} = images[index];
        const data = {idPosts: idPosts,idPostsSlide: idPostsSlide};
        if (idPosts > 0) {
            dispatch(showConfirmAlert(true,{
                Title: langs.NOTIFICATION,
                Text: langs.data_will_be_deleted
            },() => {
                dispatch(ac_deleteImageSlide(data));
                setTimeout(() => {
                    setImages(newimages);
                },400);
            }));
        }else {
            setImages(newimages);
        }
    }
    const renderListFile = () => {
        let  xhtml = null;
        xhtml = images.map((image,index) => {
        return (
            <Fragment key={index}>
                <ListItem  className={classes.listItem}>
                    <IconButton color={image.idPosts > 0 ? `secondary` : `default`} >
                        <DehazeIcon fontSize="inherit" />
                    </IconButton>
                    <div className={classes.image}>
                        <LazyLoadImage
                            src={image.idPosts === 0 ? image.name_image : `${link_event}/thumb/${image.name_image}`}
                            alt={``}
                        />
                    </div>
                    <ListItemSecondaryAction>
                    <Tooltip title={langs.deleted} placement="left"   arrow>
                        <Fab
                            variant="extended"
                            color="secondary"
                            aria-label="add"
                            size="small" onClick={() => handleDelete(index)}
                        ><DeleteIcon fontSize="small" /></Fab>
                    </Tooltip>
                    </ListItemSecondaryAction>
                </ListItem>
            </Fragment>
            );
        });
        return xhtml;
    }


    return (
        <div>
            <ConfirmAlert />
            <DialogContent style={{overflow: 'hiden'}}>
                <div className={classes.button_upload}>
                    <input
                        multiple
                        accept="image/*"
                        type="file"
                        className={classes.input}
                        id="file_slide"
                        value=""
                        onChange={handleChangeImageSlide}
                    />
                    <label htmlFor="file_slide">
                        <Tooltip title={langs.add_image_slide} placement="left"   arrow>
                            <Button variant="contained" color="primary" component="span" startIcon={<AddPhotoAlternateIcon />}  style={{textTransform: 'capitalize'}}>
                                {langs.add_image}
                            </Button>
                        </Tooltip>
                    </label>
                </div>
                <div className={classes.content_file}>
                    <List  className={classes.list} component="nav">
                        <ReactSortable 
                            list={images} setList={setImages}
                            group="groupName"
                            animation={200}
                            delayOnTouchStart={true}
                            delay={2}
                        >
                            {renderListFile()}
                        </ReactSortable>
                    </List>
                </div>
            </DialogContent>

            <Divider />
        </div>
    )
}
export default EditSlide;
