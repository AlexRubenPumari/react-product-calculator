import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import ProductImage from './ProductImage'
import Input from './Input'
import FileSelector from './FileSelector'

export default function FormProduct({
  type,
  currentProduct,
  onSubmit,
  onFile,
  onCancel,
  onChangeArray,
}) {
  return (
    <form className='max-w-full flex flex-col gap-2' onSubmit={onSubmit}>
      <Input
        label='Name'
        placeholder='Cotton T-shirt'
        value={currentProduct.name.value}
        error={currentProduct.name.error}
        onChange={onChangeArray[0]}
      />
      <Input
        label='Price'
        placeholder='12.99'
        min={0}
        value={currentProduct.price.value}
        error={currentProduct.price.error}
        onChange={onChangeArray[1]}
      />
      <FileSelector
        // value={{ type:1, styles: { iceCreamColor: 'black' } }}
        value={currentProduct.img.value}
        tag='image'
        onFocus={onFile}>
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