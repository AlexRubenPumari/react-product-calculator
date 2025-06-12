import { useEffect, useState } from 'react'
import { changeProductCount } from '../../logic/products/products'
import { getAllItems, PRODUCTS_STORE_NAME } from '../../logic/common/indexedDB'

export default function useProducts() {
  const [products, setProducts] = useState(null)
  
  useEffect(() => {
    getAllItems(PRODUCTS_STORE_NAME)
      .then(products => setProducts(products))
      .catch(console.log)
  }, [])
  
  const filteredProducts = products?.filter(product => product.count > 0)

  const increaseProductCount = (id, products) =>
    setProducts(changeProductCount({ id, products, step: 1, max: 10 }))

  const decreaseProductCount = (id, products) =>
    setProducts(changeProductCount({ id, products, step: -1, min: 0 }))

  return {
    products,
    isLoading: products === null,
    isError: false,
    filteredProducts,
    increaseProductCount,
    decreaseProductCount,
  }
}