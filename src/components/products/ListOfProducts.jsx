import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products/products'
import CardProduct from './CardProduct'
import Spinner from '../common/Spinner'
import WithoutProducts from './WithoutProducts'

export default function ListOfProducts ({ className = '' }) {
  const { products, isLoading } = useContext(ProductsContext)
  const hasProducts = products?.length > 0
  const withoutProducts = products?.length <= 0 && !isLoading
  const divClassName = `${className}${products?.length > 0 ? '' : ' flex-center-all'}` 
  return (
    <div className={divClassName}>
      { isLoading && <Spinner /> }
      { withoutProducts && <WithoutProducts /> }
      { hasProducts && <><Products products={products} /><GhostProducts /></> }
    </div>
  )
}
function Products ({ products }) {
  return products.map(product => (
    <CardProduct
      key={product.id}
      className='basis-44 flex-grow'
      product={product}
    />
  ))
}
  
function GhostProducts () {
  // GhostProducts: add flex items to fix the auto-fill problem in flexbox
  const className = 'basis-44 flex-grow'
  return (
    <>
      <div className={className} />
      <div className={className} />
      <div className={className} />
    </>
  )
}