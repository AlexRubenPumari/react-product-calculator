import { useProductsContext } from '../../contexts/products/products'
import { classNames } from '../../logic/common/classNames'
import ProductImage from '../images/ProductImage'
import Counter from '../common/Counter'

export default function CardProduct ({ className, product }) {
  const { id, name, img, price, count } = product
  const { increaseProductCount, decreaseProductCount } = useProductsContext()
  const cardClassName = classNames('flex flex-col items-center', className)

  return (
    <div className={cardClassName}>
      <ProductImage className='size-40' styles={img?.styles} type={img?.type} />
      <h3 className='flex-grow font-bold text-center'>{name}</h3>
      <span>{`$ ${price}`}</span>
      <Counter
        value={count}
        onIncrease={() => increaseProductCount(id)}
        onDecrease={() => decreaseProductCount(id)}
      />
    </div>
  )
}
