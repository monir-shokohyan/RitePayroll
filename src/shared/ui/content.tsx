import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Content = ({ title, children, ...props }: Props) => {
  return (
    <div
      {...props}
    >
      {children}
    </div>
  )
}
