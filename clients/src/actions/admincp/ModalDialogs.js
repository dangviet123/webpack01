import * as Types from './../../constants/admincp/ModalDialogs';
export const showModalDialogs= (open,maxWidth,Title,component) => {
    return {
        type: Types.SHOW_MODAL,
        payload: {
            open,
            maxWidth,
            Title,
            component
        }
    }
}

export const showConfirmAlert = (status,InfoTitle={},onSubmit) => ({
    type: Types.SHOW_MODAL_CONFIRM,
    payload: {
        open: status,
        InfoTitle: InfoTitle,
        onSubmit: onSubmit
    }
});