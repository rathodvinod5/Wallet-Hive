import { useRouter } from "expo-router";
import { useState } from "react";

const useCreateNewWalletController = () => {
  const [phrases, setPhrases] = useState<string[] | null>(null);
  const { back } = useRouter();

  const onClickGeneratePhraseButton = () => {
    if(!phrases) {
        const arr = ['kangaroo', 'only', 'valid', 'retain', 'react', 'lucid', 'hello', 'grand', 'dam', 'dust', 'poke', 'brown'];
        setPhrases(arr);
        return;
    }

    // code to write/add the phrase to parent app state data and all wallet screen
    back();
  }

  return {
    phrases: phrases,
    onClickGeneratePhraseButton: onClickGeneratePhraseButton,
  }
} 

export default useCreateNewWalletController;