import React, {ReactNode, createContext} from 'react';
import {useRouter} from 'next/router';

export type DashboardContextType = {
  isMobile: boolean;
  drawer: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

const defaultContext: DashboardContextType = {
  isMobile: false,
  drawer: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
};

const AuthContext = createContext(defaultContext);
const {Provider} = AuthContext;

export type AuthProviderProps = {children: ReactNode};

const AuthProvider = ({children}: AuthProviderProps) => {
  const [authState, setAuthState] = React.useState({
    token: '',
  });

  const setUserAuthInfo = ({data}: any) => {
    const token = localStorage.setItem('token', data.data);

    setAuthState({
      token,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
