import { useState } from 'react'
import { changeProductCount } from '../logic/products'
import someProducts from '../mooks/products.json'

export default function useProducts() {
  const [products, setProducts] = useState(() => someProducts)
  const filteredProducts = products.filter(product => product.count > 0)

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
