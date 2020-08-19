import React, { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Grid, DialogContent, Button, Icon, DialogActions, FormControlLabel, Checkbox } from "@material-ui/core";
import * as langs from '../../../../constants/admincp/languages';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import Skeleton from '@material-ui/lab/Skeleton';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import { ac_checkOnePermission, ac_checkAllPermission, ac_savePermission } from "../../../../actions/admincp/bgdata/MenuType";
function AddPermission(props) {
    const {idMenu,idTypeMenu} = props;
    const dispatch = useDispatch();
    const {Listpermision} = useSelector(state => state.ListMenu);
    const {isSubmitForm} = useSelector(state => state.loadSubmitForm);
    const [checkAll,setCheckAll] = useState(false);

    const handleCheckOnePermission = index => {
        dispatch(ac_checkOnePermission(index));
    }

    const handleCheckAllPermission = () => {
        setCheckAll(!checkAll);
        dispatch(ac_checkAllPermission(!checkAll))
    }

    const handleSavePermission = () => {

        const list_check = Listpermision.filter(ls => ls.checked === 1);
        let list_check_new = [];
        if (list_check.length > 0) {
            list_check.forEach(element => {
                const {idListPermission} = element;
                list_check_new.push(idListPermission);
            });
        }
        const data = {
            idMenu: idMenu,
            idTypeMenu: idTypeMenu,
            idPermission: list_check_new
        }
        dispatch(ac_savePermission(data));
    }

    const renderList = () => {
        let xhtml = null;
        xhtml = Listpermision.map((list,index) => {
            return (
                <Grid item md={3} xs={6} key={index}>
                    <FormControlLabel
                        control={
                        <Checkbox checkedIcon={<CheckBoxOutlinedIcon />} color="primary" checked={list.checked ===1 ? true : false} onClick={() => handleCheckOnePermission(index)} />}
                        label={list.ListPermissionName}
                        
                    />
                </Grid>
            );
        });

        return xhtml;
    }

    const renderLoad = () => {
        let xhtml = [];
        for (let i = 0; i < 20; i++) {
            xhtml.push(
                <Grid item md={3} xs={6} key={i}>
                    <Skeleton height={35} animation="wave"  />
                </Grid>
            )
        }
        return xhtml;
    }
    return (
        <div>
        
            <DialogContent style={{overflow: 'hiden'}}>
                <Grid container spacing={2} >
                    {Listpermision.length > 0 ? renderList() : renderLoad()}
                    
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSavePermission} color="primary" type="submit" variant="contained" startIcon={!isSubmitForm ?<AddIcon /> : <Icon color="inherit" className="fa fa-spinner fa-spin" />} disableElevation={isSubmitForm}>
                    {langs.SAVES}
                </Button>
                <Button  color="secondary"   variant="contained" startIcon={<CheckIcon />} onClick={handleCheckAllPermission} >
                    {langs.select_all}
                </Button>
            </DialogActions>
        </div>
    )
}
export default AddPermission;
