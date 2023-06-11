import { CREATE_USER, FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER } from "../type";

const initial = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    forgetPassword: [],
    loading: true,
};

const authReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                createUser: action.payload
            };
        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload
            };
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
