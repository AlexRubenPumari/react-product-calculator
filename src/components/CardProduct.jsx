import { useContext } from 'react'
import { ProductsContext } from '../contexts/products'
import Counter from './Counter'

export default function CardProduct({ className, id, name, price, count }) {
  const { products, increaseProductCount, decreaseProductCount } =
   useContext(ProductsContext)
  const cardClassName = `flex flex-col items-center${
    className ? ` ${className}` : ''
  }`
  return (
    <div className={cardClassName}>
      {/* <img className='CardProduct__img'  src='' alt='' /> */}
      <div className='w-40 h-40 bg-red-500'></div>
      <h3 className='flex-grow font-bold text-center'>{name}</h3>
      <span>{`$ ${price}`}</span>
      <CounterProduct
        value={count}
        onIncrease={() => increaseProductCount(id, products)}
        onDecrease={() => decreaseProductCount(id, products)}
      />
    </div>
  )
}
function CounterProduct ({ value, onIncrease, onDecrease }) {
  return (
    <Counter value={value} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}
