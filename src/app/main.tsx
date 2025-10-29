import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { MantineProvider } from '@mantine/core'

import { Providers } from '@app/providers'

import { AppRouter } from './router'

import './main.css'
import '@mantine/core/styles.css'

const container = document.querySelector('#root')

if (!container) {
  throw new Error('Container was not found')
}

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS)

createRoot(container).render(
  <StrictMode>
    <Providers>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </Providers>
  </StrictMode>,
)
