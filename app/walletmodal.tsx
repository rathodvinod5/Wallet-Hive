import { Text, View, StyleSheet } from "react-native";
import WalletModalContents from "./modules/explore-tab/WalletModalContents";
import { useRouter } from "expo-router";
import ModalHandler from "./modules/explore-tab/ModalHandler";
import useWalletParentController from "./modules/wallet-modal/useWalletModalController";
import AddWalletModalContent from "./modules/wallet-modal/AddWalletModalContent";

const WalletModalScreen = () => {
  const { showAddWalletModal, toggleWalletModal } = useWalletParentController();
  const { back } = useRouter();

  return(
    <View style={styles.container}>
      <ModalHandler
        isVisible={showAddWalletModal}
        onClose={toggleWalletModal}
      >
        <AddWalletModalContent />
      </ModalHandler>
      <WalletModalContents 
        onPressAdd={toggleWalletModal} 
        onPressClose={() => back()} 
      />
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