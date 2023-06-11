import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
    GET_BRANDS, GET_BRANDS_PAGE, CREATE_BRAND, GET_ERROR
} from "../type";

/**
 * @method getBrands
 * @desc get all brnads
 * @route GET baseUrl/api/v1/brands
 * @param {integer} limit 
 * @returns {object}
 */
export const getBrands = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type: GET_BRANDS,
            payload: res,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err,
        });
    }
};

/**
 * @method getBrandsPage
 * @desc get all brnads (pagination)
 * @route GET baseUrl/api/v1/brands?limit={limit}&page={page}
 * @param {integer} limit 
 * @returns {object}
 */
export const getBrandsPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_BRANDS_PAGE,
            payload: res,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err,
        });
    }
};

/**
 * @method createBrand
 * @desc create new brnad
 * @route POST baseUrl/api/v1/brands
 * @param {integer} formData
 * @returns {object}
 */
export const createBrand = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
            payload: res,
            loading: true,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err,
        });
    }
};
