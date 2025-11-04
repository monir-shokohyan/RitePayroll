import { ButtonProps, PolymorphicComponentProps } from '@mantine/core'

export type ButtonType = PolymorphicComponentProps<'button', ButtonProps>

export interface NotFoundPageProps {
  onGoHome?: () => void
  onGoBack?: () => void
}
