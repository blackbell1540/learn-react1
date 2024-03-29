import axios from 'axios';
import {
    AUTH_USER,
    LOGIN_USER, REGISTER_USER
} from './types'

export function loginUser(dataToSubmit) {
    // 서버에서 받은 data를 request에 저장
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data);

    // reducer로 리턴
    return {
        type: LOGIN_USER,
        payload: request
    }
}

// 회원가입
export function registerUser(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

// auth
export function auth() {
    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}