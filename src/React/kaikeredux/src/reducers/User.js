import * as userConstants from '../constances/User'

export default function (state ={}, action) {
    switch (action.type) {
        case userConstants.USER_LOGIN:
            return{
                ...state,
                ...action.payload,
                isLogin: true,
            }
        case userConstants.USER_LOGOUT:
            return{
                isLogin: false,
            }
        case userConstants.USER_UPDATE:
            break;
    }
}
