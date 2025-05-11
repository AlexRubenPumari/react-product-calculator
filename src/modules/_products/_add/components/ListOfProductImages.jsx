const T = {
  CONE: 1,
  TUB: 2,
  LOLLY: 3,
}
const productsImage = [
  { type: T.CONE, styles: { iceCreamColor: 'red' } },
  { type: T.CONE, styles: { hasShine: true, iceCreamColor: '#6b3700' } },
  { type: T.CONE, styles: { hasShine: true, iceCreamColor: '#6b3700' } },
  { type: T.CONE, styles: { hasShine: true, iceCreamColor: '#6b3700' } },
]
import ProductImage from './ProductImage'

export default function ListOfProductImages () {
  return (
    <ul className='flex flex-wrap justify-center gap-4'>
      {productsImage.map(({ type, styles }, i) => (
        <li key={i}>
          <ProductImage
            className='w-28 max-w-full cursor-pointer'
            type={type}
            styles={styles}
          />
        </li>
      ))}
    </ul>
  )
}
