import { classNames } from '../../logic/common/classNames'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export default function ActionButtons({
  className, onSecondaryClick, onPrimaryClick, secondaryText, primaryText, disabled
}) {
  return (
    <div className={classNames('flex justify-center flex-wrap gap-4', className)}>
      {(onSecondaryClick || secondaryText) && (
        <ButtonSecondary className='w-24' onClick={onSecondaryClick}>
          {secondaryText}
        </ButtonSecondary>
      )}
      {(onPrimaryClick || primaryText) && (
        <ButtonPrimary type='submit' className='w-24' onClick={onPrimaryClick} disabled={disabled}>
          {primaryText}
        </ButtonPrimary>
      )}
    </div>
  )
}