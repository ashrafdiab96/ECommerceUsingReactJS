import { combineReducers } from "redux";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import subcategoryReducer from "./subcategoryReducer";
import authReducer from "./authReducer";

export default combineReducers({
    categories: categoriesReducer,
    brands: brandsReducer,
    subcategories: subcategoryReducer,
    products: productsReducer,
    authReducer: authReducer,
});
