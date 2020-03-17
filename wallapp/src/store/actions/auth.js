import * as actionTypes from './actionTypes';
import axios from 'axios'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}


export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch =>{
        setTimeout(() => {
            dispatch(logout());

        }, expirationTime * 1000)
    }
}


export const authLogin = (username, password, email, token) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/login', {
            username: username,
            password: password,
            email: email,
            token: token
        })
        .then(res => {
            const token = res.data.token;
            console.log('user_token: ', token)
            const expirationDate = new Date(new Date().getDate() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            // eslint-disable-next-line no-undef
            dispacth(checkAuthTimeout(3600));

        })
        .catch(err => {
            // eslint-disable-next-line no-undef
            dispatch(authFail(err))
        })

       
    }
}


export const authRegister = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/register', {
            username: username,
            email: email,
            password: password,
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token === undefined) {
            dispatch(logout());
        }else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            }else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}

