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
  const [chainSelected, setChainSelected] = useState<string | null>(null); // "solana" | "ethereum" | eth | evm | sol
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
      // if(phrases.length < 12) {
      //   setError("Please enter atleast 12 phrases");
      //   return;
      // }
      setPhrase(phrases.join(" "));
      if(!chainSelected) {
        console.log("inside if")
        setIsLoading(true);
        identifyBlockchain(phrase).then((res) => {
          console.log('res: ', res);
          const ethStatus = isValidAddress(res.ethereum, "ethereum");
          const solStatus = isValidAddress(res.solana, "solana");

          console.log("eth and sol status: ", ethStatus, solStatus);
          if(ethStatus) {
            handleAddressTypes(res.ethereum, "ethereum");
          }
          if(solStatus) {
            // const status: null | string = validateSolAddress(res.solana);
            handleAddressTypes(res.solana, "solana");
          }
          setIsLoading(false);
        }).catch(err => {
          console.log("error occured: ", err);
          setIsLoading(false);
        });
      }
      return;
    } else if(activeItem == 'sec-key') {
      console.log('secret key: ', secretKey, secretKey.length);
      if(secretKey.trim().length < 64) {
        setError("Please enter a valid secret key");
        return;
      }

      setIsLoading(true);
      let walletObj: Wallet | null | boolean | string = null;
      if(chainSelected == "ethereum" || chainSelected == "evm" || chainSelected == "eth") { 
        walletObj = isSecretKey(secretKey, "ethereum");
        console.log('walletObj: ', walletObj);
      } else if(chainSelected == "solana" || chainSelected == "sol") {
        walletObj = isSecretKey(secretKey, "solana");
        // return;
      }

      if(!walletObj) {
        setError("Invalid Secret Key");
        setIsLoading(false);
        return;
      } else if((chainSelected == "solana" || chainSelected == "sol") && walletObj) {
        console.log('sol address: ', walletObj);
        const newWallet: WalletType = { 
          walletId: walletObj as string,
          walletName: walletName == "New Wallet" ? "Solana Wallet" : walletName,
          chain: "solana",
          amount: 0.0,
        };
        setIsLoading(false);
        onAddNewWalletToList(newWallet, () => back());
      } else if(walletObj && walletObj instanceof Wallet && walletObj.address) {
        console.log('wallet: ', walletObj);
        const newWallet: WalletType = { 
          walletId: walletObj.address,
          walletName: walletName == "New Wallet" ? "Ethereum Wallet" : walletName,
          chain: "ethereum",
          amount: 0.0,
        };
        setIsLoading(false);
        onAddNewWalletToList(newWallet, () => back());
      }
    }
  }

  const handleAddressTypes = (address: string, chain: string, status?: string | null) => {
    if(chain == "ethereum" || chain == "evm") {
      validateEthAddress(address).then((walletObj) => {
        console.log("eth status: ", walletObj);
        if(walletObj.status == AddressObjectEnum.WALLET) {
          const newWallet: WalletType = { 
            walletId: address,
            walletName: walletName == "New Wallet" ? "Ethereum Wallet" : walletName,
            chain: "ethereum",
            amount: walletObj.balance as number,
          };
          onAddNewWalletToList(newWallet, () => back());
        }
      }).catch(err => {
        console.log("error: ", err);
      });
    } else if(chain == "solana" || chain == "sol") {
      console.log('in sol section')
      validateSolAddress(address).then((walletObj) => {
        console.log("sol status: ", walletObj);
        if(walletObj.status == AddressObjectEnum.WALLET) {
          const newWallet: WalletType = { 
            walletId: address,
            walletName: walletName == "New Wallet" ? "Solana Wallet" : walletName,
            chain: "solana",
            amount: walletObj.balance as number,
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