import { useState } from "react";

const useSendScreenController = () => {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isReceivable, setIsReceivable] = useState(false);

  const onChangeToAddress = (address: string) => {
    setToAddress(address);

    // check whether to toAddress is able to accept payment and NFT
    // and toggle isReceivable to true
  }

  const onChangeAmount = (amt: string) => {
    setAmount(amt);
  }

  return {
    toAddress: toAddress,
    amount: amount,
    isReceivable: isReceivable,
    onChangeToAddress: onChangeToAddress,
    onChangeAmount: onChangeAmount,
  }
}

export default useSendScreenController;