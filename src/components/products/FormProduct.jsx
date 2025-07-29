import { useToggle } from '../../hooks/common/useToggle'
import { PRODUCT_KEYS } from '../../config/constants'
import ProductImage from '../images/ProductImage'
import FileSelector from '../common/FileSelector'
import ActionButtons from '../common/ActionButtons'
import Input from '../common/Input'
import ImageSelectorModal from '../images/ImageSelectorModal'

const [NAME, PRICE, IMAGE] = PRODUCT_KEYS

export default function FormProduct({
  className, type = 'Add',
  values, errors,
  onSubmit, onCancel, onChange, onImageChange,
  children,
}) {
  const { value: isModalOpen, toggle: toggleModal } = useToggle()
  const handleImageSelect = (image) => {
    onImageChange(image)
    toggleModal()
  }

  return (
    <div className={className}>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <Input
          label='Name'
          name={NAME}
          placeholder='Cotton T-shirt'
          value={values[NAME]}
          error={errors[NAME]}
          onChange={onChange}
        />
        <Input
          label='Price'
          name={PRICE}
          placeholder='12.99'
          value={values[PRICE]}
          error={errors[PRICE]}
          onChange={onChange}
        />
        <FileSelector
          Display={ProductImage}
          label='Image'
          value={values[IMAGE]}
          error={errors[IMAGE]}
          onClick={toggleModal}
        />
        {children}
        <ActionButtons onCancel={onCancel} acceptText={type} />
      </form>
      {isModalOpen && (
        <ImageSelectorModal
          onImageSelect={handleImageSelect}
          onClose={toggleModal}
        />
      )}
    </div>
  )
}