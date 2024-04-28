import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/products/products.action";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { selectProductsArray } from "../../store/products/products.selector";

const Shop = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProductsArray);

  useEffect(() => {
    const getCategories = async () => {
      const productsArray = await getCategoriesAndDocuments();
      console.log(productsArray)
      dispatch(setProducts(productsArray))
    }

    getCategories();
  }, [])

  return (
    <>
      {Object.keys(products).map((title) => {
        const productsObject = products[title];
        return (
          <CategoryPreview key={title} title={title} products={productsObject} />
        );
      })}
    </>

  );
};

export default Shop;