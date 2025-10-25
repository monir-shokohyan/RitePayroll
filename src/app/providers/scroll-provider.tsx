import { useScrollIntoView } from "@mantine/hooks";
import { createContext, useRef } from "react";

interface ScrollContextType {
  scrollToSection1: (options?: { alignment?: 'start' | 'center' | 'end' }) => void;
  section1Ref: React.RefObject<HTMLDivElement>;
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const section1Ref = useRef<HTMLDivElement>(null);

  const { scrollIntoView: scrollToSection1 } = useScrollIntoView<HTMLDivElement>({
    duration: 800,
    offset: 60,
    cancelable: true,
});



  return (
    <ScrollContext.Provider value={{ scrollToSection1, section1Ref }}>
      {children}
    </ScrollContext.Provider>
  );
};
