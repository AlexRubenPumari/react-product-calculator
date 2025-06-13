import ButtonPrimary from '../common/ButtonPrimary'
import ButtonSecondary from '../common/ButtonSecondary'
import ProductImage from './ProductImage'
import Input from '../common/Input'
import FileSelector from '../common/FileSelector'

export default function FormProduct({
  type,
  currentProduct,
  onSubmit,
  onCancel,
  onInputChange,
}) {
  return (
    <form className='max-w-full flex flex-col gap-2' onSubmit={onSubmit}>
      <Input
        label='Name'
        placeholder='Cotton T-shirt'
        value={currentProduct.name.value}
        error={currentProduct.name.error}
        onChange={onInputChange[0]}
      />
      <Input
        label='Price'
        placeholder='12.99'
        min={0}
        value={currentProduct.price.value}
        error={currentProduct.price.error}
        onChange={onInputChange[1]}
      />
      <FileSelector
        // value={{ type:1, styles: { iceCreamColor: 'black' } }}
        value={currentProduct.img.value}
        tag='image'
        error={currentProduct.img.error}
        onFocus={onInputChange[2]}>
        <ProductImage />
      </FileSelector>
      <div className='flex flex-wrap-reverse gap-5 justify-center mt-6'>
        <ButtonSecondary className='w-24' onClick={onCancel}>
          Cancel
        </ButtonSecondary>
        <ButtonPrimary className='w-24'>
          { type.charAt(0).toUpperCase() + type.slice(1) }
        </ButtonPrimary>
      </div>
    </form>
  )
}