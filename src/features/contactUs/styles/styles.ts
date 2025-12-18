import { Button, Textarea, TextInput } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

import { ExtendedButtonProps } from '../types'

export const HoveredButton = styled(Button)<ExtendedButtonProps>`
  color: ${SavedColors.primaryBlue};
  border: 1px solid ${SavedColors.primaryBlue};
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${SavedColors.PrimaryWhite};
    background-color: ${SavedColors.primaryBlue};
  }
`
export const SimpleInput = styled(TextInput)`
  .mantine-TextInput-input {
    border: 0px;
  }
`
export const SimpleTextArea = styled(Textarea)`
  .mantine-Textarea-input {
    border: 0px;
  }
`
