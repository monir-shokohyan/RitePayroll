export interface HorWrapperType {
  rightSection?: React.ReactNode
  bgImage?: string
  isReverseWrap?: boolean
  children: React.ReactNode
  leftWidth?: string
  rightWidth?: string
  fullHeight?: boolean
  sectionTitle?: string
  title?: string
  RSJustify?: 'flex-start' | 'center' | 'flex-end'
  isBgColor?: boolean
  isSticky?: boolean
  desTitle?: string
  gradientDirection?: 'bottom-to-top' | 'top-to-bottom'
  doubleOption?: boolean
  activeHead?: boolean
  $paddingTop?: string
}
