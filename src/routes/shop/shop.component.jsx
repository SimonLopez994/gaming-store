import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../store/products/products.action";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { selectProductsMap } from "../../store/products/products.selector";
import ProductsPreview from "../../components/products-preview/products-preview.component";
import { ShopContainer, Title, MainShopContainer } from "./shop.styles";

const Shop = () => {
  const dispatch = useDispatch()
  const productsMap = useSelector(selectProductsMap);

  useEffect(() => {
    const getCategories = async () => {
      const productsArray = await getCategoriesAndDocuments();
      console.log(productsArray)
      dispatch(setProducts(productsArray))
    }

    getCategories();
  }, [])

  return (
    <MainShopContainer>
    <Title>SHOP</Title>
      {Object.keys(productsMap).map((title) => {
        const products = productsMap[title];
        return (
          <ShopContainer>
            <ProductsPreview products={products} title={title} />
          </ShopContainer>

        );
      })}
    </MainShopContainer>

  );
};

export default Shop;