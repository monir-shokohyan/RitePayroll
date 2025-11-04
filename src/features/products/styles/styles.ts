import { Flex, FlexProps } from '@mantine/core'
import styled from 'styled-components'

export const Card = styled(Flex)<
  FlexProps & { bgcolor: string; bordercolor: string }
>`
  width: 345px;
  height: 426px;
  background: ${({ bgcolor }) => bgcolor || '#fff'};
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px #00000020;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  border-bottom: ${({ bordercolor }) =>
    bordercolor ? `4px solid ${bordercolor}` : '4px solid #fff'};

  @media (max-width: 480px) {
    padding: 20px 30px;
  }
`
