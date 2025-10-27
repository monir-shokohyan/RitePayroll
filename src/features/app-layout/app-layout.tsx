import { ChatBot } from '@features/chatBot';
import { Content } from './content';
import Navbar from './navbar';
import UtilityBar from './utilityBar';
import { lazy } from 'react';
import { ErrorSuspense } from '@shared/ui/error-suspense';
const Footer = lazy(() => import('./footer'))

export const AppLayout = () => {
  return (
    <div
    >
      <UtilityBar />
      <Navbar />
      <Content />
      <ChatBot />

      <ErrorSuspense suspenseKey="/footer">
        <Footer />
      </ErrorSuspense>
    </div>
  );
}