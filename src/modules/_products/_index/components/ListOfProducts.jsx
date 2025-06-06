import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products'
import CardProduct from './CardProduct'
import Spinner from './Spinner'
import WithoutProducts from './WithoutProducts'

export default function ListOfProducts ({ className = '' }) {
  const { products } = useContext(ProductsContext)
  const divClassName = `${className}${products?.length > 0 ? '' : ' flex-center-all'}` 
  return (
    <div className={divClassName}>
      { products === null && <Spinner /> }
      { products?.length === 0 && <WithoutProducts /> }
      {
        (products?.length > 0 && products !== null) && (
          <><Products products={products} /><GhostProducts /></>
        )
      }
    </div>
  )
}
function Products ({ products }) {
  return products.map(({ id, name, price, count, img }) => (
    <CardProduct
      key={id}
      id={id}
      img={img}
      className='basis-44 flex-grow'
      name={name}
      price={price}
      count={count}
    />
  ))
}
  
function GhostProducts () {
  // GhostProducts: add flex items to fix the auto-fill problem in flexbox
  return (
    <>
      <div className='basis-44 flex-grow'></div>
      <div className='basis-44 flex-grow'></div>
      <div className='basis-44 flex-grow'></div>
    </>
  )
}