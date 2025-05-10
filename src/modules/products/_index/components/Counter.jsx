import ButtonCircle from '../../components/ButtonCircle'

export default function Counter({ value, onIncrease, onDecrease }) {
  return (
    <div className='flex items-center justify-center select-none'>
      <ButtonCounter symbol='+' onClick={onIncrease} />
      <span className='w-12 text-center'>{ value }</span>
      <ButtonCounter symbol='-' onClick={onDecrease} />
    </div>
  )
}
function ButtonCounter ({ symbol, onClick }) {
  return (
    <ButtonCircle
      className='ButtonPrimary-100'
      onClick={onClick}
    >
      <span className='block w-4 h-4 leading-3'>{ symbol }</span>
    </ButtonCircle>
  )
}