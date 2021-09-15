import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../_actions/types";

// state: 현재 상태
// action: 해야하는 동작
export default function (state = {}, action) {
    // action의 type으로 동작을 구분
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }

        default:
            return state;
    }
}