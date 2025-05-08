import ButtonCircle from './ButtonCircle'
import { add, decrease } from '../logic/counter'
import { useState } from 'react'

export default function CardProduct({ className = '', name, price, count }) {
  return (
    <div
      className={`flex flex-col items-center${
        className ? ` ${className}` : ''
      }`}>
      {/* <img className='CardProduct__img'  src='' alt='' /> */}
      <div className='w-40 h-40 bg-red-500'></div>
      <h3 className='flex-grow font-bold text-center'>{name}</h3>
      <span>{`$ ${price}`}</span>
      <Counter initialValue={count} />
    </div>
  )
}
function Counter({ initialValue }) {
  const [value, setValue] = useState(initialValue)
  return (
    <div className='flex items-center justify-center'>
      <ButtonCircle
        className='bg-lime-600 text-white font-bold hover:bg-lime-700'
        onClick={() => setValue(add(value))}
      >
        <span className='block w-4 h-4 leading-3'>+</span>
      </ButtonCircle>
      <span className='w-12 text-center'>{ value }</span>
      <ButtonCircle
        className='bg-lime-600 text-white font-bold hover:bg-lime-700'
        onClick={() => setValue(decrease(value))}
      >
        <span className='block w-4 h-4 leading-3'>-</span>
      </ButtonCircle>
    </div>
  )
}
