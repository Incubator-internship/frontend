import { Ref, SVGProps, forwardRef, memo } from 'react'

const HomeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g clipPath={'url(#clip0_306_4265)'}>
      <path d={'M14 14H10V21H14V14Z'} fill={'black'} />
      <path
        d={
          'M20.42 10.18L12.71 2.3C12.617 2.20627 12.5064 2.13188 12.3846 2.08111C12.2627 2.03034 12.132 2.0042 12 2.0042C11.868 2.0042 11.7373 2.03034 11.6154 2.08111C11.4936 2.13188 11.383 2.20627 11.29 2.3L3.57999 10.19C3.39343 10.3781 3.24609 10.6013 3.14652 10.8468C3.04695 11.0923 2.99715 11.3551 2.99999 11.62V20C2.99922 20.5119 3.19477 21.0046 3.54637 21.3767C3.89797 21.7488 4.37885 21.9718 4.88999 22H7.99999V13C7.99999 12.7348 8.10535 12.4804 8.29289 12.2929C8.48042 12.1054 8.73478 12 8.99999 12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13V22H19.11C19.6211 21.9718 20.102 21.7488 20.4536 21.3767C20.8052 21.0046 21.0008 20.5119 21 20V11.62C21.0008 11.0829 20.7928 10.5666 20.42 10.18Z'
        }
        fill={'white'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_306_4265'}>
        <rect fill={'white'} height={'24'} width={'24'} />
      </clipPath>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(HomeIcon)
const Memo = memo(ForwardRef)

export default Memo
