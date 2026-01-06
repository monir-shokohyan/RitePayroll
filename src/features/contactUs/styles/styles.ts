import { Textarea, TextInput } from '@mantine/core'
import styled from 'styled-components'

import { ExtendedButtonProps } from '../types'

export const HoveredButton = styled.button<ExtendedButtonProps>`
  color: gray;
  border: 1px solid gray;
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  width: 20%;
  min-width: 100px;
  border-radius: 50%;
  aspect-ratio: 1/1 !important;
  cursor: pointer;
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
