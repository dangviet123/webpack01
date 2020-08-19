import * as Types from '../../constants/login/login';
const initialState = {
    checkLogin: {
        username: '',
        password: ''
    },
    email: '',
    checkReset: {
        password: '',
        password_confirmation: '',
        token: ''
    },
    token: ''
}
const Login = (state = initialState, action) => {
    switch (action.type) {
        case Types.REQUEST_LOGIN:
            const { checkLogin } = action.payload;
            return {...state,checkLogin: checkLogin};
        case Types.REQUEST_RESETPASS:
            const { email } = action.payload;
            return {...state,email: email};
            case Types.REQUEST_CHANGEPASS:
                const { checkReset } = action.payload;
                return {...state,checkReset: checkReset};
            case Types.REQUEST_CHECKTOKEN:
                const { token } = action.payload;
                return {...state,token: token};
        default:
            return {...state};
    }
}

export default Login;