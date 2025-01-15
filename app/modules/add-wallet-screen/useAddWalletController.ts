import { useState } from "react";
import { SwitchType } from "./types/Types";

const useAddWalletControllet = () => {
  const [walletName, setWalletName] = useState("New Wallet");
  const [phrase, setPhrase] = useState("");
  const [secretKey, setSecreteKey] = useState("");
  const [activeItem, setActiveItem] = useState<SwitchType>('phrase');
  const [error, setError] = useState<string | null>(null);

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
    //   if(phrases.length < 12) {
    //     setError("Please enter atleast 12 phrases");
    //     return;
    //   }
      setPhrase(phrases.join(" "));
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