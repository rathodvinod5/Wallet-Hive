import { View, Text, StyleSheet, FlatList } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import IconButton from "@/components/ui/button/IconButton";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import SearchInput from "@/components/ui/search-input/SearchInput";
import useCopyAddressController from "./modules/copy-address-screen/useCopyAddressController";
import { useAppContext } from "./context/ParentContext";
import { WalletType } from "./data/WalletsData";
import ListItemWithCopyIcon from "./modules/copy-address-screen/ListItemWithCopyIcon";

const CopyAddressScreen = () => {
  const { walletsAdded } = useAppContext();
  const { filteredWallet, filterWallets } = useCopyAddressController();

  const { back } = useRouter();
  const onPressClose = () => back();
  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Your Address' 
        rightItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="close" size={28} color="gray" />
          </IconButton>
        )}
      />
      <View style={{ height: 20 }} />
      <SearchInput onUpdateTextInput={filterWallets} />
      <FlatList
        data={filteredWallet || walletsAdded} 
        keyExtractor={(item) => 'address-item-'+item.walletName}
        renderItem={({ item }: { item: WalletType }) => (
          <ListItemWithCopyIcon<WalletType> item={item} />
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

export default CopyAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  contentContainerStyle: {
    paddingTop: 30
  }
});