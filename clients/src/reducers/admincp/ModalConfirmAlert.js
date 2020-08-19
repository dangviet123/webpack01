import * as Types from '../../constants/admincp/ModalDialogs';
const initialState = {
    open: false,
    InfoTitle: {},
    onSubmit: null
}
const AlertConfirm =  (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_MODAL_CONFIRM:
            const { open,InfoTitle,onSubmit } = action.payload;
            if (open === false) {
                return {...state,open:open};
            }else{
                return {...state,open:open,InfoTitle:InfoTitle,onSubmit:onSubmit};
            }
        default:
            return {...state};
    } 
}
export default AlertConfirm;
