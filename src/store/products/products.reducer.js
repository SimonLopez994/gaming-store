import { ACTION_TYPES } from "./products.types";
const INITIAL_STATE = {
    products: []
}

export const ProductsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.SET_PRODUCTS_ARRAY:
            return { ...state, products: payload }
        default:
            return state
    }
}