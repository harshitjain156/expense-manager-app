import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
  
    width="1em"
    height="1em"
    viewBox="0 0 240 240"
    color={'#000000'}
    {...props}
  >
    <Path
      fill="#000000"
      d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83m.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94Z"
    />
    <Path
      fill="#ff0000"
      d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1"
    />
  </Svg>
)
export default SvgComponent
