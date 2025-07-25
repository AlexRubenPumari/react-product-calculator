import { addArticleFor } from '../../logic/common/utilities'
import { IconEdit, IconAdd } from './Icons'
import ButtonCircle from './ButtonCircle'

export default function FileSelector({
  Display, label, className = '',
  value, error,
  onClick,
}) {
  const formattedLabel = addArticleFor(label).toLowerCase()
  const Icon = value ? IconEdit : IconAdd

  const wrapperClasses = `flex-center-all flex-wrap gap-4 relative mb-8 select-none ${className}`
  const displayClasses = 'basis-32 max-w-48 flex-grow cursor-pointer'

  return (
    <>
      {label && <span>{`Select ${formattedLabel}:`}</span>}
      <div className={wrapperClasses}>
        {value ? (
          <Display {...value} className={displayClasses} onClick={onClick} />
        ) : (
          <Placeholder label={formattedLabel} onClick={onClick} />
        )}
        <ButtonCircle
          className='ButtonPrimary'
          title={`Choose ${formattedLabel}`}
          onClick={onClick}
        >
          <Icon className='size-4' />
        </ButtonCircle>
        {error && <span className='LabelError'>{error}</span>}
      </div>
    </>
  )
}

function Placeholder({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className='aspect-square basis-32 max-w-48 flex-grow flex-center-all rounded-lg bg-white cursor-pointer text-center'
    >
      <span className='w-min text-gray-400'>{`Please select ${label}`}</span>
    </div>
  )
}