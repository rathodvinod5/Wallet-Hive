import { useState } from "react";

const useSendScreenController = () => {
  const [toAddress, setToAddress] = useState("");

  const onChangeToAddress = (address: string) => {
    setToAddress(address);
  }

  return {
    toAddress: toAddress,
    onChangeToAddress: onChangeToAddress,
  }
}

export default useSendScreenController;