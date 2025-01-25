import { StyleSheet, View, Text} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from "@/components/ui/button/IconButton";
import HeaderComponent from "@/components/ui/header/HeaderComponent";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { useRouter, SearchParams, useLocalSearchParams } from "expo-router";
import { RenderFlatlistForCoinAndNFT } from "./modules/explore-tab/CryptoNFTTabContainer";
import { useAppContext } from "./context/ParentContext";
import { ContentContainer } from "./modules/select-coin-screen/ContentContainer";
import useSelectCoinController from "./modules/select-coin-screen/useSelectCoinController";
import { AllChainsType } from "./data/DATA";


const SelectCoinScreen = () => {
  const { back } = useRouter();
  const onPressClose = () => back();
  const { allChains, filteredList, getFilterItems, handleIsSelected } = useSelectCoinController();

  return(
    <View style={styles.container}>
      <HeaderComponent
        title='Select Coin' 
        rightItem={(
          <IconButton onPress={onPressClose}>
            <Ionicons name="close" size={28} color="gray" />
          </IconButton>
        )}
      />
      <View style={{ height: 20 }} />
      <SearchInput onUpdateTextInput={getFilterItems} />
      {allChains || filteredList ? (
        <ContentContainer
          items={filteredList || allChains}
          handleIsSelected={handleIsSelected}
        />
      ) : (
        <View>
          <Text>No items</Text>
        </View>
      )}
      
    </View>
  );
}

export default SelectCoinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});