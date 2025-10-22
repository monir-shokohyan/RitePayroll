import { Flex, FlexProps } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Flex)<FlexProps>`
  width: 100vw;
`

export const Content = () => {
  return (
    <main>
      <Wrapper 
        direction="column" 
        gap={{ base: 20, sm: 25, md: 30 }}
        p={{ base: '10px 16px', sm: '10px 24px', md: '10px 32px', lg: '10px 40px' }}
      >
        <Outlet />
      </Wrapper>
    </main>
  )
}