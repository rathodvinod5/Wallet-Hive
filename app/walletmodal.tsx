import { Text, View, StyleSheet } from "react-native";
import WalletModalContents from "./modules/explore-tab/WalletModalContents";
import { useRouter } from "expo-router";

const WalletModalScreen = () => {
  const { back } = useRouter();

  return(
    <View style={styles.container}>
      {/* <View style={styles.sliderTipStyles} /> */}
      <WalletModalContents onPressAdd={() => {}} onPressClose={() => back()} />
    </View>
  );
}
export default WalletModalScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    alignItems: 'center', 
    paddingTop: 20 
  },
  sliderTipStyles: {
    width: 80,
    height: 4,
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    marginBottom: 20,
  }
});