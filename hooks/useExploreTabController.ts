import { useState } from "react";

const useExploreTabController = () => {
  const [showBalance, toggleShowBalance] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const onChangeTab = (newIndex: number) => {
    setActiveTab(newIndex);
  }

  const onPressShowAndBalance = () => {
    toggleShowBalance(!showBalance);
  }

  return {
    showBalance: showBalance,
    activeTab: activeTab,
    onChangeTab: onChangeTab,
    onPressShowAndBalance: onPressShowAndBalance,
  };
}

export default useExploreTabController;