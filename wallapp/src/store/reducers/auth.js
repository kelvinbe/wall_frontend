import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utitlity'
import { authLogin } from '../actions/auth';

const initialState = {
    token: null,
    error: null,
    loading: false,
    isAuthenticated: false,
    user: null
}



const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        isAuthenticated: false,
        loading: true
    })
}


const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        isAuthenticated: true,
        loading: false

    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}


const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        isAuthenticated: false
    })
}

const userLoading = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

const userLoaded = (state, action) => {
    return updateObject(state, {
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
    })
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGIN: return authLogin(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.USER_LOADING: return userLoading(state, action);
        case actionTypes.USER_LOADED: return userLoaded(state, action);

        default:
            return state;
    }
}

export default reducer;


















