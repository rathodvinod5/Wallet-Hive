import { useState } from "react";
import { type FromAndToType } from "./Types";
import { FromAndToEnum } from "./Constants";

const useSwapContoller = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0); 
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [fromTokenValue, setFromTokenValue] = useState("0");
  const [toTokenValue, setToTokenValue] = useState("0");

  const onChangeToken = (type: FromAndToType, token: string) => {
    if(type === FromAndToEnum.FROM) {
        setFromToken(token);
        return;
    }

    setToToken(token);
  }

  const onChangeTabIndex = (index: number) => {
    setCurrentTabIndex(index);
  }

  const onChangeFromTokenValue = (text: string) => {
    const textToNumber = String(Number(text));
    const regex = /^\d+$/;
    if(regex.test(textToNumber)) {
        setFromTokenValue(textToNumber);
    }
  }

  const onChangeToTokenValue = (text: string) => {
    const textToNumber = String(Number(text));
    const regex = /^\d+$/;
    if(regex.test(textToNumber)) {
        setToTokenValue(textToNumber);
    }
  }

  return {
    currentTabIndex: currentTabIndex,
    fromToken: fromToken,
    toToken: toToken,
    fromTokenValue: fromTokenValue,
    toTokenValue: toTokenValue,
    onChangeToken: onChangeToken,
    onChangeTabIndex: onChangeTabIndex,
    onChangeFromTokenValue: onChangeFromTokenValue,
    onChangeToTokenValue: onChangeToTokenValue,

  }
}

export default useSwapContoller;