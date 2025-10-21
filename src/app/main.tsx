import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'

import { AppRouter } from './router'
import { MantineProvider } from '@mantine/core'
import './main.css'
import '@mantine/core/styles.css';
const container = document.querySelector('#root')

if (!container) {
  throw new Error('Container was not found')
}

createRoot(container).render(
  <StrictMode>
    <Providers>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </Providers>
  </StrictMode>,
)
