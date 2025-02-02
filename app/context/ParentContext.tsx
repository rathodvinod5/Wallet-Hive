import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { WalletType } from '../data/WalletsData';
import { walletsAdded } from '../data/WalletsData';
import { AllChainsType, TransactionObjType } from '../data/DATA';
import { getItemAsync, setItemAsync, deleteItemAsync } from '../utilities/SecureStorgeAPI';

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
  onDeleteItem: (wallet: WalletType, walletSet: string) => void,
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
  onDeleteItem: (wallet: WalletType, walletSet: string) => {},
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
    deleteItemAsync('walletsAdded');
    deleteItemAsync('walletsRemoved');

    // getItem('walletsAdded', (newWallets: WalletType[]) => {
    //   console.log('useEffect wallets: ', newWallets);
    //   setWallets(newWallets);
    // });
    // getItem('walletsRemoved', (walletsRemoved: WalletType[]) => {
    //   console.log('useEffect walletsRemoved: ', walletsRemoved);
    //   setWalletsRemoved(walletsRemoved);
    // });
  }, []);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const onAddNewWalletToList = async (wallet: WalletType, callback?: () => void) => {
    const newWallets = wallets ? [...wallets, wallet] : [wallet]
    // update wallets added and removed wallets in secure storage
    await setItemAsync('walletsAdded', JSON.stringify(newWallets));
    if(!wallets) {
      setWallets(newWallets);
      setSelectedWallet(wallet);
    } else {
      setWallets(newWallets);
    }
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

    const newWallets = wallets ? [...wallets, wallet] : [wallet];
    setWallets(newWallets);

    const newRemovedWallets = walletsRemoved?.filter(item => item.walletName !== wallet.walletName);
    if(newRemovedWallets) {
      setWalletsRemoved(newRemovedWallets);
    } else {
      setWalletsRemoved(null);
    }

    // update wallets added and removed wallets in secure storage
    setItemAsync('walletsAdded', JSON.stringify(newWallets));
    setItemAsync('walletsRemoved', JSON.stringify(newRemovedWallets));
  }

  const onDeleteItem = (wallet: WalletType, walletSet: string) => {
    if(walletSet === 'walletsAdded') {
      const newWallets = wallets?.filter(item => item.walletId !== wallet.walletId);
      if(newWallets) {
        setWallets(newWallets);
        setItemAsync('walletsAdded', JSON.stringify(newWallets));
      }
      return;
    }

    const newWallets = walletsRemoved?.filter(item => item.walletId !== wallet.walletId);
    if(newWallets) {
      setWalletsRemoved(newWallets);
      setItemAsync('walletsRemoved', JSON.stringify(newWallets));
    }
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
    onDeleteItem: onDeleteItem,
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
