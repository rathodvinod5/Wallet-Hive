import { useAppContext } from "@/app/context/ParentContext";
import { allChains, AllChainsType, AllowedChainsType } from "@/app/data/DATA";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

const useSelectCoinController = () => {
  const [allChainsItems, setAllChains] = useState<AllChainsType[] | null>(allChains);
  const [filteredList, setFilteredList] = useState<AllChainsType[] | null>(null);

  const { fromCoin, toCoin, onChangeFromCoin, onChangeToCoin } = useAppContext();

  const { back } = useRouter();
  const { source } = useLocalSearchParams();

  const handleIsSelected = (item: AllChainsType) => {
    if(source === 'from') {
      onChangeFromCoin(item);
    } else {
      onChangeToCoin(item);
    }
    back();
  }

  const getFilterItems = (filterString: string) => {
    if(!filterString) {
      setFilteredList(null);
      return;
    }

    const items = allChainsItems?.filter(items => 
      items.chain.title.toLocaleLowerCase() == filterString.toLocaleLowerCase() ||
      items.chain.symbol.toLocaleLowerCase() == filterString.toLocaleLowerCase()
    );
    if(!items || !items.length) {
      setFilteredList(null);
      return; 
    }

    setFilteredList(items);
  }

  return {
    allChains: allChainsItems,
    setAllChains,
    filteredList,
    setFilteredList,
    handleIsSelected,
    getFilterItems,
  };
};

export default useSelectCoinController;