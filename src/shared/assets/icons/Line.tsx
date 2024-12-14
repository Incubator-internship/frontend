import { Ref, SVGProps, forwardRef, memo } from 'react'

const Line = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1.000000'}
    viewBox={'0 0 24 1'}
    width={'24.000000'}
    xmlns={'http://www.w3.org/2000/svg'}
    xmlnsXlink={'http://www.w3.org/1999/xlink'}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <rect
      fill={'#8D9094'}
      fillOpacity={'1.000000'}
      height={'1.000000'}
      id={'Rectangle 686'}
      width={'24.000000'}
    />
  </svg>
)

const ForwardRef = forwardRef(Line)
const Memo = memo(ForwardRef)

export default Memo
