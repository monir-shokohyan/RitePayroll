import { HTMLAttributes } from 'react'
import { Flex, FlexProps } from '@mantine/core'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
}
const Wrapper = styled(Flex)<FlexProps>`
  width: 100vw;
`

export const Content = ({ title, children, ...props }: Props) => {
  return (
    <div {...props}>
      <Wrapper direction="column">{children}</Wrapper>
    </div>
  )
}
