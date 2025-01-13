import HeaderComponent from "@/components/ui/header/HeaderComponent";
import { View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconButton from "@/components/ui/button/IconButton";
import SearchInput from "@/components/ui/search-input/SearchInput";

const ManageCrypto = ({
    onPressClose,
    onPressAdd,
  }: {
    onPressClose: () => void,
    onPressAdd: () => void,
  }) => {
  return(
    <View style={styles.container}>
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

      
      <SearchInput customContainerCss={{ marginTop: 20 }} />
      
    </View>
  );
}

export default ManageCrypto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
});