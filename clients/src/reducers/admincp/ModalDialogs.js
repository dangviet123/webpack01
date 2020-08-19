import * as Types from '../../constants/admincp/ModalDialogs';
const initialState = {
    open: false,
    maxWidth: 'sm',
    Title: '',
    component: ''

}
const ModalDialogs = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_MODAL:
            const { open,maxWidth,Title,component } = action.payload;
            if (open === true) {
                return {...state,open: open,maxWidth: maxWidth,Title: Title,component: component};
            }else{
                return {...state,open: open};
            }
            
        default:
            return {...state};
    }
}

export default ModalDialogs;