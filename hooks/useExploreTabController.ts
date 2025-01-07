import { useState } from "react";

const useExploreTabController = () => {
  const [showBalance, toggleBalance] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const onChangeTab = (newIndex: number) => {
    setActiveTab(newIndex);
  }

  return {
    showBalance: showBalance,
    activeTab: activeTab,
    onChangeTab: onChangeTab,
  };
}

export default useExploreTabController;