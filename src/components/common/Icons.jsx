export function IconMenu({ className }) {
  return (
    <svg fill='currentColor' viewBox='8 8 16 16' className={className}>
      <path
        d='M8 24h16v-4h-16v4zM8 18.016h16v-4h-16v4zM8 
      12h16v-4h-16v4z'></path>
    </svg>
  )
}

export function IconAdd({ className = '', stroke = 2 }) {
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

export function IconCalculator({ className }) {
  return (
    <svg
      viewBox='4 4 24 24'
      className={className}
    >
      <path
        fill='currentColor'
        d='M7,4v24h18V4H7z M23,26H9V6h14V26z M13,16h-2v-2h2V16z M15,14h2v2h-2V14z M19,14h2v2h-2V14z
	      M13,20h-2v-2h2V20z M15,18h2v2h-2V18z M19,18h2v2h-2V18z M13,24h-2v-2h2V24z M15,22h2v2h-2V22z M19,22h2v2h-2V22z M21,12H11V8h10
	      V12z'
      />
    </svg>
  )
}

export function IconEdit({ className }) {
  return (
    <svg viewBox='2.31 1.95 19.92 19.92' fill='none' className={className}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.9405 3.12087L21.0618 5.24219C22.2334 6.41376 22.2334 8.31326 21.0618 9.48483L19.2586 11.288L12.8947 4.92403L14.6978 3.12087C15.8694 1.94929 17.7689 1.94929 18.9405 3.12087ZM11.834 5.98469L3.70656 14.1121C3.22329 14.5954 2.91952 15.2292 2.84552 15.9086L2.45151 19.5264C2.31313 20.7969 3.38571 21.8695 4.65629 21.7311L8.27401 21.3371C8.95345 21.2631 9.58725 20.9594 10.0705 20.4761L18.1979 12.3486L11.834 5.98469Z'
        fill='currentColor'
      />
    </svg>
  )
}
