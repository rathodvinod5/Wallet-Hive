import { useState } from "react";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { View, StyleSheet, FlatList, Switch } from "react-native";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { transactionListData, TransactionObjType } from "./DATA";
import { ThemedText } from "@/components/ThemedText";

const ManageCrypto = () => {
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

  return(
    <View style={styles.container}>
      {/* <HeaderComponent
        title='Manage Crypto' 
        leftItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="arrow-back" size={28} color="gray" />
          </IconButton>
        )}
        rightItem={(
          <IconButton onPress={onPressAdd}>
            <Ionicons name="add" size={28} color="black" />
          </IconButton>
        )}
      /> */}
      <SearchInput customContainerCss={{ marginTop: 20 }} />
      <FlatList
        data={itemsList}
        keyExtractor={(item, index) => 'manage-crypto-list-item-'+index} 
        renderItem={({ item, index }) => (
          <RenderItem<TransactionObjType> 
            item={item} 
            // handleIsSelected={() => handleIsSelected(index)}
          />
        )}
        contentContainerStyle={styles.flatlistContainer}
      />
      
    </View>
  );
}

export default ManageCrypto;

type RenderItemProps<T> = {
  item: T;
  // handleIsSelected: () => void,
};

export function RenderItem<T>({ 
  item, 
  // handleIsSelected, 
}: RenderItemProps<T & TransactionObjType>){
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleIsEnabled = () => {
    setIsEnabled(!isEnabled);
  }

  return(
    <View style={styles.listItemObject}>
      <View style={styles.itemLeftContainer} />
      <View style={styles.itemRightContainer}>
        <View style={styles.recordContainer}>
          <ThemedText type="textSMSemibold">{item.chain.title}</ThemedText>
          <ThemedText type="textSMSemibold">{item.transactionAmount}</ThemedText>
        </View>
        <ThemedText type="textSMSemibold">{item.chain.title}</ThemedText>
      </View>
      <Switch
        trackColor={{false: 'lightgray', true: 'blue'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="gray"
        onChange={toggleIsEnabled}
        value={isEnabled}
      />
    </View>
  );
}

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
  itemLeftContainer: {
    padding: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: 'gray'
  },
  itemRightContainer: {
    flex: 1,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});