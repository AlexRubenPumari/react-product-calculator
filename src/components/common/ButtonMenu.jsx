import { IconMenu } from './Icons'

export default function ButtonMenu({ className = '', onClick }) {
  return (
    <button className={`Button ${className}`} onClick={onClick}>
      <IconMenu className='size-5' />
    </button>
  )
}
