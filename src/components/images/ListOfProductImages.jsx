import { useFetch } from '../../hooks/common/useFetch'
import { getAllItems, IMAGES_STORE_NAME } from '../../logic/common/indexedDB'
import ProductImage from './ProductImage'
import Spinner from '../common/Spinner'

export default function ListOfProductImages({ onImageClick }) {
  const { data, error, isLoading } = useFetch(() => getAllItems(IMAGES_STORE_NAME))
  if (isLoading) return <Spinner />
  if (error) return <p>Error</p>
  return <List productImages={data} onImageClick={onImageClick} />
}

function List({ productImages, onImageClick }) {
  return (
    <ul className='flex flex-wrap justify-center gap-4'>
      {productImages?.map(({ id, type, styles }) => (
        <li key={id}>
          <ProductImage
            className='w-28 max-w-full cursor-pointer'
            type={type}
            styles={styles}
            onClick={() => onImageClick({ id, type, styles })}
          />
        </li>
      ))}
    </ul>
  )
}
