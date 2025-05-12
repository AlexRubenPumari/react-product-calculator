import { cloneElement } from 'react'
import { addArticleFor } from '../logic/nouns'
import WithoutFile from './WithoutFile'
import ButtonCircle from './ButtonCircle'
import IconAdd from './IconAdd'

export default function FileSelector({ tag, value, children, onFocus }) {
  const formatedTag = addArticleFor(tag)
  const clonedChildren = cloneElement(children, { className: 'basis-32 flex-grow cursor-pointer', onClick: onFocus, ...value })

  return (
    <>
      {tag && <label htmlFor=''>{`Select ${formatedTag}:`}</label>}
      <div className='flex-center-all flex-wrap gap-4'>
        {value ? (
          clonedChildren
        ) : (
          <WithoutFile formatedTag={formatedTag} onClick={onFocus} />
        )}
        <ButtonCircle
          className='ButtonPrimary'
          title={`Choose ${formatedTag}`}
          onClick={onFocus}>
          <IconAdd className='size-4' />
        </ButtonCircle>
      </div>
    </>
  )
}
