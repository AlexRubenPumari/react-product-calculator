import { useToggle } from '../../hooks/common/useToggle'
import { PRODUCT_KEYS } from '../../config/constants'
import ButtonPrimary from '../common/ButtonPrimary'
import ButtonSecondary from '../common/ButtonSecondary'
import ProductImage from '../images/ProductImage'
import FileSelector from '../common/FileSelector'
import ListOfProductImages from '../images/ListOfProductImages'
import Input from '../common/Input'

export default function FormProduct({
  type = 'Add',
  values, errors,
  onSubmit, onCancel, onChange, onImageChange,
  children,
}) {
  const { value: showImageSelector, toggle: toggleImageSelector } = useToggle()

  if (showImageSelector) {
    return (
      <ImageSelectorSection
        onImageSelect={image => {
          onImageChange(image)
          toggleImageSelector(false)
        }}
        onClose={toggleImageSelector}
      />
    )
  }

  return (
    <Form
      type={type}
      values={values}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onImageSelectClick={toggleImageSelector}
    >
      {children}
    </Form>
  )
}

function ImageSelectorSection({ onImageSelect, onClose }) {
  return (
    <div className='flex flex-col items-center gap-4 px-2'>
      <p className='w-full text-left font-semibold'>Select an image:</p>
      <ListOfProductImages onImageClick={onImageSelect} />
      <ButtonPrimary className='w-24' onClick={onClose}>
        Go back
      </ButtonPrimary>
    </div>
  )
}

function Form({
  type, values, errors,
  onChange, onSubmit, onCancel, onImageSelectClick,
  children,
}) {
  const [NAME, PRICE, IMAGE] = PRODUCT_KEYS

  return (
    <div className='px-2'>
      <h3 className='font-bold text-center uppercase mb-4'>{`${type} Product`}</h3>
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
          onClick={onImageSelectClick}
        />
        {children}
        <div className='flex justify-center gap-4'>
          <ButtonSecondary type='button' className='w-24' onClick={onCancel}>
            Cancel
          </ButtonSecondary>
          <ButtonPrimary type='submit' className='w-24'>
            {type}
          </ButtonPrimary>
        </div>
      </form>
    </div>
  )
}