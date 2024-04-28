import { createAction } from "../../utils/reducer.utils";
import { ACTION_TYPES } from "./products.types";

export const setProducts = (productsArray) => createAction(ACTION_TYPES.SET_PRODUCTS_ARRAY, productsArray)