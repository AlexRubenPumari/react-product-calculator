export default function WithoutImage ({ formatedTag, onClick }) {
  return (
    <div
      className='aspect-square basis-32 flex-grow flex-center-all rounded-lg bg-white cursor-pointer text-center'
      onClick={onClick}
    >
      <span className='w-min text-gray-400'>
        {`Please select ${formatedTag}`}
      </span>
    </div>
  )
}
