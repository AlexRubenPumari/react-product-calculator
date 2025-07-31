import { classNames } from "../../logic/common/classNames"

export default function Checkbox({
  id, name, value, onChange, disabled = false, className
}) {
  const isChecked = !!value
  const inputClasses = classNames(
    'appearance-none size-7 border-b-2 border-r-2 border-t border-l rounded-sm cursor-pointer transition-all ease-in-out border-current',
    isChecked && 'bg-current',
    disabled && 'opacity-60 !cursor-not-allowed',
  )

  return (
    <div
      className={classNames('relative leading-[0]', className)}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={value}
        onChange={onChange || (() => {})}
        disabled={disabled}
        className={inputClasses}
        />
        {isChecked && (
          <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white pointer-events-none select-none'>
            ✓
          </span>
        )}
    </div>
  )
} 