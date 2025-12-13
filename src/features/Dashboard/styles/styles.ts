import { Button, ButtonProps, PolymorphicComponentProps } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { fadeIn } from '@shared/styles/animation'
import { TextWithFamily } from '@shared/ui/Typography'

const WelcomeText = styled(TextWithFamily)`
  animation: ${fadeIn} 1s ease-out 0.8s both;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`
const WelcomeTitle = styled(TextWithFamily)`
  animation: ${fadeIn} 1s ease-out 0.5s both;
  font-size: 3.2rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`

const HoveredButtonWithoutBorder = styled(Button)<
  PolymorphicComponentProps<'button', ButtonProps>
>`
  animation: ${fadeIn} 1s ease-out 0.8s both;

  &:hover {
    color: ${SavedColors.Primaryblue};
    opacity: 50% !important;
    background-color: transparent;
    transition: all 0.3s ease-in;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

export { HoveredButtonWithoutBorder, WelcomeText, WelcomeTitle }
