import { combineReducers } from "redux";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";
import subcategoryReducer from "./subcategoryReducer";

export default combineReducers({
    categories: categoriesReducer,
    brands: brandsReducer,
    subcategories: subcategoryReducer,
});
