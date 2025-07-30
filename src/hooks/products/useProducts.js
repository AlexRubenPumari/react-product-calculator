import { useFetch } from '../common/useFetch'
import { getAllProducts, addProduct, editProductById, deleteProductsById } from '../../services/products'
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

  const editProduct = values => {
    const { id } = values
    const toEdit = prepareProductForStorage(values)
    return editProductById(id, toEdit)
      .then(product => {
        product.img = values.img
        setProducts(prev => prev.map(
          p => p.id === product.id ? prepareProductForUI(id, product) : p
        ))
      })
  }

  const deleteProducts = ids => {
    return deleteProductsById(ids).then(ids => {
        setProducts(prev => prev.filter(p => !ids.includes(p.id)))
    })
  }

  return {
    products: products ?? [],
    error,
    isLoading,
    addNewProduct,
    editProduct,
    deleteProducts,
    increaseProductCount: id => updateCount(id, 1),
    decreaseProductCount: id => updateCount(id, -1)
  }
}