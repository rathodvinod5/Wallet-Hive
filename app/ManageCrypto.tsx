import { View, StyleSheet, FlatList } from "react-native";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { AllowedChainsType } from "./data/DATA";
import useManageCryptoController from "./modules/manage-crypto/useManageCryptoController";
import ListItemWithSwitch from "./modules/manage-crypto/ListItemWithSwitch";

const ManageCrypto = () => {
  const { itemsList, filteredList, getFilterItems, handleIsSelected } = useManageCryptoController();
  return(
    <View style={styles.container}>
      <SearchInput 
        customContainerCss={{ marginTop: 20 }} 
        onUpdateTextInput={getFilterItems}
      />
      <FlatList
        data={filteredList || itemsList}
        keyExtractor={(item, index) => 'manage-crypto-list-item-'+index+item.symbol} 
        renderItem={({ item, index }) => (
          <ListItemWithSwitch<AllowedChainsType> 
            item={item} 
            handleIsSelected={() => handleIsSelected(item.symbol)}
            key={'manage-crypto-list-item-'+index+item.symbol}
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