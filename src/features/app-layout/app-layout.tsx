import { lazy } from 'react'

import { ChatBot } from '@features/chatBot'
import { ErrorSuspense } from '@shared/ui/error-suspense'

import { AffixComponent } from './Affix'
import { Content } from './content'
import { Navbar } from './navbar'
import { UtilityBar } from './utilityBar'

const Footer = lazy(() =>
  import('./footer').then((module) => ({ default: module.Footer })),
)
export const AppLayout = () => {
  return (
    <div>
      <UtilityBar />
      <Navbar />
      <Content />
      <ChatBot />

      <ErrorSuspense suspenseKey="/footer">
        <Footer />
      </ErrorSuspense>
      <AffixComponent />
    </div>
  )
}
