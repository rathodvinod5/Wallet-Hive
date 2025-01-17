import { useState } from "react";
import { transactionListData, TransactionObjType } from "@/app/data/DATA";

const useManageCryptoController = () => {
  const [itemsList, setItemsList] = useState<TransactionObjType[]>(
    JSON.parse(JSON.stringify(transactionListData))
  );

  const handleIsSelected = (index: number) => {
    // console.log('in handleIsSelected: ', item);
    // if(isSelectedSet.has(item)) {
    //   isSelectedSet.delete(item);
    //   return;
    // }
    // isSelectedSet.add(item);

    try {
      if(itemsList[index]) {
        const status = !itemsList[index].isEnabled;
        itemsList[index].isEnabled = status;
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