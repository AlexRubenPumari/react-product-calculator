import { useFetch } from '../common/useFetch'
import { changeProductCount } from '../../logic/products/products'
import { getAllItems, PRODUCTS_STORE_NAME } from '../../logic/common/indexedDB'

export default function useProducts() {
  const { data: products, error, isLoading } = useFetch(
    () => getAllItems(PRODUCTS_STORE_NAME)
  )  
  const filteredProducts = products?.filter(product => product.count > 0)

  const increaseProductCount = (id, products) =>
    setProducts(changeProductCount({ id, products, step: 1, max: 10 }))

  const decreaseProductCount = (id, products) =>
    setProducts(changeProductCount({ id, products, step: -1, min: 0 }))

  return {
    products,
    error,
    isLoading,
    filteredProducts,
    increaseProductCount,
    decreaseProductCount,
  }
}