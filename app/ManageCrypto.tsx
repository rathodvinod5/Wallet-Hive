import { useState } from "react";
import { View, StyleSheet, FlatList, Switch } from "react-native";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { AllowedChainsType, TransactionObjType } from "./data/DATA";
import useManageCryptoController from "./modules/manage-crypto/useManageCryptoController";
import ListItemWithSwitch from "./modules/manage-crypto/ListItemWithSwitch";

const ManageCrypto = () => {
  const { itemsList, handleIsSelected } = useManageCryptoController();

  return(
    <View style={styles.container}>
      <SearchInput customContainerCss={{ marginTop: 20 }} />
      <FlatList
        data={itemsList}
        keyExtractor={(item, index) => 'manage-crypto-list-item-'+index} 
        renderItem={({ item, index }) => (
          <ListItemWithSwitch<AllowedChainsType> 
            item={item} 
            handleIsSelected={() => handleIsSelected(index)}
          />
        )}
        contentContainerStyle={styles.flatlistContainer}
      />
      
    </View>
  );
}

export default ManageCrypto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listItemObject: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 4,
    backgroundColor: 'lightgray',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6
  },
  flatlistContainer: { 
    width: '100%', 
    marginTop: 20 
  },
});