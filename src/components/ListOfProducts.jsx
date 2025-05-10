import { useContext } from 'react'
import { ProductsContext } from '../contexts/products'
import CardProduct from './CardProduct'

export default function ListOfProducts() {
  const { products } = useContext(ProductsContext)

  return products?.length === 0 ? (
    <WithoutProducts />
  ) : (
    <><Products products={products} /><GhostProducts /></>
  )
}

function WithoutProducts () {
  return (
    <p className='w-full flex items-center justify-center select-none'>
      Without any products, you should create one!
    </p>
  )
}

function Products ({ products }) {
  return products.map(({ id, name, price, count }) => (
    <CardProduct
      key={id}
      id={id}
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