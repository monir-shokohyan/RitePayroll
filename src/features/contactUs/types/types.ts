import { ButtonProps } from '@mantine/core'
import * as yup from 'yup'

import { contactFormSchema } from '../schema'

export interface ExtendedButtonProps
  extends ButtonProps,
    Omit<React.ComponentProps<'button'>, 'color' | 'style'> {
  type?: 'submit' | 'button' | 'reset'
}

export type ContactFormData = yup.InferType<typeof contactFormSchema>
