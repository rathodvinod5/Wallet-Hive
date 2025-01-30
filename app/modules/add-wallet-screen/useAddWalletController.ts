import { useState } from "react";
import { SwitchType } from "./types/Types";
import { identifyBlockchain } from "./CheckChain";
import { isValidAddress } from "./ValidateAddres";
import { useAppContext } from "@/app/context/ParentContext";
import { WalletType } from "@/app/data/WalletsData";
import { useRouter } from "expo-router";

const useAddWalletControllet = () => {
  const [walletName, setWalletName] = useState("New Wallet");
  const [phrase, setPhrase] = useState("");
  const [secretKey, setSecreteKey] = useState("");
  const [chainSelected, setChainSelected] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<SwitchType>('phrase');
  const [error, setError] = useState<string | null>(null);

  const { onAddNewWalletToList } = useAppContext();
  const { back } = useRouter();

  const onChangePhrase = (newPhrase: string) => {
    const str = newPhrase
      .replace(/[^a-zA-Z,\s]/g, '') // Remove invalid characters
      .replace(/[ ]+/g, ' ')        // Collapse multiple spaces into one
      .replace(/\n+/g, '\n')
    setPhrase(str);
  }

  const onChangeWalletName = (name: string) => {
    setWalletName(name);
  }

  const onChangeActiveItem = (item: SwitchType) => {
    if(item !== activeItem)
        setActiveItem(item);
  }

  const validateString = () => {
    if(activeItem === 'phrase') {
      const phrases = phrase.split(/[\s,]+/).filter(Boolean);
      if(phrases.length < 12) {
        setError("Please enter atleast 12 phrases");
        return;
      }
      setPhrase(phrases.join(" "));
      if(!chainSelected) {
        identifyBlockchain(phrase).then((res) => {
          const ethStatus = isValidAddress(res.ethereum, "ethereum");
          const solStatus = isValidAddress(res.solana, "solana");
          console.log("eth: " + res.ethereum + ",  sol: " + res.solana);
          // if(ethStatus) {
          //   const newWallet: WalletType = { 
          //     walletId: res.ethereum,
          //     walletName: walletName == "New Wallet" ? "Ethereum Wallet" : walletName,
          //     chain: "ethereum",
          //     amount: 0.0,
          //   };
          //   onAddNewWalletToList(newWallet, () => back());
          // } else if(solStatus) {
          //   const newWallet: WalletType = { 
          //     walletId: res.solana,
          //     walletName: walletName == "New Wallet" ? "Solana Wallet" : walletName,
          //     chain: "solana",
          //     amount: 0.0,
          //   };
          //   onAddNewWalletToList(newWallet, () => back());
          // }
        }).catch(err => {
          console.log("error occured: ", err);
        });
      }
    }
    if(error) setError(null);
  }

  const onChangeSecretKey = (key: string) => {
    setSecreteKey(key);
  }

  return {
    phrase: phrase,
    walletName: walletName,
    activeItem: activeItem,
    secretKey: secretKey,
    onChangePhrase: onChangePhrase,
    onChangeWalletName: onChangeWalletName,
    onChangeActiveItem: onChangeActiveItem,
    validateString: validateString,
    onChangeSecretKey: onChangeSecretKey,
  }
}

export default useAddWalletControllet;