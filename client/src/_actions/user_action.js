import axios from 'axios';
import {
    LOGIN_USER
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