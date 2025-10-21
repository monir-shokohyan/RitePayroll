import { Content } from './content';
import Navbar from './navbar';

export const AppLayout = () => {
  return (
    <div
    >
      <Navbar />

        <Content />
    </div>
  );
};