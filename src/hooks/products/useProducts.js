import { useFetch } from '../common/useFetch'
import { getAllProducts, addProduct } from '../../services/products'
import { mapProductsFromStorageToUI, prepareProductForStorage, prepareProductForUI } from '../../adapters/products'

export default function useProducts() {
  const { data: products, error, isLoading, setData: setProduct } = useFetch(
    () => getAllProducts().then(mapProductsFromStorageToUI)
  )  
  const filteredProducts = products?.filter(product => product.count > 0)

  const increaseProductCount = id => {
    setProduct(prevValues => prevValues.map(value => {
      if (value.id === id) return { ...value, count: value.count + 1 }

      return value
    }))
  }
  const decreaseProductCount = id => {
    setProduct(prevValues => prevValues.map(value => {
      if (value.id === id) return { ...value, count: value.count - 1 }

      return value
    }))
  }
  const addNewProduct = (productValues) => {
    return addProduct(prepareProductForStorage(productValues))
      .then(id => setProduct(
        prevValues => [prepareProductForUI(id, productValues), ...prevValues]
      ))
  }

  return {
    products,
    error,
    isLoading,
    filteredProducts,
    addNewProduct,
    increaseProductCount,
    decreaseProductCount,
  }
}