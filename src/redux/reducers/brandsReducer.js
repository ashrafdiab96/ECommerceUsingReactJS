import {
    GET_BRANDS, GET_BRANDS_PAGE, CREATE_BRAND, GET_ERROR
} from "../type";

const initial = {
    brandsData: [],
    loading: true,
};

const brandsReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brandsData: action.payload,
                loading: false,
            };
        case GET_BRANDS_PAGE:
            return {
                ...state,
                brandsData: action.payload,
                loading: false,
            }
        case CREATE_BRAND:
            return {
                brandsData: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                brandsData: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default brandsReducer;
