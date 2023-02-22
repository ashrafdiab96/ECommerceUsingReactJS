import {
    CREATE_PRODUCT, GET_PRODUCTS, GET_ERROR,
    GET_PRODUCT, GET_SIMILAR_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT
} from '../type';

const initial = {
    getProductsData: [],
    getProductData: [],
    createProductsData: [],
    similarProductsData: [],
    deleteProductData: [],
    getProductsPageData: [],
    updateProductData: [],
    loading: true,
};

const productsReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                getProductsData: action.payload,
                loading: false,
            };
        case GET_PRODUCT:
            return {
                ...state,
                getProductData: action.payload,
                loading: false,
            };
        case CREATE_PRODUCT:
            return {
                createProductsData: action.payload,
                loading: false,
            };
        case GET_SIMILAR_PRODUCTS:
            return {
                ...state,
                similarProductsData: action.payload,
                loading: false,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProductData: action.payload,
                loading: false,
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProductData: action.payload,
                loading: false,
            };
        case GET_ERROR:
            return {
                loading: false,
                productsData: action.payload,
            };
        default:
            return state;
    }
}

export default productsReducer;
