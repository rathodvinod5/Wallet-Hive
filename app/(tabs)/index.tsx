import { Image, StyleSheet, Platform, Text, Modal, View, TouchableOpacity } from 'react-native';
import Screen from '@/components/Screen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SearchInput from '@/components/ui/search-input/SearchInput';
import { ThemedText } from '@/components/ThemedText';
import BalanceParentContainer from '../modules/explore-tab/BalanceParentContainer';
import FeatureContainer from '../modules/explore-tab/FeatureContainer';
import CryptoNFTTabContainer from '../modules/explore-tab/CryptoNFTTabContainer';
import useParentController from '../modules/explore-tab/ParentController';
import ModalHandler from '../modules/explore-tab/ModalHandler';
import WalletModalContents from '../modules/explore-tab/WalletModalContents';


export default function HomeScreen() {
  const { showWalletModal, toggleWalletModal } = useParentController();

  return(
    <Screen>
      <View style={styles.parentContainer}>
        <ModalHandler 
          isVisible={showWalletModal}
          onClose={toggleWalletModal}
        >
          <WalletModalContents />
        </ModalHandler>

        <View style={styles.topContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{ padding: 8 }}
          >
            <MaterialIcons name="settings" size={26} color="black" />
          </TouchableOpacity>
          <ThemedText type="textMDSemibold">Home</ThemedText>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleWalletModal}
            style={{ padding: 8 }}
          >
            <AntDesign name="pluscircle" size={26} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <SearchInput />
          <BalanceParentContainer />
          <FeatureContainer />
          <CryptoNFTTabContainer />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '600'
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20
  }
});
