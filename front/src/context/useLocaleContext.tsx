import { createContext, ReactNode, useContext } from 'react';

const LocaleContext = createContext<string | undefined>(undefined);

export const LocaleProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => {
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): string => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
