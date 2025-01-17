import { useState } from "react";

const useParentController = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showManageCryptoModal, setShowManageCrytpoModal] = useState(false);

  const toggleWalletModal = () => {
    setShowWalletModal(!showWalletModal);
  }

  const toggleManageCryptoModal = () => {
    setShowManageCrytpoModal(!showManageCryptoModal);
  }

  return {
    showWalletModal: showWalletModal,
    showManageCryptoModal: showManageCryptoModal,
    toggleWalletModal: toggleWalletModal,
    toggleManageCryptoModal: toggleManageCryptoModal,
  }
};

export default useParentController;