import styled from 'styled-components';
import { Flex as MantineFlex, FlexProps as MantineFlexProps } from '@mantine/core';

interface FlexProps extends MantineFlexProps {
  w?: string;
  h?: string;
  height?: string;
  bg?: string;
  background?: string;
  borderRadius?: string;
  m?: string;
  margin?: string;
  p?: string;
  padding?: string;
  mw?: string
  minw?: string
}

const Container = styled(MantineFlex)<FlexProps>`
  width: ${({ w }) => w || 'auto'};
  height: ${({ h, height }) => h || height || 'auto'};
  background: ${({ bg, background }) => bg || background || 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  margin: ${({ m, margin }) => m || margin || '0'};
  padding: ${({ p }) => p || '0'};
  max-width: ${({ mw }) => mw || 'auto'};
  min-width: ${({ minw }) => minw || 'auto'};
  
  
`;

export default Container;
export  {Container};