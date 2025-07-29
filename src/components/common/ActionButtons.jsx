import { classNames } from '../../logic/common/classNames'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export default function ActionButtons({
  className, onCancel, onAccept, cancelText = 'Cancel', acceptText = 'Accept'
}) {
  return (
    <div className={classNames('flex justify-center gap-4', className)}>
      <ButtonSecondary type='button' className='w-24' onClick={onCancel}>
        {cancelText}
      </ButtonSecondary>
      <ButtonPrimary type='submit' className='w-24' onClick={onAccept}>
        {acceptText}
      </ButtonPrimary>
    </div>
  )
}