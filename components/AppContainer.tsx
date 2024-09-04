import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AppContainer;
