import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
    CREATE_CATEGORY, GET_CATEGORIES, GET_CATEGORIES_PAGE, GET_ERROR
} from "../type";

/**
 * @method getCategories
 * @desc get all categories
 * @route GET baseUrl/api/v1/categories
 * @param {integer} limit
 * @returns {object}
 */
export const getCategories = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}`);
        dispatch({
            type: GET_CATEGORIES,
            payload: res,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err,
        });
    }
}

/**
 * @method getCategoriesPage
 * @desc get some categories (pagination)
 * @route GET baseUrl/api/v1/categories?limit={limit}&page={page}
 * @returns {object}
 */
export const getCategoriesPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_CATEGORIES_PAGE,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err
        });
    }
}

/**
 * @method createCategory
 * @desc create new
 * @route POST baseUrl/api/v1/categories
 * @returns {object}
 */
export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
            payload: res,
            loading: true,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err
        });
    }
}
