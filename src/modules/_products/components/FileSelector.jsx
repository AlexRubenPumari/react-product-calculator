import { cloneElement } from 'react'
import { addArticleFor } from '../logic/nouns'
import ButtonCircle from './ButtonCircle'
import IconAdd from './IconAdd'
import IconEdit from './IconEdit'

export default function FileSelector({ tag, value, error, children, onFocus }) {
  const formatedTag = addArticleFor(tag)
  const clonedChildren = cloneElement(children, { className: 'basis-32 flex-grow cursor-pointer', onClick: onFocus, ...value })

  return (
    <>
      {tag && <label htmlFor=''>{`Select ${formatedTag}:`}</label>}
      <div className='flex-center-all flex-wrap gap-4 relative'>
        {value ? (
          clonedChildren
        ) : (
          <WithoutFile formatedTag={formatedTag} onClick={onFocus} />
        )}
        <ButtonCircle
          className='ButtonPrimary'
          title={`Choose ${formatedTag}`}
          onClick={onFocus}>
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
      className='aspect-square basis-32 flex-grow flex-center-all rounded-lg bg-white cursor-pointer text-center'
      onClick={onClick}
    >
      <span className='w-min text-gray-400'>
        {`Please select ${formatedTag}`}
      </span>
    </div>
  )
}