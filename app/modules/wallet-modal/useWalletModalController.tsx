import { useState } from "react"

const useWalletParentController = () => {
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);

  const toggleWalletModal = () => {
    setShowAddWalletModal(!showAddWalletModal);
  }

  return{
    showAddWalletModal: showAddWalletModal,
    toggleWalletModal: toggleWalletModal,
  }
}

export default useWalletParentController;