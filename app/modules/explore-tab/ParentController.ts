import { useState } from "react";

const useParentController = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  const toggleWalletModal = () => {
    setShowWalletModal(!showWalletModal);
  }

  return {
    showWalletModal: showWalletModal,
    toggleWalletModal: toggleWalletModal,
  }
};

export default useParentController;