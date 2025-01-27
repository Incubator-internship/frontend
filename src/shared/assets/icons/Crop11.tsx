import * as React from 'react'
import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={18}
    ref={ref}
    width={18}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect height={16} rx={2} stroke={'#8D9094'} strokeWidth={2} width={16} x={1} y={1} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default ForwardRef
