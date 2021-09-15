import { LOGIN_USER } from "../_actions/types";

// state: 현재 상태
// action: 해야하는 동작
export default function (state = {}, action) {
    // action의 type으로 동작을 구분
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload };
        default:
            return state;
    }
}