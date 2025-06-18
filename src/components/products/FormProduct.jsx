import { useState } from 'react'
import { PRODUCT_KEYS } from '../../config/constants'
import ButtonPrimary from '../common/ButtonPrimary'
import ButtonSecondary from '../common/ButtonSecondary'
import ProductImage from '../images/ProductImage'
import FileSelector from '../common/FileSelector'
import ListOfProductImages from '../images/ListOfProductImages'
import Input from '../common/Input'

export default function FormProduct({
  type,
  values,
  errors,
  onSubmit,
  onCancel,
  onChange,
  onImageChange
}) {
  const [toggleSection, setToggleSection] = useState(null)
  return !toggleSection ? (
    <Form
      type={type}
      values={values}
      errors={errors}
      onSubmit={onSubmit}
      onSelectImageClick={() => setToggleSection(true)}
      onChange={onChange}
      onCancel={onCancel}
    />
  ) : (
    <SectionOfImages
      onCancel={() => setToggleSection(false)}
      onImageClick={e => (onImageChange(e), setToggleSection(null))}  
    />
  )
}

function SectionOfImages ({ onImageClick, onCancel }) {
  return (
    <div className='flex flex-col items-center gap-4 px-2'>
      <p className='w-full text-left'>Select an image:</p>
      <ListOfProductImages onImageClick={onImageClick} />
      <ButtonPrimary
        className='w-24'
        onClick={onCancel}
      >
        Close
      </ButtonPrimary>
    </div>
  )
}

function Form({ type, values, errors, onChange, onSelectImageClick, onSubmit, onCancel }) {
  const [NAME, PRICE, IMAGE] = PRODUCT_KEYS

  return (
    <>
      {type && <h3 className='font-bold text-center uppercase'>{`${type} product`}</h3>}
      <form
        className='flex flex-col px-2'
        onSubmit={onSubmit}
      >
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
          label='Image'
          value={values[IMAGE]}
          error={errors[IMAGE]}
          onClick={onSelectImageClick}
        >
          <ProductImage />
        </FileSelector>
        <div className='flex flex-wrap-reverse gap-5 justify-center mt-6'>
          <ButtonSecondary className='w-24' onClick={onCancel}>
            Cancel
          </ButtonSecondary>
          <ButtonPrimary className='w-24'>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </ButtonPrimary>
        </div>
      </form>
    </>
  )
}