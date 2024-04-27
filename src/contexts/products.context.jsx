import { createContext, useEffect, useState } from "react";
import GAMES from '../games-data';
import { addCollectionAndDocuments } from "../utils/firebase.utils";

export const ProductContext = createContext({
    products: [],
    setProducts: () => { }
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

  

    const values = {
        products,
        setProducts
    }

    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}