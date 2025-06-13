import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products/products'
import ProductImage from './ProductImage'
import Counter from '../common/Counter'

export default function CardProduct ({ className, product }) {
  const { id, name, img, price, count } = product
  const { products, increaseProductCount, decreaseProductCount } =
    useContext(ProductsContext)
  const cardClassName = `flex flex-col items-center${
    className ? ` ${className}` : ''
  }`
  return (
    <div className={cardClassName}>
      <ProductImage className='size-40' styles={img} />
      <h3 className='flex-grow font-bold text-center'>{name}</h3>
      <span>{`$ ${price}`}</span>
      <Counter
        value={count}
        onIncrease={() => increaseProductCount(id, products)}
        onDecrease={() => decreaseProductCount(id, products)}
      />
    </div>
  )
}
