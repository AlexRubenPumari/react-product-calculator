import { useFetch } from '../common/useFetch'
import { getAllProducts } from '../../services/products'

export default function useProducts() {
  const { data: products, error, isLoading, setData } = useFetch(getAllProducts)  
  const filteredProducts = products?.filter(product => product.count > 0)

  const increaseProductCount = (id) => {
    setData(prevValues => prevValues.map(value => {
      if (value.id === id) return { ...value, count: value.count + 1 }

      return value
    }))
  }
  const decreaseProductCount = (id) => {
    setData(prevValues => prevValues.map(value => {
      if (value.id === id) return { ...value, count: value.count - 1 }

      return value
    }))
  }

  return {
    products,
    error,
    isLoading,
    filteredProducts,
    increaseProductCount,
    decreaseProductCount,
  }
}