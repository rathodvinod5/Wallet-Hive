import { useEffect, useState } from "react";
import { AllowedChainsType, chainsAllowed, transactionListData } from "@/app/data/DATA";
import { getItemAsync, setItemAsync } from "@/app/utilities/SecureStorgeAPI";

const useManageCryptoController = () => {
  const [itemsList, setItemsList] = useState<AllowedChainsType[] | null>(null);

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
    };
    getItem();
  }, []);

  

  const handleIsSelected = async (index: number) => {
    try {
      if(itemsList && itemsList[index]) {
        const newItemsList = [...itemsList];
        const status = !itemsList[index].isEnabled;
        newItemsList[index].isEnabled = status;
        setItemsList(newItemsList);
        await setItemAsync('chainsAllowed', JSON.stringify(itemsList));
      }
    } catch(error) {
      console.log('error: ', error);
    }
  }

  return {
    itemsList: itemsList,
    handleIsSelected: handleIsSelected,
  }
}
export default useManageCryptoController;