import useDeleteData from "../../hooks/useDeleteData";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import {
    CREATE_PRODUCT, GET_PRODUCTS, GET_ERROR,
    GET_PRODUCT, GET_SIMILAR_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT
} from "../type";

/**
 * @method getProducts
 * @desc get all products
 * @route GET baseUrl/api/v1/products
 * @param {integer} limit
 * @returns {object}
 */
export const getProducts = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_PRODUCTS,
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
 * @method getProduct
 * @desc get specific prduct by id
 * @route GET baseUrl/api/v1/products/:id
 * @returns {object}
 */
export const getProduct = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT,
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
 * @method createProduct
 * @desc create new porduct
 * @route POST baseUrl/api/v1/porducts
 * @returns {object}
 */
export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/products`, formData);
        dispatch({
            type: CREATE_PRODUCT,
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

/**
 * @method getSimilarProducts
 * @desc get products similar product category
 * @route POST baseUrl/api/v1/porducts?category=:catId
 * @returns {object}
 */
export const getSimilarProducts = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_SIMILAR_PRODUCTS,
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
 * @method deleteProduct
 * @desc delete a specific product via it's id
 * @route DELETE baseUrl/api/v1/porducts/:id
 * @returns {object}
 */
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
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
 * @method getProductsPage
 * @desc get some products (pagination)
 * @route GET baseUrl/api/v1/porducts?limit=${limit}&page=${page}
 * @returns {object}
 */
export const getProductsPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_PRODUCTS,
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
 * @method updateProduct
 * @desc update porduct
 * @route PUT baseUrl/api/v1/porducts/:id
 * @returns {object}
 */
export const updateProduct = (id, formData) => async (dispatch) => {
    try {
        const res = await useUpdateDataWithImage(`/api/v1/products/${id}`, formData);
        dispatch({
            type: UPDATE_PRODUCT,
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

/**
 * @method getProductsSearch
 * @desc search products by query string
 * @route GET baseUrl/api/v1/porducts?queryString
 * @returns {object}
 */
export const getProductsSearch = (queryString) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_PRODUCTS,
            payload: res,
        });
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: 'error ' + err,
        });
    }
};
