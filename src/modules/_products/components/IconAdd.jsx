export default function IconAdd({ className = '', stroke = 2 }) {
  return (
    <svg
      className={className}
      viewBox='7 7 10 10'
      fill='none'
    >
      <path
        d='M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17'
        stroke='currentColor'
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
