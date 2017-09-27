import * as types from '../../actions/types';
import * as obj from '../../actions/access/LoginAction';

const LoginReducer = (state = obj.getState(), action) => {
    switch (action.type) {
        case types.CHECK_LOGIN:
        case types.CHECK_LOGIN_SUCCESS:
        case types.LOGIN:
        case types.LOGIN_SUCCESS:
        case types.LOGIN_FAIL:
            return action;
        default:
            return state;
    }
};

export default LoginReducer;
