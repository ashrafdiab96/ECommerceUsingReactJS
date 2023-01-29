import {
    CREATE_CATEGORY, GET_CATEGORIES, GET_CATEGORIES_PAGE, GET_ERROR
} from '../type';

const initial = {
    categoriesData: [],
    loading: true,
};

const categoriesReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesData: action.payload,
                loading: false,
            };
        case GET_CATEGORIES_PAGE:
            return {
                ...state,
                categoriesData: action.payload,
                loading: false,
            };
        case CREATE_CATEGORY:
            return {
                categoriesData: action.payload,
                loading: false,
            };
        case GET_ERROR:
            return {
                loading: false,
                categoriesData: action.payload,
            };
        default:
            return state;
    }
}

export default categoriesReducer;