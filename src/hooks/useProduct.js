import { useState } from 'react'
import { changeProductCount } from '../logic/products'
import someProducts from '../mooks/products.json'

export default function useProducts() {
  const [products, setProducts] = useState(() => someProducts)

  const total = products.reduce((total, product) => total + product.price, 0)

  const increaseProductCount = productId =>
    setProducts(changeProductCount(productId, products, 1))

  const decreaseProductCount = productId =>
    setProducts(changeProductCount(productId, products, -1))

  return { products, total, increaseProductCount, decreaseProductCount }
}
