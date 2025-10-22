import styled from 'styled-components';
import { Flex as MantineFlex, FlexProps as MantineFlexProps } from '@mantine/core';

interface FlexProps extends MantineFlexProps {
  w?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  h?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  height?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  bg?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  background?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  borderRadius?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  m?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  margin?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  p?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  padding?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  mw?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  mh?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  minw?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  minh?: string | { base?: string; xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
}

const ResContainer = styled(MantineFlex)<FlexProps>`
  width: ${({ w }) => (typeof w === 'string' ? w : 'auto')};
  height: ${({ h, height }) => {
    const heightValue = h || height;
    return typeof heightValue === 'string' ? heightValue : 'auto';
  }};
  background: ${({ bg, background }) => {
    const bgValue = bg || background;
    return typeof bgValue === 'string' ? bgValue : 'transparent';
  }};
  border-radius: ${({ borderRadius }) => (typeof borderRadius === 'string' ? borderRadius : '0')};
  margin: ${({ m, margin }) => {
    const marginValue = m || margin;
    return typeof marginValue === 'string' ? marginValue : '0';
  }};
  padding: ${({ p }) => (typeof p === 'string' ? p : '0')};
  max-width: ${({ mw }) => (typeof mw === 'string' ? mw : 'auto')};
  min-width: ${({ minw }) => (typeof minw === 'string' ? minw : 'auto')};
  min-height: ${({ minh }) => (typeof minh === 'string' ? minh : 'auto')};
  max-height: ${({ mh }) => (typeof mh === 'string' ? mh : 'auto')};

  /* Responsive styles using Mantine's breakpoint system */
  ${({ w }) => w && typeof w === 'object' && `
    ${w.base ? `width: ${w.base};` : ''}
    ${w.xs ? `@media (min-width: 36em) { width: ${w.xs}; }` : ''}
    ${w.sm ? `@media (min-width: 48em) { width: ${w.sm}; }` : ''}
    ${w.md ? `@media (min-width: 62em) { width: ${w.md}; }` : ''}
    ${w.lg ? `@media (min-width: 75em) { width: ${w.lg}; }` : ''}
    ${w.xl ? `@media (min-width: 88em) { width: ${w.xl}; }` : ''}
  `}
`;

export default ResContainer;
export { ResContainer };