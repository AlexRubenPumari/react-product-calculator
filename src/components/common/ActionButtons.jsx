import { classNames } from '../../logic/common/classNames'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export default function ActionButtons({
  className, onCancel, onAccept, cancelText = 'Cancel', acceptText
}) {
  return (
    <div className={classNames('flex justify-center gap-4', className)}>
      {onCancel && (
        <ButtonSecondary className='w-24' onClick={onCancel}>{cancelText}</ButtonSecondary>
      )}
      {(onAccept || acceptText) && (
        <ButtonPrimary type='submit' className='w-24' onClick={onAccept}>
          {acceptText || 'Accept'}
        </ButtonPrimary>
      )}
    </div>
  )
}