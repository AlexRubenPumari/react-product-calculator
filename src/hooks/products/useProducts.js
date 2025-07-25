import { useFetch } from '../common/useFetch'
import { getAllProducts, addProduct } from '../../services/products'
import { mapProductsFromStorageToUI, prepareProductForStorage, prepareProductForUI } from '../../adapters/products'
import { clamp } from '../../logic/common/utilities'

export default function useProducts() {
  const { data: products, error, isLoading, setData: setProducts } = useFetch(
    () => getAllProducts().then(mapProductsFromStorageToUI)
  )

  const updateCount = (id, delta) => {
    setProducts(prev => prev.map(p =>
      p.id === id ? { ...p, count: clamp({ value: p.count + delta, min: 0 }) } : p
    ))
  }

  const addNewProduct = values => {
    const toStore = prepareProductForStorage(values)
    return addProduct(toStore).then(id =>
      setProducts(prev => [prepareProductForUI(id, values), ...prev])
    )
  }

  return {
    products: products ?? [],
    error,
    isLoading,
    addNewProduct,
    increaseProductCount: id => updateCount(id, 1),
    decreaseProductCount: id => updateCount(id, -1)
  }
}