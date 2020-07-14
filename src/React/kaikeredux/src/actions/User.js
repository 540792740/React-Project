import * as userConstants from '../constances/User'

export const login() =>{
    return{
        type: userConstants.USER_LOGIN,
        payload,
    }
}

export const logout(payload) => {
    return{
        type: userConstants.USER_LOGOUT,
        payload,
    }
}
export const update(payload) => {
    return{
        type: userConstants.USER_UPDATE,
        payload,
    }
}

