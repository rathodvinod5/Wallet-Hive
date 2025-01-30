import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { WalletType } from '../data/WalletsData';
import { walletsAdded } from '../data/WalletsData';
import { AllChainsType, TransactionObjType } from '../data/DATA';
import { getItemAsync, setItemAsync } from '../utilities/SecureStorgeAPI';

// Define the shape of the context state
type AppContextState = {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  walletsAdded: WalletType[] | null;
  walletsRemoved: WalletType[] | null;
  selectedWallet: WalletType | null;
  onAddNewWalletToList: (wallet: WalletType, callback?: () => void) => void,
  onRemoveWalletFromList: (walletName: string) => void,
  onChangeWallet: (walletId: string) => void,
  onSelectRemovedItem: (wallet: WalletType) => void,
  fromCoin?: AllChainsType | null,
  toCoin?: AllChainsType | null,
  onChangeFromCoin: (from: AllChainsType) => void,
  onChangeToCoin: (from: AllChainsType) => void,
}

// Default state for the context
const defaultState: AppContextState = {
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  walletsAdded: null,
  walletsRemoved: null,
  selectedWallet: null,
  onAddNewWalletToList: (wallet: WalletType, callback?: () => void) => {},
  onRemoveWalletFromList: (walletName: string) => {},
  onChangeWallet: (walletId: string) => {},
  onSelectRemovedItem: (wallet: WalletType) => {},
  fromCoin: null,
  toCoin: null,
  onChangeFromCoin: (from: AllChainsType) => {},
  onChangeToCoin: (from: AllChainsType) => {},
};

// Create the context
const AppContext = createContext<AppContextState>(defaultState);

// Provide the context to children components
type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [wallets, setWallets] = useState<WalletType[] | null>(null);
  const [walletsRemoved, setWalletsRemoved] = useState<WalletType[] | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [fromCoin, setFromCoin] = useState<AllChainsType | null>(null);
  const [toCoin, setToCoin] = useState<AllChainsType | null>(null);

  const getItem = async(key: string, callback: (items: WalletType[]) => void) => {
    getItemAsync(key)
      .then((res) => {
        return res && JSON.parse(res);
      })
      .then(callback).catch((error) => {
      console.log('error: ', error);
    });
  };

  useEffect(() => {
    getItem('walletsAdded', (wallets: WalletType[]) => {
      setWallets(wallets ? wallets : null);
    });
    getItem('walletsRemoved', (wallets: WalletType[]) => {
      setWallets(wallets ? wallets : null);
    });
  }, []);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const onAddNewWalletToList = async (wallet: WalletType, callback?: () => void) => {
    if(!wallets) {
      setSelectedWallet(wallet);
    } 
    // wallets?.push(wallet);

    const newWallets = wallets ? [...wallets, wallet] : [wallet]
    setWallets(newWallets);
    // update wallets added and removed wallets in secure storage
    await setItemAsync('walletsAdded', JSON.stringify(newWallets));
    callback && callback();
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

  const onChangeFromCoin = (from: AllChainsType) => {
    setFromCoin(from);
  }

  const onChangeToCoin = (to: AllChainsType) => {
    setToCoin(to);
  }

  const onSelectRemovedItem = (wallet: WalletType) => {

    if(wallets)
      setWallets([...wallets, wallet]);

    if(walletsRemoved)
      setWalletsRemoved(walletsRemoved?.filter(item => item.walletName !== wallet.walletName));

    // update wallets added and removed wallets in secure storage
  }

  const value: AppContextState = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    walletsAdded: wallets,
    walletsRemoved: walletsRemoved,
    selectedWallet: selectedWallet,
    fromCoin: fromCoin,
    toCoin: toCoin,
    onAddNewWalletToList: onAddNewWalletToList,
    onRemoveWalletFromList: onRemoveWalletFromList,
    onChangeWallet: onChangeWallet,
    onSelectRemovedItem: onSelectRemovedItem,
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
