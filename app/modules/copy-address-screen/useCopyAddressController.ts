import { useAppContext } from "@/app/context/ParentContext";
import { WalletType } from "@/app/data/WalletsData";
import { useState } from "react";

const useCopyAddressController = () => {
  const [filteredWallet, setFilteredWallets] = useState<WalletType[] | null>();

  const { walletsAdded } = useAppContext();

  const filterWallets = (filterString: string) => {
    if(!filterString) {
      setFilteredWallets(null);
      return;
    }

    const wallets = walletsAdded?.filter(wallet => 
      wallet.walletName.toLocaleLowerCase() == filterString.toLocaleLowerCase() ||
      wallet.chain.toLocaleLowerCase() == filterString.toLocaleLowerCase()
    );
    if(wallets && wallets.length)
        setFilteredWallets(wallets);
  }
  return {
    filteredWallet: filteredWallet,
    filterWallets: filterWallets,
  };
}

export default useCopyAddressController;