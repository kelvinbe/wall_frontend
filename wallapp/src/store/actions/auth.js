import * as actionTypes from './actionTypes';
import axios from 'axios'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL,
        // eslint-disable-next-line no-undef
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


export const authLogin = (username, password, email) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/login', {
            username: username,
            password: password,
            email: email
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getDate() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            // eslint-disable-next-line no-undef
            dispacth(checkAuthTimeout(3600));

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

