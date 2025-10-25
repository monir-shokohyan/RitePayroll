import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './theme-provider'
import { ScrollProvider } from './scroll-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
      <BrowserRouter>  
       <ScrollProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ScrollProvider>
      </BrowserRouter>
  )
}
