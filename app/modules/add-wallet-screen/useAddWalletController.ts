import { useState } from "react";
import { SwitchType } from "./types/Types";
import { identifyBlockchain } from "./CheckChain";
import { isSecretKey, isValidAddress } from "./ValidateAddres";
import { useAppContext } from "@/app/context/ParentContext";
import { WalletType } from "@/app/data/WalletsData";
import { useRouter } from "expo-router";
import { Wallet } from "ethers";
import { AddressObjectEnum, validateEthAddress, validateSolAddress } from "@/app/utilities/ValidateEthAndSolAddress";

type AddressObjectType = {
  [key: string]: string;
}

const useAddWalletControllet = () => {
  const [walletName, setWalletName] = useState("New Wallet");
  const [phrase, setPhrase] = useState("");
  const [secretKey, setSecreteKey] = useState("");
  const [chainSelected, setChainSelected] = useState<string | null>("ethereum");
  const [activeItem, setActiveItem] = useState<SwitchType>('phrase');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { onAddNewWalletToList } = useAppContext();
  const { back } = useRouter();

  const onChangePhrase = (newPhrase: string) => {
    console.log('activeItem: ', activeItem);
    if(activeItem == 'sec-key') {
      setSecreteKey(newPhrase);
      // return;
    } else {
      const str = newPhrase
        .replace(/[^a-zA-Z,\s]/g, '') // Remove invalid characters
        .replace(/[ ]+/g, ' ')        // Collapse multiple spaces into one
        .replace(/\n+/g, '\n')
     setPhrase(str);
    }
  }

  const onChangeWalletName = (name: string) => {
    setWalletName(name);
  }

  const onChangeActiveItem = (item: SwitchType) => {
    if(item !== activeItem)
        setActiveItem(item);
  }

  const validateString = () => {
    console.log('validateString: ', activeItem);
    if(activeItem === 'phrase') {
      const phrases = phrase.trim().toLocaleLowerCase().split(/[\s,]+/).filter(Boolean);
      if(phrases.length < 12) {
        setError("Please enter atleast 12 phrases");
        return;
      }
      setPhrase(phrases.join(" "));
      if(!chainSelected) {
        setIsLoading(true);
        identifyBlockchain(phrase).then((res) => {
          console.log('res: ', res);
          const ethStatus = isValidAddress(res.ethereum, "ethereum");
          // const solStatus = isValidAddress(res.solana, "solana");

          console.log("eth: " + ethStatus);
          if(ethStatus) {
            handleAddressTypes(res.ethereum, "ethereum");
          }
          // if(solStatus) {
          //   const status = validateSolAddress(res.solana);
          //   console.log("sol status: ", status);
          // }

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
          setIsLoading(false);
        }).catch(err => {
          console.log("error occured: ", err);
          setIsLoading(false);
        }).finally(() => {
          // setIsLoading(false);
        });
      }
      return;
    }

    if(activeItem == 'sec-key') {
      console.log('secret key: ', secretKey);
      if(secretKey.trim().length < 64) {
        setError("Please enter a valid secret key");
        return;
      }

      setIsLoading(true);
      if(chainSelected == "ethereum" || chainSelected == "evm") { 
        const walletObj: Wallet | null | boolean = isSecretKey(secretKey, "ethereum");
        console.log('wallet: ', walletObj);
        if(walletObj && walletObj instanceof Wallet && walletObj.address) {
          const newWallet: WalletType = { 
            walletId: walletObj.address,
            walletName: walletName == "New Wallet" ? "Ethereum Wallet" : walletName,
            chain: "ethereum",
            amount: 0.0,
          };
          setIsLoading(false);
          onAddNewWalletToList(newWallet, () => back());
        }
        setIsLoading(false);
      } else if(chainSelected == "solana" || chainSelected == "sol") {
        setIsLoading(false);
      }
    }
  }

  const handleAddressTypes = (address: string, chain: string) => {
    if(chain == "ethereum" || chain == "evm") {
      console.log('in if condition');
      validateEthAddress(address).then((status) => {
        console.log("eth status: ", status);
        if(status == AddressObjectEnum.WALLET) {
          const newWallet: WalletType = { 
            walletId: address,
            walletName: walletName == "New Wallet" ? "Ethereum Wallet" : walletName,
            chain: "ethereum",
            amount: 0.0,
          };
          onAddNewWalletToList(newWallet, () => back());
        }
      }).catch(err => {
        console.log("error: ", err);
      });
    }
  }

  const onChangeSecretKey = (key: string) => {
    setSecreteKey(key);
  }

  return {
    phrase: phrase,
    walletName: walletName,
    activeItem: activeItem,
    secretKey: secretKey,
    isLoading: isLoading,
    onChangePhrase: onChangePhrase,
    onChangeWalletName: onChangeWalletName,
    onChangeActiveItem: onChangeActiveItem,
    validateString: validateString,
    onChangeSecretKey: onChangeSecretKey,
  }
}

export default useAddWalletControllet;