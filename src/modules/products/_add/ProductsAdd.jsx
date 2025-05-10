import { useContext } from 'react'
import { ProductsContext } from '../contexts/products'
import TableOfProducts from '../components/TableOfProducts'

export default function ProductsAdd() {
  const { products } = useContext(ProductsContext)
  return (
    <>
      <main className='flex-grow flex justify-center py-9'>
        <h2>Add product</h2>
        <TableOfProducts products={products} />
      </main>
    </>
  )
}