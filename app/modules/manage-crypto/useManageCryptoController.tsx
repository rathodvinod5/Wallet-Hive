import { useEffect, useState } from "react";
import { AllowedChainsType, chainsAllowed } from "@/app/data/DATA";
import { getItemAsync, setItemAsync, deleteItemAsync } from "@/app/utilities/SecureStorgeAPI";

const useManageCryptoController = () => {
  const [itemsList, setItemsList] = useState<AllowedChainsType[] | null>(null);
  const [filteredList, setFilteredList] = useState<AllowedChainsType[] | null>(null);
  const [noItemsError, setNoItemsError] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      getItemAsync('chainsAllowed')
        .then((res) => {
          return res && JSON.parse(res);
        })
        .then((chain) => {
          setItemsList(chain ? chain as AllowedChainsType[] : chainsAllowed);
        }).catch((error) => {
        console.log('error: ', error);
      });
      // deleteItemAsync('chainsAllowed').then(() => {
      //   console.log('sucessfully deleted');
      // }).catch((error) => {});
    };
    getItem();
  }, []);

  const handleIsSelected = async (symbol: string) => {
    try {
      if(itemsList) {
        const newItemsList = [...itemsList];
        const indexOfItem = newItemsList.findIndex((item) => item.symbol === symbol);
        const status = !newItemsList[indexOfItem].isEnabled;
        newItemsList[indexOfItem].isEnabled = status;
        setItemsList(newItemsList);
        await setItemAsync('chainsAllowed', JSON.stringify(itemsList));
      }
    } catch(error) {
      console.log('error: ', error);
    }
  }

  const getFilterItems = (filterString: string) => {
    if(!filterString) {
      setNoItemsError(false);
      setFilteredList(null);
      return;
    }

    const items = itemsList?.filter(items => 
      items.title.toLocaleLowerCase() == filterString.toLocaleLowerCase() ||
      items.symbol.toLocaleLowerCase() == filterString.toLocaleLowerCase()
    );
    if(!items || !items.length) {
      setFilteredList(null);
      setNoItemsError(true);
      return; 
    }

    setFilteredList(items);
    setNoItemsError(false);
  }

  return {
    itemsList: itemsList,
    filteredList: filteredList,
    handleIsSelected: handleIsSelected,
    getFilterItems: getFilterItems,
  }
}
export default useManageCryptoController;