import { Flex, FlexProps } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
const Wrapper = styled(Flex)<FlexProps>`
  padding: 10px 40px;
  width: 100vw;
`
export const Content = () => {
  return (
    <main
    >
      <Wrapper direction="column" gap={30} >
        <Outlet />
      </Wrapper>
    </main>
  )
}