import { useInsertData } from "../../hooks/useInsertData";
import {
    CREATE_SUBCATEGORY, GET_ERROR,
} from "../type";

/**
 * @method createSubcategory
 * @desc create new subcategory
 * @route POST baseUrl/api/v1/subcategories
 * @param {integer} limit 
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
