import { createSelector } from "reselect"

const selectProductsReducer = (state) => state.products

export const selectProductsArray = createSelector(
    [selectProductsReducer],
    (productsArray) => productsArray.products
)

export const selectProductsMap = createSelector(
    [selectProductsArray],
    (products) => products.reduce((acc, product) => {
        const { title, items } = product;
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
)