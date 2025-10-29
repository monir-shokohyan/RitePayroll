import { lazy } from 'react'

import { ChatBot } from '@features/chatBot'
import { ErrorSuspense } from '@shared/ui/error-suspense'

import { Content } from './content'
import Navbar from './navbar'
import UtilityBar from './utilityBar'
import { AffixComponent } from './Affix'

const Footer = lazy(() => import('./footer'))

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
