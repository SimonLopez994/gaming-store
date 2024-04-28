import { combineReducers } from "redux";
import { ProductsReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
    products: ProductsReducer
})