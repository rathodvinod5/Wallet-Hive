import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WalletType } from '../data/WalletsData';
import { walletsAdded } from '../data/WalletsData';

// Define the shape of the context state
type AppContextState = {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  walletsAdded: WalletType[] | null;
  onAddNewWalletToList: (wallet: WalletType) => void,
  onRemoveWalletFromList: (walletName: string) => void,
}

// Default state for the context
const defaultState: AppContextState = {
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  walletsAdded: null,
  onAddNewWalletToList: (wallet: WalletType) => {},
  onRemoveWalletFromList: (walletName: string) => {},
};

// Create the context
const AppContext = createContext<AppContextState>(defaultState);

// Provide the context to children components
type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [wallets, setWallets] = useState<WalletType[] | null>(walletsAdded);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const onAddNewWalletToList = (wallet: WalletType) => {
    wallets?.push(wallet);
  }

  const onRemoveWalletFromList = (walletName: string) => {
    if(wallets)
        setWallets(wallets?.filter(wallet => wallet.walletName !== walletName));
  }

  const value: AppContextState = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    walletsAdded: wallets,
    onAddNewWalletToList: onAddNewWalletToList,
    onRemoveWalletFromList: onRemoveWalletFromList,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};
