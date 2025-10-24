import { Content } from './content';
import Footer from './footer';
import Navbar from './navbar';
import UtilityBar from './utilityBar';

export const AppLayout = () => {
  return (
    <div
    >
      <UtilityBar />
      <Navbar />
        <Content />
        
      <Footer />
    </div>
  );
};