import ButtonCircle from './ButtonCircle'

export default function Counter({ value, onIncrease, onDecrease }) {
  return (
    <div className='flex-center-all select-none'>
      <ButtonCounter symbol='+' onClick={onIncrease} />
      <span className='w-12 text-center'>{ value }</span>
      <ButtonCounter symbol='-' onClick={onDecrease} />
    </div>
  )
}
function ButtonCounter ({ symbol, onClick }) {
  return (
    <ButtonCircle
      className='ButtonPrimary'
      onClick={onClick}
    >
      <span className='block size-4 leading-3'>{symbol}</span>
    </ButtonCircle>
  )
}