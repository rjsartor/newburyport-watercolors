import { FC, CSSProperties } from 'react';

interface SpacerProps {
  height?: number;
  width?: number;
  style?: CSSProperties;
  [key: string]: unknown; // rest
}

const Spacer: FC<SpacerProps> = ({
  height = 0,
  width = 0,
  style = {},
  ...rest
}) => {
  const _width = width * 8;
  const _height = height * 8;
  return (
    <span
      style={{
        display: 'block',
        width: _width,
        minWidth: _width,
        height: _height,
        minHeight: _height,
        ...style
      }}
      {...rest}
    />
  );
};

export default Spacer;
