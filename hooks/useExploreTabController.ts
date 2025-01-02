import { useState } from "react";

const useExploreTabController = () => {
  const [showBalance, toggleBalance] = useState(false);

  return {
    showBalance: showBalance,
  };
}

export default useExploreTabController;