import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
      <BrowserRouter basename='/'>  
          <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
  )
}
