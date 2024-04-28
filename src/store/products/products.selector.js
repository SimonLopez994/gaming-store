const selectProductsReducer = (state) => state.products

export const selectProductsArray = createSelector(
    [selectProductsReducer],
    (productsArray) => productsArray.products
)