import { createContext, useState } from 'react'

export const AddProductContext = createContext()

export default function AddProductProvider ({ children }) {
  const [product, setProduct] = useState({
    name: { value: '', error: null },
    price: { value: '', error: null },
    img: { value: null, error: null },
  })
  const setProductValueFor = (key, value) => {
    const newProduct = structuredClone(product)
    newProduct[key].value = value

    setProduct(newProduct)
  }
  return (
    <AddProductContext.Provider value={{
      product,
      setProductValueFor,
    }}>
      { children }
    </AddProductContext.Provider>
  )
}
