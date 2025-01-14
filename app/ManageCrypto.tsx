import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { View, StyleSheet, FlatList } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from "@/components/ui/button/IconButton";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { transactionListData, TransactionObjType } from "./DATA";
import { ThemedText } from "@/components/ThemedText";

export const ManageCryptoHeader = ({
  onPressClose,
  onPressAdd,
}: {
  onPressClose: () => void,
  onPressAdd: () => void,
}) => {
  return (
    <HeaderComponent
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
    />
  );
}

const ManageCrypto = ({
    onPressClose,
    onPressAdd,
  }: {
    onPressClose: () => void,
    onPressAdd: () => void,
  }) => {
  return(
    <View style={styles.container}>
      
      <SearchInput customContainerCss={{ marginTop: 20 }} />

      <FlatList
        data={transactionListData}
        keyExtractor={(item, index) => 'list-item-'+index} 
        renderItem={(item) => <RenderItem<TransactionObjType> item={item.item} />}
        contentContainerStyle={styles.flatlistContainer}
      />
      
    </View>
  );
}

export default ManageCrypto;

type RenderItemProps<T> = {
  item: T;
};

export function RenderItem<T>({ item }: RenderItemProps<T & TransactionObjType>){
  return(
    <View style={styles.listItemObject}>
      <View style={styles.itemLeftContainer}>
      </View>
      <View style={styles.itemRightContainer}>
        <View style={styles.recordContainer}>
          <ThemedText type="textSMSemibold">{item.chain.title}</ThemedText>
          <ThemedText type="textSMSemibold">{item.transactionAmount}</ThemedText>
        </View>
        <View style={styles.recordContainer}>
          <ThemedText type="textSMSemibold">{item.cryptoNativeValue}</ThemedText>
          <ThemedText type="textSMSemibold">{`$0.00`}</ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: 60
  },
  listItemObject: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    gap: 4
  },
  flatlistContainer: { 
    width: '100%', 
    // borderWidth: 1, 
    marginTop: 20 
  },
  itemLeftContainer: {
    padding: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: 'lightgrey'
  },
  itemRightContainer: {
    flex: 1,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});