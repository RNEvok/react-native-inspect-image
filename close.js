import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G transform={{scale: 1.45}}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.626.626a1.21 1.21 0 00-1.712 0l-3.99 3.99L3.008.703a1.21 1.21 0 00-1.711 1.711l3.914 3.915-3.99 3.99a1.21 1.21 0 101.71 1.712l3.991-3.991 3.915 3.915a1.21 1.21 0 001.711-1.712L8.634 6.328l3.991-3.991a1.21 1.21 0 000-1.711z"
          fill={props.color}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;