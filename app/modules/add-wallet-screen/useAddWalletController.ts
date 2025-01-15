import { useState } from "react";
import { SwitchType } from "./types/Types";

const useAddWalletControllet = () => {
  const [walletName, setWalletName] = useState("New Wallet");
  const [phrase, setPhrase] = useState("");
  const [activeItem, setActiveItem] = useState<SwitchType>('phrase');

  const onChangePhrase = (newPhrase: string) => {
    setPhrase(newPhrase);
  }

  const onChangeWalletName = (name: string) => {
    setWalletName(name);
  }

  const onChangeActiveItem = (item: SwitchType) => {
    if(item !== activeItem)
        setActiveItem(item);
  }

  return {
    phrase: phrase,
    walletName: walletName,
    activeItem: activeItem,
    onChangePhrase: onChangePhrase,
    onChangeWalletName: onChangeWalletName,
    onChangeActiveItem: onChangeActiveItem,
  }
}

export default useAddWalletControllet;