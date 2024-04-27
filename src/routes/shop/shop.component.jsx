

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log(categoriesArray)
      dispatch(setCategories(categoriesArray))
    }

    getCategories();
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;