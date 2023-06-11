import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { GET_ERROR, CREATE_USER, LOGIN_USER, GET_CURRENT_USER, FORGET_PASSWORD } from "../type";

export const createUser = (formData) => async (dispatch) => {
    try {
        const response = await useInsertData('/api/v1/auth/signup', formData);
        dispatch({
            type: CREATE_USER,
            payload: response,
            loading: true
        });

    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: `Error ${err.response}`
        });
    }
};

export const loginUser = (formData) => async (dispatch) => {
    const response = await useInsertData('/api/v1/auth/login', formData);
    try {
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: `Error ${err.response}`
        });
    }
};

export const getLoggedUser = () => async (dispatch) => {
    // const response = await useGetDataToken(`/api/v1/users/getMe`);
    const response = await useGetData(`/api/v1/users/getMe`);
    try {
        dispatch({
            typr: GET_CURRENT_USER,
            payload: response,
            loading: true
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: `Error ${err.response}`
        });
    }
};

export const forgetPassword = (formData) => async (dispatch) => {
    const response = await useInsertData(`api/v1/auth/forgetPassword`, formData);
    try {
        dispatch({
            typr: FORGET_PASSWORD,
            payload: response,
            loading: true
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: `Error ${err.response}`
        });
    }
}
