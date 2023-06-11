import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import {
    CREATE_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORIES_BY_CATID
} from "../type";

/**
 * @method createSubcategory
 * @desc create new subcategory
 * @route POST baseUrl/api/v1/subcategories
 * @param {object} formData 
 * @returns {object}
 */
export const createSubcategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/subcategories`, formData);
        dispatch({
            type: CREATE_SUBCATEGORY,
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
 * @method getSubcategoriesByCatId
 * @desc get subcategories by parent category id
 * @route POST baseUrl/api/v1/categories/${id}/subcategories
 * @param {integer} id
 * @returns {object}
 */
export const getSubcategoriesByCatId = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
        dispatch({
            type: GET_SUBCATEGORIES_BY_CATID,
            payload: res,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err,
        });
    }
};
