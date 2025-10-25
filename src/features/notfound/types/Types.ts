import { ButtonProps, PolymorphicComponentProps } from "@mantine/core";

export interface ButtonType extends PolymorphicComponentProps<'button', ButtonProps>{}

export interface NotFoundPageProps {
  onGoHome?: () => void;
  onGoBack?: () => void;
}
