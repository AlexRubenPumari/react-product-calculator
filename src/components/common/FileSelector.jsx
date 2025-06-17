import { cloneElement } from 'react'
import { addArticleFor } from '../../logic/common/utilities'
import { IconEdit, IconAdd } from './Icons'
import ButtonCircle from './ButtonCircle'

export default function FileSelector({ label, value, error, children, onClick, className }) {
  const formatedTag = addArticleFor(label).toLowerCase()
  const clonedChildren = cloneElement(children, { className: 'basis-32 max-w-48 flex-grow cursor-pointer', onClick: onClick, ...value })
  const classNameDiv = className + ' flex-center-all flex-wrap gap-4 relative mb-8 select-none'

  return (
    <>
      {label && <span>{`Select ${formatedTag}:`}</span>}
      <div className={classNameDiv}>
        {value ? (
          clonedChildren
        ) : (
          <WithoutFile formatedTag={formatedTag} onClick={onClick} />
        )}
        <ButtonCircle
          className='ButtonPrimary'
          title={`Choose ${formatedTag}`}
          onClick={onClick}>
          {
            value ? (
              <IconEdit className='size-4' />
            ) : (
              <IconAdd className='size-4' />
            )
          }
        </ButtonCircle>
        { error && <span className='LabelError'>{ error }</span> }
      </div>
    </>
  )
}

function WithoutFile ({ formatedTag, onClick }) {
  return (
    <div
      className='aspect-square basis-32 max-w-48 flex-grow flex-center-all rounded-lg bg-white cursor-pointer text-center'
      onClick={onClick}
    >
      <span className='w-min text-gray-400'>
        {`Please select ${formatedTag}`}
      </span>
    </div>
  )
}