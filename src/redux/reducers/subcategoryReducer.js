import {
    CREATE_SUBCATEGORY, GET_ERROR,
} from "../type";

const initial = {
    subcategoriesData: [],
    loading: true,
};

const subcategoryReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {
                subcategoriesData: action.payload,
                loading: false,
            };
        case GET_ERROR:
            return {
                subcategoriesData: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default subcategoryReducer;
