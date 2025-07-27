import { useProductsContext } from '../../contexts/products/products'
import { classNames } from '../../logic/common/classNames'
import CardProduct from './CardProduct'
import Spinner from '../common/Spinner'
import WithoutProducts from './WithoutProducts'

export default function ListOfProducts ({ className }) {
  const { products, isLoading } = useProductsContext()
  const hasProducts = products.length > 0
  const withoutProducts = !hasProducts && !isLoading
  const divClassName = classNames(
    className, hasProducts ? 'content-start' : 'flex-center-all'
  )

  return (
    <div className={divClassName}>
      {withoutProducts && <WithoutProducts />}
      {isLoading && <Spinner />}
      {hasProducts && <><Products products={products} /><GhostProducts /></>}
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