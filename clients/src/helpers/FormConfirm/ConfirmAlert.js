import React,{ useState, useEffect } from 'react';
import FormConfirm from './FormConfirm';
import {useSelector,useDispatch} from 'react-redux';
import {showConfirmAlert} from '../../actions/admincp/ModalDialogs';
function ConfirmAlert() {
    const dispatch = useDispatch();
    const {open,InfoTitle,onSubmit} = useSelector(state => state.AlertConfirm);
    
    const {Title,Text} = InfoTitle;
    const [isConfirm, setIsConfirm] = useState(false);
    const handleClose = () => {
        if (isConfirm === false) {
            setIsConfirm(false);
            dispatch(showConfirmAlert(false,null,null));
        }
        
    };
    const handleGetSubmit = async () => {
        const result = await onSubmit();
        return result;
    }
    const handleConfirm = async () => {
        if (isConfirm === false) {
            setIsConfirm(true);
            handleGetSubmit();
        }
        
        
    }

    useEffect(() => {
        setIsConfirm(false);
    },[open]);
    return (
        <div>
            <FormConfirm Title={Title} Text={Text} isConfirm={isConfirm} isOpen={open} handleClose={handleClose} handleConfirm={handleConfirm}  />
        </div>
    )
}

export default ConfirmAlert;
