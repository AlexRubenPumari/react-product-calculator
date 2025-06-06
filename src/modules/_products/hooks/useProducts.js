import { useEffect, useState } from 'react'
import { changeProductCount } from '../logic/products'
import { useIndexedDB } from '../../../hooks/useIndexedDB'

export default function useProducts() {
  const { db, getAllProducts } = useIndexedDB()
  const [products, setProducts] = useState(null)
  
  useEffect(() => {
    getAllProducts()
      .then(products => setProducts(products))
      .catch(console.log)
  }, [db])
  
  const filteredProducts = products?.filter(product => product.count > 0)

  const increaseProductCount = (id, products) =>
    setProducts(changeProductCount({ id, products, step: 1, max: 10 }))

  const decreaseProductCount = (id, products) =>
    setProducts(changeProductCount({ id, products, step: -1, min: 0 }))

  return {
    products,
    filteredProducts,
    increaseProductCount,
    decreaseProductCount,
  }
}