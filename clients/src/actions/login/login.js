import * as Types from '../../constants/login/login';
// dispath action
export const checkLogin = (checkLogin) => ({ // đăng nhập hệ thống
    type: Types.REQUEST_LOGIN,
    payload: {
        checkLogin
    }
});


export const checkRessetPass = (email) => ({ // đăng nhập hệ thống
    type: Types.REQUEST_RESETPASS,
    payload: {
        email
    }
});


export const checkChangePass = (checkReset) => ({ // đăng nhập hệ thống
    type: Types.REQUEST_CHANGEPASS,
    payload: {
        checkReset
    }
});

export const checkTokenChangePasss = (token) => ({ // kiểm tra token reset hợp lệ
    type: Types.REQUEST_CHECKTOKEN,
    payload: {
        token
    }
});





// LOADING
export const showLoading = (isLoading) => ({ // đăng nhập hệ thống
    type: Types.SHOW_LOADING,
    payload: {
        isLoading
    }
});

// SUBMTI
export const showSubmit = (isSubmit) => ({ // đăng nhập hệ thống
    type: Types.SHOW_SUBMIT,
    payload: {
        isSubmit
    }
});


export const submitForm = (isSubmitForm) => ({ // đăng nhập hệ thống
    type: Types.SHOW_SUBMITFORM,
    payload: {
        isSubmitForm
    }
});
export const showSearch = (isSearch) => ({ // đăng nhập hệ thống
    type: Types.SHOW_SEARCH,
    payload: {
        isSearch
    }
});