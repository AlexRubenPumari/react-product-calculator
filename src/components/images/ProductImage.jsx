import { ICE_CREAM_TYPES as T } from '../../config/constants'
import { classNames } from '../../logic/common/classNames'

const IMAGES = {
  [T.CONE]: ConeImage,
  [T.TUB]: TubImage,
  [T.LOLLY]: LollyImage,
}

export default function ProductImage({
  className, type, styles = { hasShine: false, iceCreamColor: 'yellow' }, onClick,
}) {
  // const { hasShine, iceCreamColor } = styles
  const Image = IMAGES[type]

  return (
    <Image
      onClick={onClick}
      className={classNames('bg-black/10 p-1 rounded-lg', className)}
      styles={styles}
    />
  )
}

function ConeImage({ onClick, className, styles }) {
  return (
    <svg className={className} viewBox='0 0 200 200' onClick={onClick}>
      <path
        d='m56.42,69.2c-22.55,111.87 -19.95,116.2 -20.81,116.2c-0.87,0 103.2,-76.31 103.2,-76.31c0,0 -82.38,-39.89 -82.38,-39.89z'
        fill='#ffac59'
        stroke='#000000'
        strokeWidth='0'
      />
      <circle
        cx='108.4'
        cy='69.17'
        fill={styles.iceCreamColor}
        r='53.8'
        stroke='#000000'
        strokeWidth='0'
      />
      {styles.hasShine && (
        <path
          d='m136.67,33.47c3.24,-3.02 14.71,5.64 19.6,25.07c4.89,19.42 -5.46,36.04 -12.17,28.7c-6.71,-7.34 4.78,-6.29 3.1,-25.77c-1.68,-19.48 -13.78,-24.98 -10.53,-28z'
          fill='#f7f6f4'
          fillOpacity='0.85'
          stroke='#000000'
          strokeWidth='0'
        />
      )}
    </svg>
  )
}
function TubImage({ onClick, className, styles }) {
  return (
    <svg className={className} viewBox='0 0 480 480' onClick={onClick}>
      <ellipse cx='326.26' cy='168.95' fill={styles.iceCreamColor} rx='114' ry='114' stroke='#000000' strokeWidth='0' transform='matrix(1 0 0 1 13.0277 20.0185) matrix(1.19835 0 0 1.19835 -140.874 -43.6293)' />
      <ellipse cx='326.26' cy='168.95' fill='#000000' opacity='0.2' rx='114' ry='114' stroke='#000000' strokeWidth='0' transform='matrix(1 0 0 1 13.0277 20.0185) matrix(1.19835 0 0 1.19835 -140.874 -43.6293)' />
      <ellipse cx='284.11' cy='212.34' fill={styles.iceCreamColor} rx='114' ry='114' stroke='#000000' strokeWidth='0' transform='matrix(1 0 0 1 13.0277 20.0185) matrix(1.19835 0 0 1.19835 -140.874 -43.6293)' />
      <path d='m62.61,199.28l52.33,238.47l240.15,0l62.31,-238.47l-354.79,0z' fill='#f2f2f2' id='svg_3' stroke='#e8e8e8' strokeWidth='0' />
    </svg>
  )
}
function LollyImage({ onClick, className, styles }) {
  return (
    <svg className={className} viewBox='0 0 480 480' onClick={onClick}>
      <path d='m194.49,258.81l-136.8,146.08c-4.81,7.62 -11.44,15.44 -0.48,26.22c10.96,10.79 22.21,5.48 30.37,-0.4l137.44,-145.41l-30.53,-26.49z' fill='#f2cd00' stroke='#000000' strokeWidth='0' />
      <path d='m143.61,242.63l102.83,96.25c55.47,-58.99 140.37,-152.89 160.62,-183.17c20.25,-30.28 15.83,-67.06 3.62,-85.73c-12.22,-18.68 -65.08,-40.77 -106.77,2.01c-41.7,42.77 -106.86,113.76 -160.3,170.64z' fill={styles.iceCreamColor} stroke='#000000' strokeWidth='0' />
      {styles.hasShine && (
        <path d='m408.66,112.09c3.6,-12.93 10.14,16.02 -15.5,46c-25.64,29.98 -102.14,114.6 -147.42,167.37c-4.72,-4.44 -10.01,-8.75 -14.73,-13.19c49.42,-53.78 162.36,-170.1 165.6,-175.16c3.24,-5.06 8.45,-12.09 12.04,-25.02zl0,0z' fill='#fffefc' opacity='0.85' stroke='#000000' strokeWidth='0' />
      )}
    </svg>
  )
}