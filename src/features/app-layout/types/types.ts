import { MenuItemProps, PolymorphicComponentProps } from '@mantine/core'

export type CustomMenuItemProps<C = 'button'> = PolymorphicComponentProps<
  C,
  MenuItemProps
>
