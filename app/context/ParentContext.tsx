import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WalletType } from '../data/WalletsData';
import { walletsAdded } from '../data/WalletsData';
import { TransactionObjType } from '../data/DATA';

// Define the shape of the context state
type AppContextState = {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  walletsAdded: WalletType[] | null;
  selectedWallet: WalletType | null;
  onAddNewWalletToList: (wallet: WalletType) => void,
  onRemoveWalletFromList: (walletName: string) => void,
  onChangeWallet: (walletId: string) => void,

  fromCoin?: TransactionObjType | null,
  toCoin?: TransactionObjType | null,
  onChangeFromCoin: (from: TransactionObjType) => void,
  onChangeToCoin: (from: TransactionObjType) => void,
}

// Default state for the context
const defaultState: AppContextState = {
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  walletsAdded: null,
  selectedWallet: null,
  onAddNewWalletToList: (wallet: WalletType) => {},
  onRemoveWalletFromList: (walletName: string) => {},
  onChangeWallet: (walletId: string) => {},

  fromCoin: null,
  toCoin: null,
  onChangeFromCoin: (from: TransactionObjType) => {},
  onChangeToCoin: (from: TransactionObjType) => {},
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
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [fromCoin, setFromCoin] = useState<TransactionObjType | null>(null);
  const [toCoin, setToCoin] = useState<TransactionObjType | null>(null);

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

  const onChangeWallet = (walletId: string) => {
    if(!wallets) return;
    const index = wallets?.findIndex((item) => item.walletId === walletId);
    if(index >= 0) {
      setSelectedWallet(wallets[index]);
    }
  }

  const onChangeFromCoin = (from: TransactionObjType) => {
    setFromCoin(from);
  }

  const onChangeToCoin = (from: TransactionObjType) => {
    setToCoin(from);
  }

  const value: AppContextState = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    walletsAdded: wallets,
    selectedWallet: selectedWallet,
    fromCoin: fromCoin,
    toCoin: toCoin,
    onAddNewWalletToList: onAddNewWalletToList,
    onRemoveWalletFromList: onRemoveWalletFromList,
    onChangeWallet: onChangeWallet,
    onChangeFromCoin: onChangeFromCoin,
    onChangeToCoin: onChangeToCoin,
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
