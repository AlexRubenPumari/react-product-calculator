export default function ProductImage({
  className = '',
  type,
  styles = { hasShine: false, iceCreamColor: 'yellow' },
  onClick,
}) {
  const { hasShine, iceCreamColor } = styles
  return (
    <svg
      className={`bg-black/10 p-1 rounded-lg ${className}`}
      viewBox='0 0 200 200'
      onClick={onClick}>
      <path
        d='m56.42,69.2c-22.55,111.87 -19.95,116.2 -20.81,116.2c-0.87,0 103.2,-76.31 103.2,-76.31c0,0 -82.38,-39.89 -82.38,-39.89z'
        fill='#ffac59'
        stroke='#000000'
        strokeWidth='0'
      />
      <circle
        cx='108.4'
        cy='69.17'
        fill={iceCreamColor}
        r='53.8'
        stroke='#000000'
        strokeWidth='0'
      />
      {hasShine && (
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
{
  /* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <g class="layer">
  <title>Layer 1</title>
  <path d="m56.42,69.2c-22.55,111.87 -19.95,116.2 -20.81,116.2c-0.87,0 103.2,-76.31 103.2,-76.31c0,0 -82.38,-39.89 -82.38,-39.89z" fill="#ffac59" id="svg_4" stroke="#000000" stroke-width="0"/>
  <path d="m1920,1080c-318,6.5 -1644.67,15.5 -1920,0c-275.33,-15.5 177.5,-75 268,-93c90.5,-18 183.67,-14.67 275,-15c91.33,-0.33 181.17,22.5 273,13c91.83,-9.5 187.33,-61.5 278,-70c90.67,-8.5 175.17,4.67 266,19c90.83,14.33 187.67,49.17 279,67c91.33,17.83 222.17,26.83 269,40c46.83,13.17 330,32.5 12,39c-318,6.5 -1644.67,15.5 -1920,0" fill="#df6688" id="svg_2"/>
  <circle cx="108.4" cy="69.17" fill="#6b3700" id="svg_1" r="53.8" stroke="#000000" stroke-width="0"/>
  <path d="m69.28,56.04l-5.16,-3.28l5.16,3.28z" fill="#f7f6f4" id="svg_14" stroke="#000000" stroke-width="0"/>
  <path d="m136.67,33.47c3.24,-3.02 14.71,5.64 19.6,25.07c4.89,19.42 -5.46,36.04 -12.17,28.7c-6.71,-7.34 4.78,-6.29 3.1,-25.77c-1.68,-19.48 -13.78,-24.98 -10.53,-28z" fill="#f7f6f4" fill-opacity="0.85" id="svg_19" stroke="#000000" stroke-width="0"/>
 </g>
</svg> */
}
