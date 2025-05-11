const T = {
  CONE: 1,
  TUB: 2,
  LOLLY: 3,
}
const productsImage = [
  { id: 1, type: T.CONE, styles: { iceCreamColor: 'red' } },
  { id: 2, type: T.CONE, styles: { hasShine: true, iceCreamColor: '#6b3700' } },
  { id: 3, type: T.CONE, styles: { hasShine: false, iceCreamColor: '#6b3700' } },
  { id: 4, type: T.CONE, styles: { hasShine: true, iceCreamColor: '#fff' } },
]
import ProductImage from '../../components/ProductImage'

export default function ListOfProductImages () {
  return (
    <ul className='flex flex-wrap justify-center gap-4'>
      {productsImage.map(({ id, type, styles }, i) => (
        <li key={id}>
          <ProductImage
            className='w-28 max-w-full cursor-pointer'
            type={type}
            styles={styles}
            onClick={() => alert(1)}
          />
        </li>
      ))}
    </ul>
  )
}
